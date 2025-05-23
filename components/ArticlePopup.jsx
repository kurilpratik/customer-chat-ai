import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { MessageSquareText, SquarePen, ChevronDown } from "lucide-react";

const article = {
  title: "How to get a refund",
  category: "Public Article",
  author: "Amy Adams",
  date: "1d ago",
  content:
    "We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund. This guideline outlines the simple steps to help you navigate the refund process and ensure a smooth resolution to your concern.",
};

const ArticlePopup = ({ title, category, author, date, content }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-blue-800 text-xs text-white">
          1
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-sm">
        <h4 className="mb-2 text-lg font-semibold">{article.title}</h4>
        <div className="mt-2 flex items-center gap-2 pb-3 text-sm text-gray-400">
          <Button variant="outline" className="h-4 w-4 rounded-full">
            <MessageSquareText />
          </Button>
          <div className="bg-amber-100">{article.category}</div>
          <div> · {article.author} · </div>
          <div>{article.date} · </div>
        </div>
        <p className="mb-5 border-l-4 pl-3">{article.content}</p>
        {/* ADD TO COMPOSE BUTTON  */}
        <Button
          variant="outline"
          className="mt-2 flex w-full cursor-pointer gap-2 border-gray-300 bg-white/80 text-gray-700"
          onClick={() =>
            setChatInput(msg.content.replace(/<br\s*\/?>/gi, "\n"))
          }
        >
          <div className="flex w-[90%] items-center justify-center gap-2">
            <SquarePen className="h-4 w-4" />
            Add to composer
          </div>
          {/* <ChevronDown className="h-4 w-4" /> */}
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ArticlePopup;
