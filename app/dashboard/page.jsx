"use client";

import React, { useState } from "react";
import Chat from "../_common/Chat";
import Inbox from "../_common/Inbox";
import Panel from "../_common/Panel";

const Dashboard = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="flex h-screen w-screen flex-row">
      <Inbox
        onSelectMessage={setSelectedMessage}
        selectedMessage={selectedMessage}
      />
      <Chat selectedMessage={selectedMessage} />
      <Panel />
    </div>
  );
};

export default Dashboard;
