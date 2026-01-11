"use client";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { lastAssistantMessageIsCompleteWithToolCalls } from "ai";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Page() {
  const chat = useChat({
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
  });
  const [enteredText, setEnteredText] = useState("");

  return (
    <div className="p-4 flex flex-col gap-2">
      <h1>AI</h1>
      {chat.messages.map((message) => {
        return (
          <div key={message.id} className="flex flex-col gap-2">
            <AnimatePresence>
              {message.parts.map((part, index) => {
                if (part.type == "text")
                  return (
                    <motion.div
                      animate={{ y: 0 }}
                      initial={{ y: 100 }}
                      transition={{ duration: 1, ease: "linear" }}
                      key={index}
                      className={cn(
                        "p-4 w-fit rounded-full",
                        message.role === "assistant"
                          ? "bg-blue-200 max-w-4xl rounded-bl-none"
                          : "bg-gray-200 ml-auto rounded-br-none",
                      )}
                    >
                      {part.text}
                    </motion.div>
                  );
                if (part.type == "tool-delegateToGork")
                  return (
                    <motion.div
                      animate={{ y: 0 }}
                      initial={{ y: 100 }}
                      transition={{ duration: 1, ease: "linear" }}
                      className="p-1 border w-fit rounded-full"
                      key={index}
                    >
                      {part.state === "output-available"
                        ? "Asked gork"
                        : "Asking gork"}
                      {' "'}
                      {(part.input as { prompt: string })?.prompt || ""}
                      {'"'}
                    </motion.div>
                  );
              })}
            </AnimatePresence>
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
