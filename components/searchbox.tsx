"use client";

import { cn } from "@/lib/utils";
import { AIButton } from "./ai-button";
import { useRef } from "react";

export default function SearchBox({ className }: { className?: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form className={cn("flex", className)} action="/ai" ref={formRef}>
      <input
        type="text"
        name="query"
        defaultValue="Search with AI"
        className={"p-2"}
      />
      <AIButton
        text="Search using AI"
        onClick={() => formRef.current?.submit()}
      />
    </form>
  );
}
