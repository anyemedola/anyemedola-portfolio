import fs from "fs";
import path from "path";

export const DB_PATH = path.join(process.cwd(), "data", "db.json");

export interface DbProject {
  id: number;
  title: string;
  type: string;
  order: number;
  descEn: string;
  descPt: string;
  url: string;
  github: string;
  published: boolean;
  featured: boolean;
  stack: string[];
  image: string | null;
  accentColor: string;
  updatedAt: string;
}

export interface DbPost {
  id: number;
  slug: string;
  title: string;
  titlePt: string;
  subtitle: string;
  subtitlePt: string;
  excerptEn: string;
  excerptPt: string;
  bodyEn: string;
  bodyPt: string;
  date: string;
  readTime: number;
  primaryTag: string;
  tags: string[];
  accentColor: string;
  icon: string;
  status: "draft" | "published";
  image: string | null;
  updatedAt: string;
}

export interface Db {
  projects: DbProject[];
  posts: DbPost[];
}

export function readDb(): Db {
  try {
    if (!fs.existsSync(DB_PATH)) return { projects: [], posts: [] };
    return JSON.parse(fs.readFileSync(DB_PATH, "utf8")) as Db;
  } catch {
    return { projects: [], posts: [] };
  }
}

export function writeDb(db: Db): void {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/^-+|-+$/g, "") || "post"
  );
}
