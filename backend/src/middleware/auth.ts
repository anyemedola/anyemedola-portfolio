import { Request, Response, NextFunction } from "express";
import { auth } from "../firebase";

export async function requireAuth(req: Request, res: Response, next: NextFunction): Promise<void> {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    await auth.verifySessionCookie(header.slice(7), true);
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired session" });
  }
}
