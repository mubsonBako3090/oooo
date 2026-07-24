import { requireAuth }              from '@/lib/auth';
import { getOneLPO, updateLPOStatus } from '@/services/lpo.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request, { params }) {
  try {
      requireAuth(request);
          const data = await getOneLPO(params.id);
              return successResponse(data, 'LPO fetched');
                } catch (err) {
                    return handleError(err);
                      }
                      }

                      export async function PUT(request, { params }) {
                        try {
                            const user       = requireAuth(request);
                                const { status } = await request.json();
                                    const data       = await updateLPOStatus(params.id, status, user);
                                        return successResponse(data, 'LPO updated');
                                          } catch (err) {
                                              return handleError(err);
                                                }
                                                }