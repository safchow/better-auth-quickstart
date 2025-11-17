import { auth } from "@/lib/auth.js";
import { IncomingHttpHeaders } from "http";

/**
 * Get the current session from Better Auth
 * @param headers - Request headers containing cookies/auth tokens
 * @returns Session data if authenticated, null otherwise
 */
export async function getSession(headers: IncomingHttpHeaders) {
  try {
    const session = await auth.api.getSession({
      headers: headers as any,
    });
    return session;
  } catch (error) {
    // Log error for debugging but don't throw - let caller decide how to handle
    console.error("Error getting session:", error);
    return null;
  }
}

