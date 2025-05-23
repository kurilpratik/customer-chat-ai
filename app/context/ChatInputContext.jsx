import React, { createContext, useContext, useState } from "react";

const ChatInputContext = createContext();

export function ChatInputProvider({ children }) {
  const [chatInput, setChatInput] = useState("");
  return (
    <ChatInputContext.Provider value={{ chatInput, setChatInput }}>
      {children}
    </ChatInputContext.Provider>
  );
}

export function useChatInput() {
  return useContext(ChatInputContext);
}
