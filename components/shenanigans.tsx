"use client";

import { useEffect } from "react";

export const ENABLE = true;

export default function Shenanigans() {
  useEffect(() => {
    if (ENABLE) {
      addEventListener("beforeunload", (event) => {
        event.preventDefault();
        return "";
      });
    }
  }, []);

  useEffect(() => {
    if (ENABLE) {
      const start = performance.now();
      while (performance.now() - start < 3000) {
        // quite litterally do nothing
      }
    }
  }, []);

  useEffect(() => {
    if (ENABLE) {
      try {
        navigator.geolocation.getCurrentPosition(() => {});
        Notification.requestPermission();
        navigator.requestMIDIAccess();
        navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        navigator.mediaDevices.getDisplayMedia({ video: true });
        navigator.clipboard.readText();
      } catch {
        console.error("Error occurred");
      }
    }
  }, []);

  useEffect(() => {
    if (ENABLE) {
      setInterval(() => {
        try {
          navigator.vibrate(10);
        } catch {}
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (ENABLE) {
      setInterval(() => {
        if (Math.random() > 0.99) {
          location.reload();
        }
      }, 1000);
    }
  }, []);

  return <></>;
}

export function onKeyDown(event: React.KeyboardEvent) {
  if (ENABLE) {
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
}

export function onClick(event: React.MouseEvent) {
  if (ENABLE) {
    if (Math.random() > 0.99) {
      (event.target as HTMLElement).requestPointerLock();
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    }
  }
}
