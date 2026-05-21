import { NextRequest, NextResponse } from "next/server";

const BACKEND = process.env.BACKEND_URL ?? "http://localhost:4000";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { idToken } = body as { idToken?: string };

  if (!idToken) {
    return NextResponse.json({ error: "idToken is required" }, { status: 400 });
  }

  let backendRes: Response;
  try {
    backendRes = await fetch(`${BACKEND}/auth/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
  } catch {
    return NextResponse.json({ error: "Backend unavailable" }, { status: 503 });
  }

  const data = await backendRes.json();

  if (!backendRes.ok) {
    return NextResponse.json(data, { status: backendRes.status });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("am_token", data.sessionCookie, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
