import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";
import type { BetterAuthClientPlugin } from "better-auth/client";
import type { passwordEndpoint } from "./auth";

const passwordEndpointClient = {
  id: "password-endpoint",
  $InferServerPlugin: {} as typeof passwordEndpoint,
  getActions: ($fetch) => ({
    password: {
      get: async (email: string) => {
        return await $fetch(`/password/get/${email}`, {
          method: "GET",
        });
      },
    },
  }),
} satisfies BetterAuthClientPlugin;

export const authClient = createAuthClient({
  plugins: [usernameClient(), passwordEndpointClient],
});
