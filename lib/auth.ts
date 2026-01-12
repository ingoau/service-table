import { APIError, betterAuth } from "better-auth";
import { Pool } from "pg";
import { createAuthMiddleware, username } from "better-auth/plugins";

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
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path !== "/sign-up/email") {
        return;
      }
      const accounts = await ctx.context.adapter.findMany({
        model: "account",
        where: [{ field: "password", value: ctx.body.password }],
      });
      if (accounts.length > 0) {
        const user = await ctx.context.adapter.findOne({
          model: "user",
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          where: [{ field: "id", value: accounts[0].userId }],
        });
        throw new APIError("BAD_REQUEST", {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          message: `Password is taken by ${user.username} (${user.email})`,
        });
      }
    }),
  },
  plugins: [username()],
});
