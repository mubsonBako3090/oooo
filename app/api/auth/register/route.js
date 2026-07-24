import { connectDB }     from '@/lib/db';
import { registerUser }  from '@/services/auth.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function POST(request) {
  try {
      await connectDB();
          const body   = await request.json();
              const result = await registerUser(body);
                  return successResponse(result, 'Registration successful', 201);
                    } catch (err) {
                        return handleError(err);
                          }
                          }