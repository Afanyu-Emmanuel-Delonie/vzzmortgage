/* eslint-disable no-unused-vars */
import React from "react";
import {
  Send,
  X,
  Minus,
  Sparkles,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { useChatWidget } from "../../hooks/useChatWidget";
import { useChatContext } from "../general/ChatContext";

// MessageItem Component
const MessageItem = ({ message }) => {
  const isBot = message.sender === "bot";
  
  return (
    <div className={`flex items-start gap-3 ${!isBot ? 'flex-row-reverse' : ''}`}>
      {isBot && (
        <div className="w-8 h-8 rounded-lg bg-[#102044]/10 flex items-center justify-center flex-shrink-0">
          <Sparkles size={14} className="text-[#102044]" />
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm ${
          isBot
            ? 'bg-white border border-slate-200 rounded-tl-none'
            : 'bg-gradient-to-br from-[#102044] to-[#1a3a5c] text-white rounded-tr-none'
        } ${message.isError ? 'border-red-300 bg-red-50' : ''}`}
      >
        <div className={`text-sm leading-relaxed ${isBot ? 'text-slate-700' : 'text-white'}`}>
          {message.text.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line.split('**').map((part, j) => 
                j % 2 === 0 ? part : <strong key={j}>{part}</strong>
              )}
              {i < message.text.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        <p className={`text-[10px] mt-1.5 ${isBot ? 'text-slate-400' : 'text-white/60'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

// Main ChatWidget Component
const ChatWidget = () => {
  const { isChatOpen, closeChat, openChat } = useChatContext();
  
  const {
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
  } = useChatWidget(isChatOpen, closeChat);

  return (
    <div className="fixed bottom-15 right-6 md:bottom-6 md:right-6 z-[9999] font-sans">
      {/* Main Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:absolute sm:inset-auto sm:bottom-15 sm:right-0 w-full h-full sm:w-96 md:w-[410px] sm:h-[600px] md:h-[700px] sm:max-h-[85vh] bg-white sm:rounded-3xl shadow-2xl sm:border sm:border-slate-200 flex flex-col overflow-hidden">
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
                <h3 className="font-bold text-base sm:text-lg tracking-tight">
                  Serra Assistant
                </h3>
                <p className="text-[10px] sm:text-xs opacity-90 flex items-center gap-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse"></div>
                  Always active
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={closeChat}
                className="hidden sm:block p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <Minus size={20} />
              </button>
              <button
                onClick={closeChat}
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
              <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">
                Serra Smart AI v2.5
              </p>
              <div className="flex items-center gap-3">
                <button
                  title="Help"
                  className="text-slate-300 hover:text-slate-500 transition-colors"
                >
                  <AlertCircle size={12} className="sm:w-[14px] sm:h-[14px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="w-14 h-14 bg-gradient-to-br from-[#102044] to-[#1a3a5c] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;