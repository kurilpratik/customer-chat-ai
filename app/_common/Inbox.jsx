import React from "react";
import { messages } from "../data/data";
import { ChevronDownIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useSelectedMessage } from "../context/SelectedMessageContext";

const Inbox = () => {
  const { selectedMessage, setSelectedMessage } = useSelectedMessage();

  return (
    <div className="flex-1.5 h-screen min-h-screen px-4 py-2 sm:min-w-[25%]">
      <nav className="mb-8 flex justify-between">
        <h2 className="text-lg font-bold">Your inbox</h2>
        <div>
          <div className="sm:hidden">
            <ModeToggle />
            <SidebarTrigger />
          </div>
          <SidebarTrigger className="hidden sm:block" />
        </div>
      </nav>

      <div className="mb-4 flex justify-between font-semibold">
        <div className="flex items-center">
          <span className="pr-2">5</span> Open{" "}
          <ChevronDownIcon height={20} />{" "}
        </div>
        <div className="flex items-center">
          Waiting Longest <ChevronDownIcon height={20} />{" "}
        </div>
      </div>

      {/* MESSAGES  */}
      <ul className="flex flex-col gap-1">
        {messages.map((message) => (
          // MESSAGE
          <li
            key={message.id}
            onClick={() => setSelectedMessage(message)}
            className={`relative ml-[-0.6rem] flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 pr-16 hover:bg-indigo-100 ${message.read ? "opacity-40" : ""} ${
              selectedMessage?.id === message.id ? "bg-indigo-100" : ""
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white ${message.color}`}
            >
              {message.sender
                ? message.sender.charAt(0)
                : message.source.charAt(0)}
            </div>
            <div>
              <h3
                className={`text-md ${message.read ? "font-regular" : "font-bold"}`}
              >
                {message.sender
                  ? message.sender.slice(0, message.sender.indexOf(" ")) + " - "
                  : ""}
                {message.source}
              </h3>
              <p>
                {message.content.length > 26
                  ? `${message.content.slice(0, 26)}...`
                  : message.content}
              </p>
              <p className="absolute right-4 bottom-4 text-xs font-semibold">
                {message.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
