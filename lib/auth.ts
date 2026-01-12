import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    autoSignIn: false,
    password: {
      hash: async (password) => {
        return password;
      },
      verify: async (data: { hash: string; password: string }) => {
        return data.hash === data.password;
      },
    },
  },
});
