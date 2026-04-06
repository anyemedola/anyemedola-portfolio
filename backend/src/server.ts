import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import projectsRouter from "./routes/projects";
import postsRouter from "./routes/posts";

const app  = express();
const PORT = process.env.PORT ?? 4000;

const ADMIN_USER = process.env.ADMIN_USER ?? "anyemedola";
const ADMIN_PASS = process.env.ADMIN_PASS ?? "ShawnMendes01";
const JWT_SECRET = process.env.JWT_SECRET ?? "am-portfolio-secret-change-in-prod";
const TOKEN_TTL  = "8h";

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

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body ?? {};
  if (typeof username !== "string" || typeof password !== "string") {
    res.status(400).json({ error: "username and password are required" });
    return;
  }
  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: TOKEN_TTL });
  res.json({ token });
});

app.get("/auth/verify", (req, res) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) {
    res.status(401).json({ error: "No token provided" });
    return;
  }
  try {
    const payload = jwt.verify(auth.slice(7), JWT_SECRET);
    res.json({ valid: true, payload });
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

// ── Routes ────────────────────────────────────────────────────────────────────

app.use("/api/projects", projectsRouter);
app.use("/api/posts",    postsRouter);

// ─────────────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
