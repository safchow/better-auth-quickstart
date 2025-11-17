export default {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV || "development",
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  databaseUrl: process.env.DATABASE_URL || "",
  betterAuthBaseURL: process.env.BETTER_AUTH_BASE_URL,
};


