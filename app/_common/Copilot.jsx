import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SquarePen, ChevronDown } from "lucide-react";
import { useChatInput } from "../context/ChatInputContext";
import ArticlePopup from "@/components/ArticlePopup";
import { motion, AnimatePresence } from "motion/react";

const SUGGESTED_QUESTIONS = [
  "How do I get a refund?",
  "What if the order was over 60 days?",
];

const sources = [
  { title: "Getting a refund", icon: "📝" },
  { title: "Refund for an order placed by mistake", icon: "📄" },
  { title: "Refund for an unwanted gift", icon: "📄" },
];

const Copilot = () => {
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [parts, setParts] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const { setChatInput } = useChatInput();

  React.useEffect(() => {
    if (messages.length > visibleMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [
          ...prev,
          messages[visibleMessages.length],
        ]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [messages, visibleMessages]);

  React.useEffect(() => {
    if (chatActive) {
      setVisibleMessages([]);
    }
  }, [chatActive]);

  React.useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSuggestedClick = () => {
    setChatActive(true);
    setMessages([
      {
        sender: "You",
        content: SUGGESTED_QUESTIONS[0],
        type: "user",
      },
      {
        sender: "Fin",
        type: "fin",
        researching: true,
        content: `Please note: <br />We can only refund orders placed within the last 60 days, and your items must meet our requirements for condition to be returned. Please check when you placed your order before proceeding. {article}Once I've checked these details, if everything looks OK, I will send a returns QR code which you can use to post the items back to us. Your refund will be automatically issued once you put it in the post.`,
        sources,
        totalSources: 15,
      },
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
                {SUGGESTED_QUESTIONS[0]}
              </p>
            </div>
          ) : (
            <div className="hide-scrollbar my-2 flex h-[85dvh] flex-col gap-6 overflow-y-scroll rounded-md pr-4 sm:h-[82vh]">
              <AnimatePresence>
                {visibleMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.125 + idx * 0.25,
                      delay: idx * 0.5,
                      ease: "easeOut",
                    }}
                  >
                    {msg.type === "user" ? (
                      <div className="flex items-start gap-2">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="You"
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-semibold">You</div>
                          <div className="text-base">{msg.content}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-lg font-bold text-white">
                          <span>F</span>
                        </div>
                        {/* FINBOT MESSAGE  */}
                        <div className="flex-1">
                          <div className="text-sm font-semibold">Fin</div>
                          <div className="mb-2 text-base text-gray-700">
                            Researching sources I found...
                          </div>
                          {/* MESSAGE CONTENT  */}
                          <motion.div
                            className="mb-3 flex flex-col gap-3 rounded-lg [background-image:linear-gradient(135deg,_#bfdbfe_0%,_#fce7f3_90%,_#ffedd5_100%)] [background-size:100%_100%] [background-position:0_0] px-4 py-4 text-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {msg.content.includes("{article}") ? (
                              (() => {
                                const parts = msg.content.split("{article}");
                                return (
                                  <>
                                    {parts[0] && (
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: parts[0],
                                        }}
                                      />
                                    )}
                                    <ArticlePopup />
                                    {parts[1] && (
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: parts[1],
                                        }}
                                      />
                                    )}
                                  </>
                                );
                              })()
                            ) : (
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: msg.content,
                                }}
                              />
                            )}

                            <Button
                              variant="outline"
                              className="mt-2 flex w-full gap-2 border-gray-300 bg-white/80 text-gray-700"
                              onClick={() =>
                                setChatInput(
                                  msg.content.replace(/<br\s*\/?>/gi, "\n"),
                                )
                              }
                            >
                              <div className="flex w-[90%] items-center justify-center gap-2">
                                <SquarePen className="h-4 w-4" />
                                Add to composer
                              </div>
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="mb-1 text-sm text-gray-500">
                              {msg.totalSources} relevant sources found
                            </div>
                            <div>
                              {/* LIST OF SOURCES  */}
                              {msg.sources.map((src, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + i * 0.1 }}
                                  className="flex cursor-pointer items-center gap-2 rounded px-2 py-0.5 transition hover:bg-gray-100"
                                >
                                  <span className="text-lg">{src.icon}</span>
                                  <span className="text-gray-700">
                                    {src.title}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                            <div className="mt-2">
                              <a
                                href="#"
                                className="text-sm font-medium text-blue-600 hover:underline"
                              >
                                See all &rarr;
                              </a>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={chatEndRef} />
            </div>
          )}
          <Input
            type="text"
            placeholder="Ask a question..."
            className="h-12 bg-white pr-12"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div
            className={`absolute right-3 bottom-1 -translate-y-1/2 ${
              !chatActive ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <ArrowUp className="h-5 w-5 cursor-pointer text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copilot;
