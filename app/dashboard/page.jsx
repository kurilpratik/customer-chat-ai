"use client";

import React, { useState } from "react";
import Chat from "../_common/Chat";
import Inbox from "../_common/Inbox";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ChatInputProvider } from "../context/ChatInputContext";

const Dashboard = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <ChatInputProvider>
      <SidebarProvider>
        <div className="flex h-screen w-screen flex-col sm:flex-row">
          <Inbox
            onSelectMessage={setSelectedMessage}
            selectedMessage={selectedMessage}
          />
          <Chat selectedMessage={selectedMessage} />
          <AppSidebar />
        </div>
      </SidebarProvider>
    </ChatInputProvider>
  );
};

export default Dashboard;
