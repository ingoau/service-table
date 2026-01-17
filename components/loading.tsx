"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="animate-spin origin-left">
      <Loader2 />
      Loading...
    </div>
  );
}
