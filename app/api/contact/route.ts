import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  insurance?: string;
  message?: string;
  consent?: boolean;
  instagram?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  if ((body.instagram ?? "").toString().trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const firstName = (body.firstName ?? "").toString().trim();
  const lastName = (body.lastName ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const phone = (body.phone ?? "").toString().trim();

  if (!phone || !email) {
    return NextResponse.json(
      { success: false, error: "Phone and email are required." },
      { status: 400 }
    );
  }

  console.log("[contact] new submission", {
    firstName,
    lastName,
    phone,
    email,
    insurance: (body.insurance ?? "").toString().trim(),
    message: (body.message ?? "").toString().slice(0, 2000),
    consent: Boolean(body.consent),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed" },
    { status: 405 }
  );
}
