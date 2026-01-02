import { useEffect, useState, useCallback } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);

  const loadWidget = useCallback(() => {
    if (document.querySelector('script[src*="elevenlabs/convai-widget-embed"]')) {
      setWidgetReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    script.onload = () => {
      setTimeout(() => setWidgetReady(true), 100);
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (isOpen && !widgetReady) {
      loadWidget();
    }
  }, [isOpen, widgetReady, loadWidget]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chatbot-widget">
      {isOpen && widgetReady && (
        <div className="mb-4">
          <elevenlabs-convai agent-id="agent_2501k65tqvxzeabtnfrr9e5xpfd9"></elevenlabs-convai>
        </div>
      )}
      <Button 
        size="icon" 
        className="w-14 h-14 rounded-full btn-primary-gradient shadow-lg"
        onClick={handleToggle}
        data-testid="button-chatbot-toggle"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": { "agent-id": string };
    }
  }
}
