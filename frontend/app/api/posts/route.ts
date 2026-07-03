import { NextResponse } from "next/server";
import { enrichPost, type RawPost } from "@/lib/enrichPost";

const BACKEND = process.env.BACKEND_URL ?? "http://localhost:4000";

export async function GET() {
  try {
    const res = await fetch(`${BACKEND}/api/posts`, { next: { revalidate: 0 } });
    if (!res.ok) return NextResponse.json([]);
    const data: RawPost[] = await res.json();
    const enriched = await Promise.all(data.map(p => enrichPost(p)));
    return NextResponse.json(enriched);
  } catch {
    return NextResponse.json([]);
  }
}
