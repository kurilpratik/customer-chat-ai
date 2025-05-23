"use client";

import React from "react";
import Chat from "../_common/Chat";
import Inbox from "../_common/Inbox";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ChatInputProvider } from "../context/ChatInputContext";
import { SelectedMessageProvider } from "../context/SelectedMessageContext";
import { SuperCommand } from "@/components/SuperCommand";

const Dashboard = () => {
  return (
    <ChatInputProvider>
      <SelectedMessageProvider>
        <SidebarProvider>
          <div className="flex h-screen w-screen flex-col sm:flex-row">
            <Inbox />
            <Chat />
            <AppSidebar />
          </div>
          <SuperCommand />
        </SidebarProvider>
      </SelectedMessageProvider>
    </ChatInputProvider>
  );
};

export default Dashboard;
