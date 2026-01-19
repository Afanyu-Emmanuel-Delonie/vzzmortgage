import { useState, useRef, useEffect, useCallback } from "react";

const WEBHOOK_URL =
  "https://afavirtuals.space/webhook/a0eeae27-7c0c-4f13-964b-2edabc2f7545/chat";

export const useChatWidget = (externalIsOpen, externalSetIsOpen) => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(
    () => `ella_${Math.random().toString(36).substring(7)}`
  );
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi! I'm **Serra** 👋\n\nI'm your guide at VZZ Mortgage, here to make home financing simple and stress-free. What can I help you with today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);

  // Use external state if provided, otherwise use internal state
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalSetIsOpen || setInternalIsOpen;

  // Auto-scroll logic
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen, scrollToBottom]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      text: trimmedInput,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId,
          chatInput: trimmedInput,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();

      let botText = "";
      if (typeof data === "string") botText = data;
      else botText = data.output || data.response || data.message || "";

      if (!botText || botText.length < 3) {
        botText =
          "I received your message but couldn't generate a proper response. Please try again or contact support@vzzmortgage.com.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: botText,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      if (err.name === "AbortError") return;

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "I'm having trouble connecting. Check your network or contact support@vzzmortgage.com.",
          sender: "bot",
          timestamp: new Date(),
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    input,
    setInput,
    isTyping,
    messages,
    messagesEndRef,
    inputRef,
    handleSend,
    handleKeyDown,
  };
};
