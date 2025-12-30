import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ChatbotButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="w-16 h-16 rounded-full shadow-lg hover-glow animate-pulse-glow p-0"
        data-testid="button-chatbot"
        onClick={() => {
          // Placeholder for chatbot integration
          console.log("Chatbot clicked - ready for integration");
        }}
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-background animate-pulse" />
    </motion.div>
  );
}
