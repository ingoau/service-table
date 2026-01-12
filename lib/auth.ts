import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { username } from "better-auth/plugins";

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
    // idfc about the users, they can log in themselves
    autoSignIn: false,
    // SERIOUSLY. DONT DO THIS IN A PROD APPLICATION
    // IT IS JUST HERE AS A JOKE
    password: {
      hash: async (password) => {
        return password;
      },
      verify: async (data: { hash: string; password: string }) => {
        return data.hash === data.password;
      },
    },
  },
  plugins: [username()],
});
