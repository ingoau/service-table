"use client";

import { useEffect } from "react";

function expensive(n: number) {
  let x = 0;
  for (let i = 0; i < n; i++) x += Math.sqrt(i);
  return x;
}

export function SlowRender() {
  const value = expensive(5_000_000);
  return <div>{value}</div>;
}

export default function Shenanigans() {
  useEffect(() => {
    addEventListener("beforeunload", (event) => {
      event.preventDefault();
      return "";
    });
  }, []);

  useEffect(() => {
    const start = performance.now();
    while (performance.now() - start < 3000) {
      // quite litterally do nothing
    }
  }, []);

  return (
    <>
      <SlowRender />
    </>
  );
}

export function onKeyDown(event: React.KeyboardEvent) {
  if (event.target instanceof HTMLInputElement) {
    console.log("e");
    if (Math.random() > 0.99) {
      event.preventDefault();
      (event.target as HTMLInputElement).blur();
    }
    if (Math.random() > 0.99) {
      event.preventDefault();
      (event.target as HTMLInputElement).value =
        (event.target as HTMLInputElement).value + ".";
    }
    if (Math.random() > 0.99) {
      event.preventDefault();
      (event.target as HTMLInputElement).value = (
        event.target as HTMLInputElement
      ).value.slice(0, -1);
    }
    if (Math.random() > 0.99) {
      event.preventDefault();
      (event.target as HTMLInputElement).value = "";
    }
  }
}
