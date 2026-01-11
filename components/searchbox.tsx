"use client";

import { cn } from "@/lib/utils";
import { AIButton } from "./ai-button";

export default function SearchBox({ className }: { className?: string }) {
  return (
    <form className={cn("flex", className)} action="/ai">
      <input
        type="text"
        name="query"
        defaultValue="Search with AI"
        className={"p-2"}
      />
      <AIButton text="Search using AI" />
    </form>
  );
}
