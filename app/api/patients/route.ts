// app/api/patients/route.ts
import { NextResponse } from "next/server";

const patients = [
  { id: 1, name: "Jean Dupont", email: "jean@example.com" },
  { id: 2, name: "Marie Curie", email: "marie@example.com" },
  { id: 3, name: "Albert Einstein", email: "albert@example.com" },
];

export async function GET() {
  return NextResponse.json(patients);
}
