import React from "react";
import { chat } from "../data/data";
import { Button } from "@/components/ui/button";
import { PanelBottomClose, Ellipsis, MoonStar } from "lucide-react";

const Chat = () => {
  return (
    <div className="mx-4 h-screen w-full flex-3 py-2">
      <nav className="mb-8 flex justify-between">
        <h3 className="text-lg font-bold">Luis Easton</h3>
        <div className="flex gap-2">
          <Button variant="secondary">
            <Ellipsis />
          </Button>
          <Button variant="secondary">
            <MoonStar />
          </Button>
          <Button>
            <PanelBottomClose /> Close
          </Button>
        </div>
      </nav>

      {/* CHAT */}
      <div className="flex flex-col gap-4 px-6">
        {chat.map((message) => (
          <div
            key={message.id}
            className={`flex gap-4 ${message.id % 2 == 0 ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-white ${message.color}`}
            >
              {message.sender.charAt(0)}
            </div>
            <div
              className={`rounded-xl p-4 ${message.id % 2 == 0 ? "bg-indigo-200" : "bg-gray-200"}`}
            >
              <p className="pb-2 font-medium">{message.content}</p>
              <p className="text-sm">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
