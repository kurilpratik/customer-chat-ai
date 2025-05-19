import React from "react";
import { messages } from "../data/data";
import { ChevronDownIcon } from "lucide-react";

const Inbox = () => {
  return (
    <div className="h-screen flex-1 px-4 py-2">
      <h2 className="mb-8 text-lg font-bold">Your inbox</h2>
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
            className={`ml-[-0.8rem] flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 hover:bg-indigo-100 ${message.read ? "opacity-40" : ""}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white ${message.color}`}
            >
              {message.sender
                ? message.sender.charAt(0)
                : message.source.charAt(0)}
            </div>
            <div>
              <h3 className="text-md">
                {message.sender ? message.sender + " - " : message.sender}
                {message.source}
              </h3>
              <p>
                {message.content.length > 24
                  ? `${message.content.slice(0, 24)}...`
                  : message.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
