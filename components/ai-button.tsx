"use client";

import { cn } from "@/lib/utils";

export default function AiButton({
  className,
  extended,
}: {
  className?: string;
  extended?: boolean;
}) {
  return (
    <button
      className={cn(className, "")}
      onClick={() => {
        location.href = "/ai";
      }}
    >
      AI
    </button>
  );
}
