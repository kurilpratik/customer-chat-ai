import React from "react";
import { chats } from "../data/data";
import { Button } from "@/components/ui/button";
import {
  PanelBottomClose,
  Ellipsis,
  MessageSquare,
  ChevronDown,
  Zap,
  Bookmark,
  Smile,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useChatInput } from "../context/ChatInputContext";

const Chat = ({ selectedMessage }) => {
  const { chatInput, setChatInput } = useChatInput();

  if (!selectedMessage) {
    return (
      <div className="mx-4 h-[80vh] w-full flex-3 py-2">
        <nav className="mb-8 flex justify-end">
          {/* <h3 className="text-lg font-bold">
            {selectedMessage.sender || selectedMessage.source}
          </h3> */}
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Ellipsis />
            </Button>
            <ModeToggle />
            <Button>
              <PanelBottomClose /> Close
            </Button>
          </div>
        </nav>
        <div className="flex h-full w-full flex-col items-center justify-center py-2 text-gray-500">
          <MessageSquare className="mb-4 h-16 w-16" />
          <h3 className="mb-2 text-xl font-semibold">
            No conversation selected
          </h3>
          <p className="text-center">
            Select a conversation from your inbox to start chatting
          </p>
        </div>
      </div>
    );
  }

  let index = selectedMessage.id - 1 || 0;

  return (
    <div className="relative mx-4 h-screen w-full flex-3 py-2">
      <nav className="mb-8 flex justify-between">
        <h3 className="text-lg font-bold">
          {selectedMessage.sender || selectedMessage.source}
        </h3>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Ellipsis />
          </Button>
          <ModeToggle />
          <Button>
            <PanelBottomClose /> Close
          </Button>
        </div>
      </nav>

      {/* CHAT */}

      <div className="flex flex-col gap-6 px-6">
        {chats[index].map((message) => (
          <div
            key={`index-${message.id}`}
            className={`flex gap-4 ${message.id % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            {/* So that we don't have 2 same keys, we combine it with msg.id eg 3-1,3-2 */}
            <div
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-white ${message.color}`}
            >
              {message.sender.charAt(0)}
            </div>
            <div
              className={`rounded-xl p-4 ${message.id % 2 === 0 ? "bg-indigo-200" : "bg-gray-200"}`}
            >
              <p className="pb-2 text-sm font-medium dark:text-gray-800">
                {message.content}
              </p>
              <p className="text-sm">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT  */}
      <div className="absolute right-0 bottom-4 left-0 mx-4 shadow-xl">
        <div className="relative">
          <Textarea
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            type="text"
            // placeholder="Use Cmd K for shortcuts"
            className="h-28 justify-start bg-white pr-12"
          />
          <div className="absolute right-2 bottom-3 left-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 cursor-pointer text-gray-500" />
                <Separator orientation="vertical" />
                <Bookmark className="h-4 w-4 cursor-pointer text-gray-500" />
                <Smile className="h-4 w-4 cursor-pointer text-gray-500" />
              </div>
              <div className="flex items-center gap-2">
                <p>Send</p>
                <Separator orientation="vertical" />
                <ChevronDown className="h-4 w-4 cursor-pointer text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
