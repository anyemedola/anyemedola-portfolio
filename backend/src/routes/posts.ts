import { Router, Request, Response } from "express";
import { readDb, writeDb, DbPost, slugify } from "../db";
import { requireAuth } from "../middleware/auth";

const router = Router();

// Public — published only
router.get("/", (_req, res) => {
  const db = readDb();
  res.json(db.posts.filter((p) => p.status === "published"));
});

// Protected — all
router.get("/all", requireAuth, (_req, res) => {
  const db = readDb();
  res.json(db.posts);
});

// Public — single post by slug
router.get("/:slug", (req, res) => {
  const db = readDb();
  const post = db.posts.find(
    (p) => p.slug === req.params.slug && p.status === "published",
  );
  if (!post) { res.status(404).json({ error: "Not found" }); return; }
  res.json(post);
});

// Create
router.post("/", requireAuth, (req: Request, res: Response) => {
  const db = readDb();
  const base = slugify(req.body.title ?? "post");
  let slug = base;
  let n = 1;
  while (db.posts.some((p) => p.slug === slug)) slug = `${base}-${n++}`;

  const post: DbPost = {
    id:         Date.now(),
    slug,
    title:      req.body.title      ?? "",
    titlePt:    req.body.titlePt    ?? "",
    subtitle:   req.body.subtitle   ?? "",
    subtitlePt: req.body.subtitlePt ?? "",
    excerptEn:  req.body.excerptEn  ?? "",
    excerptPt:  req.body.excerptPt  ?? "",
    bodyEn:     req.body.bodyEn     ?? "",
    bodyPt:     req.body.bodyPt     ?? "",
    date:       req.body.date       || new Date().toISOString().slice(0, 10),
    readTime:   Number(req.body.readTime) || 5,
    primaryTag: req.body.primaryTag ?? "",
    tags:       Array.isArray(req.body.tags) ? req.body.tags : [],
    accentColor: req.body.accentColor || "#4DB89E",
    icon:       req.body.icon       || "✦",
    status:     req.body.status     ?? "draft",
    image:      req.body.image      ?? null,
    updatedAt:  new Date().toISOString(),
  };
  db.posts.push(post);
  writeDb(db);
  res.status(201).json(post);
});

// Update
router.put("/:id", requireAuth, (req: Request, res: Response) => {
  const db = readDb();
  const id = Number(req.params.id);
  const idx = db.posts.findIndex((p) => p.id === id);
  if (idx === -1) { res.status(404).json({ error: "Not found" }); return; }
  const cur = db.posts[idx];
  db.posts[idx] = {
    ...cur,
    title:      req.body.title      ?? cur.title,
    titlePt:    req.body.titlePt    ?? cur.titlePt,
    subtitle:   req.body.subtitle   ?? cur.subtitle,
    subtitlePt: req.body.subtitlePt ?? cur.subtitlePt,
    excerptEn:  req.body.excerptEn  ?? cur.excerptEn,
    excerptPt:  req.body.excerptPt  ?? cur.excerptPt,
    bodyEn:     req.body.bodyEn     ?? cur.bodyEn,
    bodyPt:     req.body.bodyPt     ?? cur.bodyPt,
    date:       req.body.date       ?? cur.date,
    readTime:   req.body.readTime !== undefined ? Number(req.body.readTime) : cur.readTime,
    primaryTag: req.body.primaryTag ?? cur.primaryTag,
    tags:       Array.isArray(req.body.tags) ? req.body.tags : cur.tags,
    accentColor: req.body.accentColor ?? cur.accentColor,
    icon:       req.body.icon       ?? cur.icon,
    status:     req.body.status     ?? cur.status,
    image:      "image" in req.body ? req.body.image : cur.image,
    updatedAt:  new Date().toISOString(),
  };
  writeDb(db);
  res.json(db.posts[idx]);
});

// Delete
router.delete("/:id", requireAuth, (req: Request, res: Response) => {
  const db = readDb();
  const id = Number(req.params.id);
  const idx = db.posts.findIndex((p) => p.id === id);
  if (idx === -1) { res.status(404).json({ error: "Not found" }); return; }
  db.posts.splice(idx, 1);
  writeDb(db);
  res.json({ ok: true });
});

export default router;
