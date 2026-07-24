import { requireAuth }         from '@/lib/auth';
import { submitRequisition }   from '@/services/requisition.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function POST(request, { params }) {
  try {
      const user = requireAuth(request);
          const data = await submitRequisition(params.id, user);
              return successResponse(data, 'Requisition submitted for approval');
                } catch (err) {
                    return handleError(err);
                      }
                      }