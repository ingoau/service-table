"use client";

import Error from "@/components/error";
import { authClient } from "@/lib/auth-client";

export default function LogoutPage() {
  const session = authClient.useSession();
  if (!session.data) {
    return (
      <Error
        errorMessage="you are not logged in so you cant log out, why are you pressing the log out button? do you want to log in? idk anymore lol"
        actions={[
          {
            content: "Log In First",
            onClick: () => (location.href = "/login"),
          },
        ]}
      />
    );
  }
  return (
    <div className="flex items-center w-screen">
      <button onClick={() => authClient.signOut()} className="p-4 mx-auto">
        Log out
      </button>
    </div>
  );
}
