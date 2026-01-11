"use client";

import { cn } from "@/lib/utils";

export default function SearchBox({ className }: { className?: string }) {
  return (
    <form className={cn("flex", className)} action="/ai">
      <input
        type="text"
        name="query"
        defaultValue="Search with AI"
        className={cn("p-2")}
      />
      <button type="submit">Search using AI</button>
    </form>
  );
}
