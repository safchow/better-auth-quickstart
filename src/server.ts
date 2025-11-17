import "dotenv/config";
import { webcrypto } from "crypto";
// Ensure crypto is available globally for Better Auth
if (typeof globalThis.crypto === "undefined") {
  globalThis.crypto = webcrypto as any;
}

import cookieParser from "cookie-parser";
import cors from "cors";
import express, { json, urlencoded } from "express";
import { toNodeHandler } from "better-auth/node";
import config from "@/config/default.js";
import { auth } from "@/lib/auth.js";
import router from "@/routes/index.js";
import { errorHandler } from "@/middleware/errorHandler.js";

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Better Auth handler (mounted BEFORE body parsers)
// Better Auth docs: express.json() should be used AFTER mounting Better Auth handler
// Mounting it before prevents the client API from getting stuck on "pending"
// Using Express v5 wildcard syntax: /{*any} catches all routes under /api/auth
// Better Auth handles all authentication routes: sign-in, sign-up, sign-out, TOTP, etc.
app.all("/api/auth/{*any}", toNodeHandler(auth));

// Body Parser Middleware (must come AFTER Better Auth handler)
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use("/api", router);

// Global error handler (must be last middleware)
app.use(errorHandler);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Environment: ${config.nodeEnv}`);
  console.log(`🔗 API available at http://localhost:${PORT}/api`);
});


