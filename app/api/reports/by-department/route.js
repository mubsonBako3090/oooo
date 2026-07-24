import { requireAuth }     from '@/lib/auth';
import { getByDepartment } from '@/services/report.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request) {
  try {
      requireAuth(request);
          const { searchParams } = new URL(request.url);
              const data = await getByDepartment(searchParams.get('year'));
                  return successResponse(data, 'Dept report fetched');
                    } catch (err) {
                        return handleError(err);
                          }
                          }