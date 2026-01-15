"use client";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { lastAssistantMessageIsCompleteWithToolCalls } from "ai";
import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import * as shenanigans from "@/components/shenanigans";

function AIChat() {
  const chat = useChat({
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
  });
  const [enteredText, setEnteredText] = useState("Enter message here...");
  const queryParams = useSearchParams();

  useEffect(() => {
    if (queryParams.get("query")) {
      chat.sendMessage({ text: queryParams.get("query")! });
    }
  }, [queryParams]);

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
                        "w-fit rounded-full",
                        message.role === "assistant"
                          ? "bg-blue-200 max-w-4xl rounded-bl-none"
                          : "bg-gray-200 ml-auto rounded-br-none",
                      )}
                    >
                      <p className="block translate-x-5">{part.text}</p>
                    </motion.div>
                  );
                if (part.type == "tool-delegateToGork")
                  return (
                    <motion.div
                      animate={{ y: 0 }}
                      initial={{ y: 100 }}
                      transition={{ duration: 1, ease: "linear" }}
                      className="border w-fit rounded-full"
                      key={index}
                    >
                      <p className="block translate-x-5">
                        {part.state === "output-available"
                          ? "Asked gork"
                          : "Asking gork"}
                        {' "'}
                        {(part.input as { prompt: string })?.prompt || ""}
                        {'"'}
                      </p>
                    </motion.div>
                  );
              })}
            </AnimatePresence>
          </div>
        );
      })}
      <div className="flex flex-row w-screen">
        <input
          type="text"
          value={enteredText}
          onChange={(e) => setEnteredText(e.target.value)}
          className="w-full p-4"
          onKeyDown={shenanigans.onKeyDown}
        />
        <button
          className="w-full"
          onClick={() => {
            chat.sendMessage({ text: enteredText });
            setEnteredText("Enter message here...");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <AIChat />
    </Suspense>
  );
}
