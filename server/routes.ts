import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
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
