import { Router, Request, Response } from "express";
import { readDb, writeDb, DbProject } from "../db";
import { requireAuth } from "../middleware/auth";

const router = Router();

// Public — published only
router.get("/", (_req, res) => {
  const db = readDb();
  res.json(db.projects.filter((p) => p.published).sort((a, b) => a.order - b.order));
});

// Protected — all
router.get("/all", requireAuth, (_req, res) => {
  const db = readDb();
  res.json(db.projects.sort((a, b) => a.order - b.order));
});

// Create
router.post("/", requireAuth, (req: Request, res: Response) => {
  const db = readDb();
  const project: DbProject = {
    id: Date.now(),
    title:      req.body.title      ?? "",
    type:       req.body.type       ?? "",
    order:      Number(req.body.order) || 99,
    descEn:     req.body.descEn     ?? "",
    descPt:     req.body.descPt     ?? "",
    url:        req.body.url        ?? "",
    github:     req.body.github     ?? "",
    published:  Boolean(req.body.published),
    featured:   Boolean(req.body.featured),
    stack:      Array.isArray(req.body.stack) ? req.body.stack : [],
    image:      req.body.image      ?? null,
    accentColor: req.body.accentColor || "#4DB89E",
    updatedAt:  new Date().toISOString(),
  };
  db.projects.push(project);
  writeDb(db);
  res.status(201).json(project);
});

// Update
router.put("/:id", requireAuth, (req: Request, res: Response) => {
  const db = readDb();
  const id = Number(req.params.id);
  const idx = db.projects.findIndex((p) => p.id === id);
  if (idx === -1) { res.status(404).json({ error: "Not found" }); return; }
  const cur = db.projects[idx];
  db.projects[idx] = {
    ...cur,
    title:      req.body.title      ?? cur.title,
    type:       req.body.type       ?? cur.type,
    order:      req.body.order !== undefined ? Number(req.body.order) : cur.order,
    descEn:     req.body.descEn     ?? cur.descEn,
    descPt:     req.body.descPt     ?? cur.descPt,
    url:        req.body.url        ?? cur.url,
    github:     req.body.github     ?? cur.github,
    published:  req.body.published  !== undefined ? Boolean(req.body.published)  : cur.published,
    featured:   req.body.featured   !== undefined ? Boolean(req.body.featured)   : cur.featured,
    stack:      Array.isArray(req.body.stack) ? req.body.stack : cur.stack,
    image:      "image" in req.body ? req.body.image : cur.image,
    accentColor: req.body.accentColor ?? cur.accentColor,
    updatedAt:  new Date().toISOString(),
  };
  writeDb(db);
  res.json(db.projects[idx]);
});

// Delete
router.delete("/:id", requireAuth, (req: Request, res: Response) => {
  const db = readDb();
  const id = Number(req.params.id);
  const idx = db.projects.findIndex((p) => p.id === id);
  if (idx === -1) { res.status(404).json({ error: "Not found" }); return; }
  db.projects.splice(idx, 1);
  writeDb(db);
  res.json({ ok: true });
});

export default router;
