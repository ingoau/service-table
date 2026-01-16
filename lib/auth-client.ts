import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";
import { passwordEndpoint } from "./auth";

export const authClient = createAuthClient({
  plugins: [
    usernameClient(),
    {
      id: "password-endpoint",
      $InferServerPlugin: {} as ReturnType<typeof passwordEndpoint>,
    },
  ],
});
