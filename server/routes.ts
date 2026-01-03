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

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          sessionId: sessionId || `session-${Date.now()}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}`);
      }

      const data = await response.json();
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
