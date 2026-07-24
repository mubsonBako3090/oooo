import { requireAuth }           from '@/lib/auth';
import { getAllLPOs, createLPO } from '@/services/lpo.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request) {
  try {
      requireAuth(request);
          const data = await getAllLPOs();
              return successResponse(data, 'LPOs fetched');
                } catch (err) {
                    return handleError(err);
                      }
                      }

                      export async function POST(request) {
                        try {
                            const user = requireAuth(request);
                                const body = await request.json();
                                    const data = await createLPO(body, user);
                                        return successResponse(data, 'LPO created', 201);
                                          } catch (err) {
                                              return handleError(err);
                                                }
                                                }