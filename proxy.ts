// middleware.ts
import { NextResponse } from "next/server";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function proxy() {
  await sleep(300);
  return NextResponse.next();
}
