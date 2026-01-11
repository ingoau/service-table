"use client";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Page() {
  const chat = useChat();
  const [enteredText, setEnteredText] = useState("");

  return (
    <div className="p-4 flex flex-col gap-2">
      <h1>AI</h1>
      {chat.messages.map((message) => {
        return (
          <div
            key={message.id}
            className={cn(
              "p-4 w-fit rounded-full",
              message.role === "assistant"
                ? "bg-blue-200 max-w-4xl"
                : "bg-gray-200 ml-auto",
            )}
          >
            {message.parts.map(
              (part) =>
                part.type == "text" && <div key={part.text}>{part.text}</div>,
            )}
          </div>
        );
      })}
      {chat.messages.map((message) => (
        <div key={message.id}>{JSON.stringify(message)}</div>
      ))}
      <input
        type="text"
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />
      <button
        onClick={() => {
          chat.sendMessage({ text: enteredText });
        }}
      >
        Send
      </button>
    </div>
  );
}
