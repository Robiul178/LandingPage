import { ArrowUp, ClipboardList, ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div>
      <div className="w-full lg:w-[787px]  p-4 bg-white rounded-lg shadow-lg ">
        <div className="text-sm font-semibold mb-2">AI Sales Coach</div>
        <div className="h-64 overflow-y-auto bg-gray-100 max-sm:p-4 rounded-md ">
          {messages.map((msg, idx) => (
            <div className="flex  gap-2 m-2">
              <div
                className={`w-5 h-5 rounded-full bg-gray-400  relative top-2.5 max-sm:hidden ${
                  msg.sender === "bot" ? "visible" : "hidden"
                }`}
              ></div>
              <div
                key={idx}
                className={`p-2 rounded-md flex gap-2 mb-2 ${
                  msg.sender === "bot"
                    ? "bg-white text-gray-800"
                    : "bg-blue-100 text-blue-800 ml-auto max-w-xs"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex max-sm:flex-wrap justify-between gap-2 lg:text-sm md:text-xs text-blue-800 font-semibold">
          <button className="px-3 py-1 bg-gray-200 rounded-full">
            How do I handle objections?
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-full">
            Give me a cold email template
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-full">
            Closing techniques
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-full">
            Negotiation tips
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything you need"
            className="md:flex-1 md:px-3 py-2 border rounded-md focus:outline-none max-sm:px-1 max-sm:w-full"
          />
          <button
            onClick={handleSend}
            className="bg-blue-950 text-white md:px-4 max-sm:px-3 rounded-md hover:bg-blue-900 flex gap-1 items-center justify-center"
          >
            Send <ArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}
