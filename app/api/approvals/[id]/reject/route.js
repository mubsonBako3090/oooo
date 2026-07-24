import { requireAuth }         from '@/lib/auth';
import { rejectRequisition }   from '@/services/approval.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function POST(request, { params }) {
  try {
      const user        = requireAuth(request);
          const { comment } = await request.json();
              const data        = await rejectRequisition(params.id, user, comment);
                  return successResponse(data, 'Requisition rejected');
                    } catch (err) {
                        return handleError(err);
                          }
                          }