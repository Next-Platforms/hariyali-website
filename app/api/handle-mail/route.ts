import { NextResponse, NextRequest } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const PUBLIC_ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;
const CREATE_DATA_PUBLIC_URL = `${BACKEND_URL}/collection/data/public`;

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { [key: string]: string };

  const responseBody = {
    public_access_key: PUBLIC_ACCESS_KEY,
    content: body,
  };
  await fetch(CREATE_DATA_PUBLIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(responseBody),
  });

  return NextResponse.json({ message: "✅" });
}
