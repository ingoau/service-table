"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { authClient } from "@/lib/auth-client";
import posthog from "posthog-js";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"email" | "code" | "password">("email");
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div className="w-24 mx-auto">
        <h1 className="wrap-anywhere">Forget password</h1>
      </div>
      <div className="w-full max-w-2xl mx-auto p-8">
        {step === "email" && (
          <>
            Input your email in the following field:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="p-2 px-4 rounded-full from-background to-foreground/50 bg-linear-to-b"
              onClick={() => {
                posthog.capture("password_recovery_requested");
                const randomCode = Math.floor(
                  100000 + Math.random() * 900000,
                ).toString();
                setCode(randomCode);
                setStep("code");
              }}
            >
              Send Code
            </button>
          </>
        )}
        {step === "code" && (
          <>
            We sent the code {code} to {email}. To verify you control this
            email, please enter the code below:
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              onChange={async (value) => {
                if (value.length === 6) {
                  await authClient.password.get(email);
                  if (value === code) {
                    posthog.capture("password_recovered");
                    setStep("password");
                    const password = await authClient.password.get(email);
                    if (password.error) alert("Error fetching password");
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setPassword(password.data.password);
                  } else {
                    posthog.capture("password_recovery_code_invalid");
                    alert("Invalid code");
                  }
                }
              }}
            >
              <InputOTPGroup className="bg-white">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="bg-white">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </>
        )}
        {step === "password" && (
          <>
            <h1>Your password is: {password}</h1>
            <a href="/login">Login</a>
          </>
        )}
      </div>
    </>
  );
}
