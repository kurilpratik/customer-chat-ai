"use client";

import React, { useState } from "react";
import Chat from "../_common/Chat";
import Inbox from "../_common/Inbox";
import Panel from "../_common/Panel";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const Dashboard = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
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
  );
};

export default Dashboard;
