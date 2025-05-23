import React, { createContext, useContext, useState } from "react";

const SelectedMessageContext = createContext();

export function SelectedMessageProvider({ children }) {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <SelectedMessageContext.Provider
      value={{ selectedMessage, setSelectedMessage }}
    >
      {children}
    </SelectedMessageContext.Provider>
  );
}

export function useSelectedMessage() {
  return useContext(SelectedMessageContext);
}
