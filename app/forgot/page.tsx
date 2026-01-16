"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"email" | "code" | "password">("email");

  return (
    <>
      <div className="w-24 mx-auto">
        <h1 className="wrap-anywhere">Forget password</h1>
      </div>
      {step === "email" && (
        <div className="w-full max-w-2xl mx-auto p-8">
          Input your email in the following field:
          <input type="email" />
          <button className="p-2 px-4 rounded-full from-background to-foreground/50 bg-linear-to-b">
            Send Code
          </button>
        </div>
      )}
    </>
  );
}
