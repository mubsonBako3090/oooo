import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  return NextResponse.json({ status: 'ok', path: 'src/app/api/users/[id]/route.js' });
}
