"use client";

import { useEffect } from "react";

export default function Shenanigans() {
  useEffect(() => {
    addEventListener("beforeunload", (event) => {
      event.preventDefault();
      return "";
    });
  }, []);

  return <></>;
}

export function onKeyDown(event: React.KeyboardEvent) {
  event.preventDefault();
}
