import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatbotButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chatbot-widget">
      <Button size="icon" className="w-14 h-14 rounded-full btn-primary-gradient shadow-lg">
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
