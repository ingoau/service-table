"use client";

import { cn } from "@/lib/utils";
import { AIButton } from "./ai-button";
import { animate } from "animejs";
import { useEffect, useRef } from "react";
import * as shenanigans from "./shenanigans";

export default function SearchBox({ className }: { className?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    animate(formRef.current as HTMLFormElement, {
      scale: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

  return (
    <form className={cn("flex", className)} action="/ai" ref={formRef}>
      <input
        type="text"
        name="query"
        defaultValue="Search with AI"
        className={"p-2"}
        onKeyDown={(e) => {
          shenanigans.onKeyDown(e);
        }}
      />
      <AIButton
        text="Search using AI"
        onClick={() => formRef.current?.submit()}
      />
    </form>
  );
}
