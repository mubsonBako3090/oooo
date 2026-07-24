import { requireAuth }          from '@/lib/auth';
import { withdrawRequisition }  from '@/services/requisition.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function POST(request, { params }) {
  try {
      const user = requireAuth(request);
          const data = await withdrawRequisition(params.id, user);
              return successResponse(data, 'Requisition withdrawn');
                } catch (err) {
                    return handleError(err);
                      }
                      }