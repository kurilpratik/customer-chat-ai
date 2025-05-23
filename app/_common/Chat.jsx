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
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import ChatContent from "./ChatContent";

const Chat = () => {
  const { chatInput, setChatInput } = useChatInput();
  const { selectedMessage, setSelectedMessage } = useSelectedMessage();
  const isMobile = useIsMobile();
  //const [openMobile, setOpenMobile] = React.useState(false);

  if (!selectedMessage) {
    return (
      <div className="mx-4 hidden h-[80vh] w-full flex-3 py-2 sm:block">
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

  // let index = selectedMessage.id - 1 || 0;

  if (isMobile) {
    // On mobile, show the chat as a bottom sheet popup when a message is selected
    return (
      <Sheet
        open={!!selectedMessage}
        onOpenChange={(open) => {
          if (!open) setSelectedMessage(null);
        }}
      >
        {/* SET SHEET HEIGHT HERE  */}
        <SheetContent
          side="bottom"
          className="h-[90dvh] w-screen overflow-y-clip p-0 sm:overflow-y-auto"
        >
          <SheetTitle className="sr-only">
            Chat with {selectedMessage.sender || selectedMessage.source}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Chat conversation with{" "}
            {selectedMessage.sender || selectedMessage.source}.
            {selectedMessage.content.length > 100
              ? `${selectedMessage.content.slice(0, 100)}...`
              : selectedMessage.content}
          </SheetDescription>
          {/* ACTUAL CHAT LOGIC AND JSX INSIDE  */}
          <ChatContent />
        </SheetContent>
      </Sheet>
    );
  }

  // On desktop, show the chat inline as before
  return <ChatContent />;
};

export default Chat;
