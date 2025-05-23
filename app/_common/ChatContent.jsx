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
  PhoneCall,
  StarIcon,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useChatInput } from "../context/ChatInputContext";
import { useSelectedMessage } from "../context/SelectedMessageContext";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SelectedTextPopup from "@/components/SelectedTextPopup";

const ChatContent = () => {
  const { chatInput, setChatInput } = useChatInput();
  const { selectedMessage, setSelectedMessage } = useSelectedMessage();
  const [selectedText, setSelectedText] = React.useState("");

  let index = selectedMessage.id - 1 || 0;

  const handleTextSelection = (e) => {
    const selection = window.getSelection();
    const text = selection.toString();
    setSelectedText(text);
  };

  return (
    <div>
      <div className="relative h-screen w-full flex-3 px-2 py-1 sm:mx-4 sm:py-2">
        <nav className="sticky top-0 mb-8 flex justify-between bg-white py-2 sm:relative sm:mx-4 dark:bg-black">
          <h3 className="text-lg font-bold">
            {selectedMessage.sender || selectedMessage.source}
          </h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Ellipsis />
            </Button>
            <Button variant="outline" size="icon">
              <StarIcon />
            </Button>
            <Button variant="outline" size="icon">
              <PhoneCall />
            </Button>
            <Button onClick={() => setSelectedMessage(null)} variant="outline">
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
                className={`rounded-xl p-4 ${message.id % 2 === 0 ? "bg-indigo-200 dark:bg-indigo-900" : "bg-gray-200 dark:bg-neutral-900"}`}
              >
                <p className="pb-2 text-xs font-medium sm:text-sm dark:text-white">
                  {message.content}
                </p>
                <p className="text-sm dark:opacity-70">{message.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* INPUT  */}
        <div className="absolute right-0 bottom-[12vh] left-0 mx-4 shadow-xl sm:bottom-4 sm:mr-8">
          <div className="relative">
            <HoverCard open={selectedText.length > 0}>
              <HoverCardTrigger asChild>
                <Textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onSelect={handleTextSelection}
                  type="text"
                  placeholder="Use Cmd K for shortcuts"
                  className="hide-scrollbar max-h-[24rem] min-h-[9rem] justify-start bg-white pt-9 pr-12 pb-10"
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height =
                      Math.min(e.target.scrollHeight, 384) + "px";
                  }}
                />
              </HoverCardTrigger>
              <HoverCardContent className="w-76 p-0">
                <SelectedTextPopup />
              </HoverCardContent>
            </HoverCard>
            <div className="absolute top-0 left-2 mt-1 flex items-center gap-2 bg-white py-2 dark:bg-neutral-900">
              <MessageSquareText className="h-4 w-4 cursor-pointer text-gray-500" />
              <p className="text-sm font-semibold">Chat</p>
              <ChevronDown className="h-4 w-4 cursor-pointer text-gray-500" />
            </div>
            <div className="absolute right-2 bottom-0 left-2 bg-white pb-2 dark:bg-neutral-900">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 cursor-pointer text-gray-500" />
                  <Separator orientation="vertical" />
                  <Bookmark className="h-4 w-4 cursor-pointer text-gray-500" />
                  <Smile className="h-4 w-4 cursor-pointer text-gray-500" />
                </div>
                {/* SEND BUTTON  */}
                <Button variant={chatInput.trim() ? "default" : "outline"}>
                  <p>Send</p>
                  <Separator orientation="vertical" />
                  <ChevronDown className="h-4 w-4 cursor-pointer text-gray-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
