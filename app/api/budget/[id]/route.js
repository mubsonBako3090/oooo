import { requireAuth }    from '@/lib/auth';
import { updateBudget }   from '@/services/budget.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function PUT(request, { params }) {
  try {
      requireAuth(request);
          const body = await request.json();
              const data = await updateBudget(params.id, body);
                  return successResponse(data, 'Budget updated');
                    } catch (err) {
                        return handleError(err);
                          }
                          }