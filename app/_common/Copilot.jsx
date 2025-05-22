import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";

const SUGGESTED_QUESTION = "How do I get a refund?";

const initialBotMessage = (question) => ({
  sender: "Fin Bot",
  content: `Hi! I see you asked: "${question}"\nHere's what I recommend: Please visit your account's order history, select the order, and click 'Request Refund'. If you need more help, let me know!`,
  time: "now",
  color: "bg-blue-400",
});

const Copilot = () => {
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSuggestedClick = () => {
    setChatActive(true);
    setMessages([
      {
        sender: "You",
        content: SUGGESTED_QUESTION,
        time: "now",
        color: "bg-gray-400",
      },
      initialBotMessage(SUGGESTED_QUESTION),
    ]);
  };
  return (
    <div>
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-40 blur-2xl"></div>
      <div className="absolute right-0 bottom-4 left-0 mx-4">
        <div className="relative">
          {!chatActive ? (
            <div
              className="suggested mb-2 cursor-pointer"
              onClick={handleSuggestedClick}
            >
              <p className="inline-block rounded-md bg-white p-2 px-3 text-sm">
                <span className="font-semibold">Suggested</span>💸
                {SUGGESTED_QUESTION}
              </p>
            </div>
          ) : (
            <div
              id="messages"
              className="mb-2 flex h-[82vh] flex-col gap-2 overflow-y-auto rounded-md p-2"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex`}>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white ${
                      msg.sender === "You" ? "bg-gray-200" : "bg-blue-100"
                    }`}
                  >
                    {msg.sender ? msg.sender.charAt(0) : msg.source.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="ml-2 font-semibold">{msg.sender}</span>{" "}
                    <div
                      className={`max-w-xs rounded-xl px-2 text-sm whitespace-pre-line ${
                        msg.sender === "You" ? "" : "bg-blue-100"
                      } ${msg.sender === "You" ? "mt-1" : "mt-3"} ${msg.sender === "You" ? "px-1" : "px-4 py-4"}`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          )}
          <Input
            type="text"
            placeholder="Ask a question..."
            className="h-12 bg-white pr-12"
          />
          <div className="absolute right-3 bottom-1 -translate-y-1/2">
            <ArrowUp className="h-5 w-5 cursor-pointer text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copilot;
