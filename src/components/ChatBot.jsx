/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, X, Minus, Maximize2, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import MessageItem from './MessageItem';

const WEBHOOK_URL = 'https://afavirtuals.space/webhook/a0eeae27-7c0c-4f13-964b-2edabc2f7545/chat';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `ella_${Math.random().toString(36).substring(7)}`);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi! I'm **Serra** 👋\n\nI’m your guide at VZZ Mortgage, here to make home financing simple and stress-free. What can I help you with today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const abortControllerRef = useRef(null);

  // Auto-scroll logic
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen, scrollToBottom]);

  // Attention popup triggers
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      text: trimmedInput,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sendMessage',
          sessionId,
          chatInput: trimmedInput,
        }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      
      let botText = '';
      if (typeof data === 'string') botText = data;
      else botText = data.output || data.response || data.message || '';

      // If webhook returns empty, show a default message
      if (!botText || botText.length < 3) {
        botText = "I received your message but couldn't generate a proper response. Please try again or contact support@vzzmortgage.com.";
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        timestamp: new Date(),
      }]);

    } catch (err) {
      if (err.name === 'AbortError') return;
      
      // Show error message on network failure
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting. Check your network or contact support@vzzmortgage.com.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsTyping(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

 return (
    <div className="fixed bottom-15 right-6 md:bottom-6 md:right-6 z-[9999] font-sans">
      {/* Attention Popup */}
      {/* {showPopup && !isOpen && (
        <div className="absolute bottom-16 sm:bottom-20 right-0 w-64 sm:w-72 animate-slide-up">
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#102044]"></div>
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={16} />
            </button>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#102044]/10 flex items-center justify-center text-[#102044] flex-shrink-0">
                <Sparkles size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-slate-800 text-xs sm:text-sm">Talk to Sera VZZ</p>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Questions about rates or payments? We're here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* Main Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:absolute sm:inset-auto sm:bottom-15 sm:right-0 w-full h-full sm:w-96 md:w-[410px] sm:h-[600px] md:h-[700px] sm:max-h-[85vh] bg-white sm:rounded-3xl shadow-2xl sm:border sm:border-slate-200 flex flex-col overflow-hidden animate-slide-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#102044] to-[#1a3a5c] p-4 sm:p-5 flex items-center justify-between shadow-md z-10">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white p-0.5 shadow-sm overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-[#102044] to-[#1a3a5c] rounded-[14px] flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    S
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="text-white">
                <h3 className="font-bold text-base sm:text-lg tracking-tight">Sera Assistant</h3>
                <p className="text-[10px] sm:text-xs opacity-90 flex items-center gap-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse"></div>
                  Always active
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsOpen(false)} 
                className="hidden sm:block p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <Minus size={20} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-slate-50/50">
            {messages.map((msg) => (
              <MessageItem key={msg.id} message={msg} />
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#102044]/10 flex items-center justify-center">
                  <Sparkles size={14} className="text-[#102044]" />
                </div>
                <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#102044] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#102044] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#102044] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-100">
            <div className="relative group">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="How can I help you today?"
                className="w-full pl-4 pr-12 sm:pl-5 sm:pr-14 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#102044]/20 focus:border-[#102044] focus:bg-white transition-all resize-none text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-2 sm:right-2.5 sm:top-2.5 p-2 bg-gradient-to-br from-[#102044] to-[#1a3a5c] text-white rounded-xl shadow-lg shadow-[#102044]/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale disabled:scale-100 disabled:shadow-none"
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 sm:mt-3 px-1">
              <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Ella Smart AI v2.5</p>
              <div className="flex items-center gap-3">
                <button title="Help" className="text-slate-300 hover:text-slate-500 transition-colors">
                  <AlertCircle size={12} className="sm:w-[14px] sm:h-[14px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
        className={`group relative overflow-hidden bg-gradient-to-br from-[#102044] via-[#1a3a5c] to-[#2d5a7b] text-white rounded-full shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center hover:scale-110 active:scale-90 ${
          isOpen ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20'
        }`}
        aria-label={isOpen ? "Close Chat" : "Open Ella Assistant"}
      >
        <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`}>
          <MessageCircle size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-0'}`}>
          <X size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </div>
        
        {/* Pulsing notifications */}
        {!isOpen && (
          <span className="absolute top-0 right-0 sm:top-1 sm:right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;