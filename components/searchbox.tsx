"use client";

import { cn } from "@/lib/utils";

export default function SearchBox({ className }: { className?: string }) {
  return (
    <input
      type="text"
      defaultValue="Search with AI"
      className={cn("p-2", className)}
    />
  );
}
