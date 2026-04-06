import { NextRequest, NextResponse } from "next/server";

const BACKEND = process.env.BACKEND_URL ?? "http://localhost:4000";

interface RouteCtx { params: Promise<{ slug: string }> }

export async function GET(_req: NextRequest, ctx: RouteCtx) {
  const { slug } = await ctx.params;
  try {
    const res = await fetch(`${BACKEND}/api/posts/${slug}`, { next: { revalidate: 0 } });
    if (!res.ok) return NextResponse.json(null, { status: 404 });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(null, { status: 503 });
  }
}
