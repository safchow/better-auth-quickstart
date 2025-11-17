import { Request, Response, NextFunction } from "express";
import { getSession } from "@/services/session/getSession.js";
import { UnauthorizedError } from "@/utils/errors.js";

/**
 * Get current user session
 * GET /api/session
 */
export async function sessionController(req: Request, res: Response, next: NextFunction) {
  try {
    const session = await getSession(req.headers);

    if (!session) {
      throw new UnauthorizedError("No active session");
    }

    res.status(200).json({
      data: {
        user: session.user,
        session: {
          id: session.session.id,
          expiresAt: session.session.expiresAt.toISOString(),
        },
      },
    });
  } catch (error) {
    // Pass error to error handling middleware
    next(error);
  }
}

