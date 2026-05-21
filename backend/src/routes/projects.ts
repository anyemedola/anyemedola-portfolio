import { Router, Request, Response } from "express";
import { DbProject } from "../db";
import { requireAuth } from "../middleware/auth";
import { db } from "../firebase";

const router = Router();
const col = db.collection("projects");

// Public — published only
router.get("/", async (_req, res) => {
  const snap = await col.where("published", "==", true).get();
  const projects = snap.docs.map(d => d.data() as DbProject).sort((a, b) => a.order - b.order);
  res.json(projects);
});

// Protected — all
router.get("/all", requireAuth, async (_req, res) => {
  const snap = await col.get();
  const projects = snap.docs.map(d => d.data() as DbProject).sort((a, b) => a.order - b.order);
  res.json(projects);
});

// Create
router.post("/", requireAuth, async (req: Request, res: Response) => {
  const id = Date.now();
  const project: DbProject = {
    id,
    title:       req.body.title       ?? "",
    type:        req.body.type        ?? "",
    order:       Number(req.body.order) || 99,
    descEn:      req.body.descEn      ?? "",
    descPt:      req.body.descPt      ?? "",
    descIt:      req.body.descIt      ?? "",
    url:         req.body.url         ?? "",
    github:      req.body.github      ?? "",
    published:   Boolean(req.body.published),
    featured:    Boolean(req.body.featured),
    stack:       Array.isArray(req.body.stack) ? req.body.stack : [],
    image:       req.body.image       ?? null,
    accentColor: req.body.accentColor || "#4DB89E",
    updatedAt:   new Date().toISOString(),
  };
  await col.doc(String(id)).set(project);
  res.status(201).json(project);
});

// Update
router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  const id  = Number(req.params.id);
  const ref = col.doc(String(id));
  const snap = await ref.get();
  if (!snap.exists) { res.status(404).json({ error: "Not found" }); return; }
  const cur = snap.data() as DbProject;
  const updated: DbProject = {
    ...cur,
    title:       req.body.title       ?? cur.title,
    type:        req.body.type        ?? cur.type,
    order:       req.body.order !== undefined ? Number(req.body.order) : cur.order,
    descEn:      req.body.descEn      ?? cur.descEn,
    descPt:      req.body.descPt      ?? cur.descPt,
    descIt:      req.body.descIt      ?? cur.descIt ?? "",
    url:         req.body.url         ?? cur.url,
    github:      req.body.github      ?? cur.github,
    published:   req.body.published   !== undefined ? Boolean(req.body.published)  : cur.published,
    featured:    req.body.featured    !== undefined ? Boolean(req.body.featured)   : cur.featured,
    stack:       Array.isArray(req.body.stack) ? req.body.stack : cur.stack,
    image:       "image" in req.body ? req.body.image : cur.image,
    accentColor: req.body.accentColor ?? cur.accentColor,
    updatedAt:   new Date().toISOString(),
  };
  await ref.set(updated);
  res.json(updated);
});

// Delete
router.delete("/:id", requireAuth, async (req: Request, res: Response) => {
  const id  = Number(req.params.id);
  const ref = col.doc(String(id));
  const snap = await ref.get();
  if (!snap.exists) { res.status(404).json({ error: "Not found" }); return; }
  await ref.delete();
  res.json({ ok: true });
});

export default router;
