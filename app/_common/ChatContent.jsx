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
  MessageSquareText,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useChatInput } from "../context/ChatInputContext";
import { useSelectedMessage } from "../context/SelectedMessageContext";

const ChatContent = () => {
  const { chatInput, setChatInput } = useChatInput();
  const { selectedMessage, setSelectedMessage } = useSelectedMessage();

  let index = selectedMessage.id - 1 || 0;
  return (
    <div>
      <div className="relative h-screen w-full flex-3 px-2 py-1 sm:mx-4 sm:py-2">
        <nav className="sticky top-0 mb-8 flex justify-between bg-white py-2 sm:relative sm:mx-4">
          <h3 className="text-lg font-bold">
            {selectedMessage.sender || selectedMessage.source}
          </h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Ellipsis />
            </Button>
            <ModeToggle />
            <Button onClick={() => setSelectedMessage(null)}>
              <PanelBottomClose /> Close
            </Button>
          </div>
        </nav>

        {/* CHAT */}

        <div className="flex flex-col gap-6 px-2 sm:px-6">
          {chats[index].map((message) => (
            <div
              key={`index-${message.id}`}
              className={`flex gap-2 sm:gap-4 ${message.id % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              {/* So that we don't have 2 same keys, we combine it with msg.id eg 3-1,3-2 */}
              <div
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full p-4 font-bold text-white sm:h-10 sm:w-10 sm:p-0 ${message.color}`}
              >
                {message.sender.charAt(0)}
              </div>
              <div
                className={`rounded-xl p-4 ${message.id % 2 === 0 ? "bg-indigo-200" : "bg-gray-200"}`}
              >
                <p className="pb-2 text-xs font-medium sm:text-sm dark:text-gray-800">
                  {message.content}
                </p>
                <p className="text-sm">{message.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* INPUT  */}
        <div className="absolute right-0 bottom-[12vh] left-0 mx-4 shadow-xl sm:bottom-4">
          <div className="relative">
            <Textarea
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              type="text"
              placeholder="Use Cmd K for shortcuts"
              className="h-36 justify-start bg-white pt-9 pr-12"
            />
            <div className="absolute top-0 left-2 mt-1 flex items-center gap-2 bg-white py-2">
              <MessageSquareText className="h-4 w-4 cursor-pointer text-gray-500" />
              <p className="text-sm font-semibold">Chat</p>
              <ChevronDown className="h-4 w-4 cursor-pointer text-gray-500" />
            </div>
            <div className="absolute right-2 bottom-0 left-2 bg-white pb-2">
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
    </div>
  );
};

export default ChatContent;
