import { Router, Request, Response } from "express";
import { DbPost, slugify } from "../db";
import { requireAuth } from "../middleware/auth";
import { db } from "../firebase";

const router = Router();
const col = db.collection("posts");

// Public — published only
router.get("/", async (_req, res) => {
  const snap = await col.where("status", "==", "published").get();
  res.json(snap.docs.map(d => d.data()));
});

// Protected — all
router.get("/all", requireAuth, async (_req, res) => {
  const snap = await col.get();
  res.json(snap.docs.map(d => d.data()));
});

// Public — single post by slug
router.get("/:slug", async (req, res) => {
  const snap = await col
    .where("slug",   "==", req.params.slug)
    .where("status", "==", "published")
    .get();
  if (snap.empty) { res.status(404).json({ error: "Not found" }); return; }
  res.json(snap.docs[0].data());
});

// Create
router.post("/", requireAuth, async (req: Request, res: Response) => {
  const base = slugify(req.body.title ?? "post");
  let slug = base;
  let n = 1;
  while (!(await col.where("slug", "==", slug).get()).empty) slug = `${base}-${n++}`;

  const id = Date.now();
  const post: DbPost = {
    id,
    slug,
    title:       req.body.title       ?? "",
    titlePt:     req.body.titlePt     ?? "",
    titleIt:     req.body.titleIt     ?? "",
    subtitle:    req.body.subtitle    ?? "",
    subtitlePt:  req.body.subtitlePt  ?? "",
    subtitleIt:  req.body.subtitleIt  ?? "",
    excerptEn:   req.body.excerptEn   ?? "",
    excerptPt:   req.body.excerptPt   ?? "",
    excerptIt:   req.body.excerptIt   ?? "",
    bodyEn:      req.body.bodyEn      ?? "",
    bodyPt:      req.body.bodyPt      ?? "",
    bodyIt:      req.body.bodyIt      ?? "",
    date:        req.body.date        || new Date().toISOString().slice(0, 10),
    readTime:    Number(req.body.readTime) || 5,
    primaryTag:  req.body.primaryTag  ?? "",
    tags:        Array.isArray(req.body.tags) ? req.body.tags : [],
    accentColor: req.body.accentColor || "#4DB89E",
    icon:        req.body.icon        || "✦",
    status:      req.body.status      ?? "draft",
    image:       req.body.image       ?? null,
    updatedAt:   new Date().toISOString(),
  };
  await col.doc(String(id)).set(post);
  res.status(201).json(post);
});

// Update
router.put("/:id", requireAuth, async (req: Request, res: Response) => {
  const id  = Number(req.params.id);
  const ref = col.doc(String(id));
  const snap = await ref.get();
  if (!snap.exists) { res.status(404).json({ error: "Not found" }); return; }
  const cur = snap.data() as DbPost;
  const updated: DbPost = {
    ...cur,
    title:       req.body.title       ?? cur.title,
    titlePt:     req.body.titlePt     ?? cur.titlePt,
    titleIt:     req.body.titleIt     ?? cur.titleIt     ?? "",
    subtitle:    req.body.subtitle    ?? cur.subtitle,
    subtitlePt:  req.body.subtitlePt  ?? cur.subtitlePt,
    subtitleIt:  req.body.subtitleIt  ?? cur.subtitleIt  ?? "",
    excerptEn:   req.body.excerptEn   ?? cur.excerptEn,
    excerptPt:   req.body.excerptPt   ?? cur.excerptPt,
    excerptIt:   req.body.excerptIt   ?? cur.excerptIt   ?? "",
    bodyEn:      req.body.bodyEn      ?? cur.bodyEn,
    bodyPt:      req.body.bodyPt      ?? cur.bodyPt,
    bodyIt:      req.body.bodyIt      ?? cur.bodyIt      ?? "",
    date:        req.body.date        ?? cur.date,
    readTime:    req.body.readTime !== undefined ? Number(req.body.readTime) : cur.readTime,
    primaryTag:  req.body.primaryTag  ?? cur.primaryTag,
    tags:        Array.isArray(req.body.tags) ? req.body.tags : cur.tags,
    accentColor: req.body.accentColor ?? cur.accentColor,
    icon:        req.body.icon        ?? cur.icon,
    status:      req.body.status      ?? cur.status,
    image:       "image" in req.body ? req.body.image : cur.image,
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
