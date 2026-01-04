"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, User, Bot, Minus } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Shaik's AI assistant. How can I help you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "That's a great question about Shaik's work! As an AI, I can tell you that Shaik specializes in creating high-end, minimalist digital experiences using Next.js, TypeScript, and Framer Motion." 
      }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl dark:bg-white dark:text-black"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            className="flex h-[500px] w-[350px] flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-950 sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/5 bg-black p-4 text-white dark:border-white/5 dark:bg-white dark:text-black">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 dark:bg-black/20">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">Shaik AI</h3>
                  <p className="text-[10px] opacity-70">Always online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 hover:bg-white/10 dark:hover:bg-black/10"
                >
                  <Minus size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 hover:bg-white/10 dark:hover:bg-black/10"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex max-w-[80%] items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${msg.role === "user" ? "bg-zinc-100 dark:bg-zinc-800" : "bg-black dark:bg-white"}`}>
                      {msg.role === "user" ? <User size={12} className="text-black dark:text-white" /> : <Bot size={12} className="text-white dark:text-black" />}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-black text-white dark:bg-white dark:text-black rounded-tr-none" 
                        : "bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white rounded-tl-none"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 px-4 py-3 dark:bg-zinc-900">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.2s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.4s]"></span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={handleSubmit}
              className="border-t border-black/5 p-4 dark:border-white/5"
            >
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full rounded-full border border-black/10 bg-zinc-50 px-5 py-3 pr-12 text-sm outline-none transition-all focus:border-black dark:border-white/10 dark:bg-zinc-900 dark:focus:border-white"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
