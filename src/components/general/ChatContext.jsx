/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);
  const toggleChat = () => setIsChatOpen((prev) => !prev);
  
  // New function to navigate to contact page
  const goToContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ChatContext.Provider 
      value={{ 
        isChatOpen, 
        openChat, 
        closeChat, 
        toggleChat,
        goToContact  // Export the new function
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};