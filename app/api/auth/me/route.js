import { requireAuth } from '@/lib/auth';
import { getMe }       from '@/services/auth.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request) {
  try {
      const user   = requireAuth(request);
          const result = await getMe(user.id);
              return successResponse(result, 'User fetched');
                } catch (err) {
                    return handleError(err);
                      }
                      }