"use client";

import { AIButton } from "@/components/ai-button";
import Error from "@/components/error";

export default function LogoutPage() {
  return (
    <Error
      errorMessage="you are not logged in so you cant log out, why are you pressing the log out button? do you want to log in? idk anymore lol"
      actions={[
        { content: "Log In First", onClick: () => (location.href = "/login") },
      ]}
    />
  );
}
