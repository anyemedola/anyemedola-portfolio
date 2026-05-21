import "dotenv/config";
import cors from "cors";
import express from "express";
import projectsRouter from "./routes/projects";
import postsRouter from "./routes/posts";
import { auth } from "./firebase";

const app  = express();
const PORT = process.env.PORT ?? 4000;

const SESSION_DURATION_MS = 60 * 60 * 8 * 1000; // 8 h

const allowedOrigins = [
  process.env.BACKOFFICE_URL ?? "http://localhost:3001",
  process.env.FRONTEND_URL  ?? "http://localhost:3000",
];

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) cb(null, true);
    else cb(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));
app.use(express.json({ limit: "10mb" }));

// ── Health ────────────────────────────────────────────────────────────────────

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Auth ──────────────────────────────────────────────────────────────────────

// Exchange a Firebase ID token for a short-lived session cookie
app.post("/auth/session", async (req, res) => {
  const { idToken } = req.body ?? {};
  if (typeof idToken !== "string") {
    res.status(400).json({ error: "idToken is required" });
    return;
  }
  try {
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: SESSION_DURATION_MS,
    });
    res.json({ sessionCookie });
  } catch {
    res.status(401).json({ error: "Invalid ID token" });
  }
});

// Verify a session cookie
app.get("/auth/verify", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "No token provided" });
    return;
  }
  try {
    const decoded = await auth.verifySessionCookie(authHeader.slice(7), true);
    res.json({ valid: true, uid: decoded.uid, email: decoded.email });
  } catch {
    res.status(401).json({ error: "Invalid or expired session" });
  }
});

// ── Routes ────────────────────────────────────────────────────────────────────

app.use("/api/projects", projectsRouter);
app.use("/api/posts",    postsRouter);

// ── Debug (development only) ──────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
