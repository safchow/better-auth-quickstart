import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma.js";
import config from "@/config/default.js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    // Session lasts 7 days
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    // Refresh session if user was active within last day
    updateAge: 60 * 60 * 24, // 1 day
  },
  baseURL: config.betterAuthBaseURL || `http://localhost:${config.port}`,
  basePath: "/api/auth",
  // Trusted origins: only the frontend client URL
  // Bruno sends Origin header matching the client URL (simulating browser behavior)
  // Ensure clientUrl is properly trimmed and not empty
  trustedOrigins: (() => {
    const clientUrl = config.clientUrl?.trim();
    if (!clientUrl) {
      console.warn("⚠️  CLIENT_URL is not set. Better Auth origin validation may fail.");
      return [];
    }
    // Log trusted origins in development for debugging
    if (config.nodeEnv === "development") {
      console.log(`🔒 Better Auth trusted origins: [${clientUrl}]`);
    }
    return [clientUrl];
  })(),
});

export type Session = typeof auth.$Infer.Session;
``