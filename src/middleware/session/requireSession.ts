import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "@/utils/errors.js";
import { getSession } from "@/services/session/getSession.js";

/**
 * Middleware to require authentication
 * Throws UnauthorizedError if user is not authenticated
 * Controllers should call getSession(req.headers) directly if they need session data
 */
export async function requireSession(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const session = await getSession(req.headers);

    if (!session) {
      throw new UnauthorizedError("Authentication required");
    }

    next();
  } catch (error) {
    // Pass error to error handling middleware
    next(error);
  }
}

