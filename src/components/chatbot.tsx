"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2, Minus, Maximize2 } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please check your API key configuration." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl transition-transform hover:scale-110 active:scale-95"
          >
            <MessageSquare className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "64px" : "500px",
              width: "min(400px, calc(100vw - 48px))"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="flex flex-col overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/20 bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex h-16 items-center justify-between border-b border-black/5 dark:border-white/10 px-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-bold">AI Assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center text-sm text-muted-foreground mt-10">
                      Hi! I&apos;m Shaik&apos;s AI assistant. Ask me anything about his work or experience.
                    </div>
                  )}
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                          msg.role === "user"
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2 rounded-2xl bg-neutral-100 dark:bg-neutral-800 px-4 py-2 text-sm">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Thinking...
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="border-t border-black/5 dark:border-white/10 p-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message..."
                      className="w-full rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-6 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-white p-2 text-white dark:text-black transition-opacity disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
