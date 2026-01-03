import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

const N8N_WEBHOOK_URL = "https://n8n.srv1101287.hstgr.cloud/webhook/3509e0dc-16f9-4a0c-acd4-6f00fc90ea50/chat";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const payload = {
        message,
        sessionId: sessionId || `session-${Date.now()}`,
      };
      
      console.log("Sending to n8n webhook:", payload);

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log("n8n webhook response status:", response.status);
      console.log("n8n webhook response body:", responseText);

      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}: ${responseText}`);
      }

      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        data = { response: responseText };
      }
      
      return res.json(data);
    } catch (error) {
      console.error("Chat webhook error:", error);
      return res.status(500).json({ 
        error: "Failed to process chat message" 
      });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const parseResult = insertContactSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        const validationError = fromZodError(parseResult.error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }

      const contact = await storage.createContactSubmission(parseResult.data);
      
      return res.status(201).json({
        message: "Contact submission received successfully",
        id: contact.id,
      });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      return res.status(500).json({ 
        message: "Failed to process contact submission" 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      return res.json(contacts);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({ 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  return httpServer;
}
