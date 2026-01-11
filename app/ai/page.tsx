"use client";
import { useChat } from "@ai-sdk/react";

export default function Page() {
  const chat = useChat();

  return (
    <div>
      <h1>AI</h1>
      {JSON.stringify(chat.messages)}
      <button
        onClick={() => {
          chat.sendMessage({ text: "e" });
        }}
      ></button>
    </div>
  );
}
