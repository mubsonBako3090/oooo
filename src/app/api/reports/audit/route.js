import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ status: 'ok', path: 'src/app/api/reports/audit/route.js' });
}
