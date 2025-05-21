import React from "react";

const Copilot = () => {
  return (
    <div>
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-40 blur-2xl"></div>
      <div className="absolute right-0 bottom-4 left-0 mx-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Ask a question..."
            className="h-12 bg-white pr-12"
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2">
            <ArrowUp className="h-5 w-5 cursor-pointer text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copilot;
