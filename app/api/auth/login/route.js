import { connectDB }           from '@/lib/db';
import { loginUser }           from '@/services/auth.service';
import { successResponse, errorResponse, handleError } from '@/utils/apiResponse';

export async function POST(request) {
  try {
      await connectDB();
          const { email, password } = await request.json();

              if (!email || !password) {
                    return errorResponse('Email and password are required', 400);
                        }

                            const result = await loginUser(email, password);
                                return successResponse(result, 'Login successful');

                                  } catch (err) {
                                      return handleError(err);
                                        }
                                        }