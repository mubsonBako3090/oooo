import { requireAuth }          from '@/lib/auth.js';
import { approveRequisition }   from '@/services/approval.service.js';
import { successResponse, handleError } from '@/utils/apiResponse.js';

export async function POST(request, { params }) {
  try {
      const user           = requireAuth(request);
          const { comment }    = await request.json();
              const data           = await approveRequisition(params.id, user, comment);
                  return successResponse(data, 'Requisition approved');
                    } catch (err) {
                        return handleError(err);
                          }
                          }
