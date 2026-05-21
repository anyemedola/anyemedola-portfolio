export interface DbProject {
  id: number;
  title: string;
  type: string;
  order: number;
  descEn: string;
  descPt: string;
  descIt: string;
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
  titleIt: string;
  subtitle: string;
  subtitlePt: string;
  subtitleIt: string;
  excerptEn: string;
  excerptPt: string;
  excerptIt: string;
  bodyEn: string;
  bodyPt: string;
  bodyIt: string;
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

export function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/^-+|-+$/g, "") || "post"
  );
}
