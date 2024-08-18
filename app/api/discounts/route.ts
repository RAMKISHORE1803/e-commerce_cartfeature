import { sampleDiscountCodes } from "@/data/sampleDiscountCodes";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(sampleDiscountCodes);
}
