"use client";

import { cn } from "@/lib/utils";

export default function SearchBox() {
  return (
    <input type="text" defaultValue="Search with AI" className={cn("p-2")} />
  );
}
