export default {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV || "development",
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  databaseUrl: process.env.DATABASE_URL || "",
  plaidClientId: process.env.PLAID_CLIENT_ID || "",
  plaidSecret: process.env.PLAID_SECRET || "",
  plaidEnv: process.env.PLAID_ENV || "sandbox",
  plaidVersion: process.env.PLAID_VERSION || "2020-09-14",
  betterAuthSecret: process.env.BETTER_AUTH_SECRET || "",
  betterAuthBaseURL: process.env.BETTER_AUTH_BASE_URL,
};


