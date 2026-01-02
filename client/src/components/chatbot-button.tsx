import { useEffect } from "react";

export function ChatbotButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chatbot-widget">
      <elevenlabs-convai agent-id="agent_2501k65tqvxzeabtnfrr9e5xpfd9"></elevenlabs-convai>
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
