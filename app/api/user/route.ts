import { PrismaService } from '@/lib/database';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const user = await PrismaService.getUser();
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
}