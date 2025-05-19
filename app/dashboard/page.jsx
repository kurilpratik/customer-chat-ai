import React from "react";
import Chat from "../_common/Chat";
import Inbox from "../_common/Inbox";
import Panel from "../_common/Panel";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen flex-row">
      <Inbox />
      <Chat />
      <Panel />
    </div>
  );
};

export default Dashboard;
