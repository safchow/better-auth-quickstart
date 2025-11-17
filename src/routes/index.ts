import { Router } from "express";
import { sessionController } from "@/controllers/session/sessionController.js";

const router = Router();

// Health check endpoint
router.get("/healthcheck", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
});

router.get("/session", sessionController);

// Note: Better Auth routes are handled by Better Auth handler in server.ts at /api/auth
// All /api/auth/* routes are handled by Better Auth (sign-in, sign-up, sign-out, TOTP, etc.)

export default router;


