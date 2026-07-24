import { successResponse } from '@/utils/apiResponse';

export async function POST() {
  return successResponse(null, 'Logged out successfully');
  }