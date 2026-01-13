"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function SessionTerminator() {
  const [remainingTime, setRemainingTime] = useState(10);

  const session = authClient.useSession();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime < 0 && Math.random() > 0.75 && session.data) {
      authClient.signOut();
      location.reload();
    }

    return () => clearTimeout(timer);
  }, [remainingTime, session.data]);

  if (!session.data) return;

  return (
    <div className="fixed top-20 left-0 bg-red-500 p-4">
      <p>
        For your security this Session will terminate in {remainingTime} seconds
      </p>
    </div>
  );
}
