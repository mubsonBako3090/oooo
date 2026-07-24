import { requireAuth }       from '@/lib/auth';
import { getApprovalQueue }  from '@/services/approval.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request) {
  try {
      const user = requireAuth(request);
          const data = await getApprovalQueue(user);
              return successResponse(data, 'Approval queue fetched');
                } catch (err) {
                    return handleError(err);
                      }
                      }              