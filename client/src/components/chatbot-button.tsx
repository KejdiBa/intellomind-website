import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}


export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hallo! Wie kann ich Ihnen helfen?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowWelcome(false);
      return;
    }
    
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowWelcome(false);
  };

  const handleStartChat = () => {
    setShowWelcome(false);
    setIsOpen(true);
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          sessionId: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook response was not ok");
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: data.output || data.text || data.response || data.message || "Entschuldigung, ich konnte keine Antwort generieren.",
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: "Entschuldigung, es gab einen Fehler bei der Verbindung. Bitte versuchen Sie es später erneut.",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chatbot-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[360px] h-[500px] bg-background border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">IntelloMind Chat</h3>
                  <p className="text-xs text-white/70">KI-Assistent</p>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleToggle}
                className="text-white hover:bg-white/20"
                data-testid="button-chat-close"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                          : "bg-muted text-foreground"
                      }`}
                      data-testid={`message-${message.role}-${message.id}`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg px-4 py-2">
                      <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ihre Nachricht..."
                  disabled={isLoading}
                  className="flex-1"
                  data-testid="input-chat-message"
                />
                <Button
                  size="icon"
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="btn-primary-gradient"
                  data-testid="button-chat-send"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 min-w-[240px]"
            data-testid="chatbot-welcome-bubble"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-60 blur-lg" />
              
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/20 shadow-2xl p-4">
                <button
                  onClick={() => setShowWelcome(false)}
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-slate-200/80 dark:bg-slate-700/80 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                  data-testid="button-welcome-close"
                >
                  <X className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                </button>
                
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-slate-700 dark:text-white font-medium text-sm pr-4">
                    Hi, willkommen bei IntelloMind!
                  </p>
                </div>
              </div>
              
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white/80 dark:bg-slate-900/80 border-r border-b border-white/40 dark:border-white/20 transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        data-testid="button-chatbot-toggle"
        className="relative w-14 h-14 rounded-full cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300" />
        
        <div className="absolute inset-[2px] rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-2xl" />
        
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 group-hover:from-cyan-400/30 group-hover:via-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300" />
        
        <div className="relative w-full h-full flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6 text-slate-700 dark:text-white drop-shadow-sm" />
          ) : (
            <MessageCircle className="w-6 h-6 text-slate-700 dark:text-white drop-shadow-sm" />
          )}
        </div>
      </motion.button>
    </div>
  );
}
