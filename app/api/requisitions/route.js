import { requireAuth }  from '@/lib/auth';
import { getAllRequisitions, createRequisition } from '@/services/requisition.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request) {
  try {
      const user   = requireAuth(request);
          const { searchParams } = new URL(request.url);
              const filters = {
                    status:   searchParams.get('status')   || '',
                          priority: searchParams.get('priority') || '',
                                category: searchParams.get('category') || '',
                                    };
                                        const data = await getAllRequisitions(filters, user);
                                            return successResponse(data, 'Requisitions fetched');
                                              } catch (err) {
                                                  return handleError(err);
                                                    }
                                                    }

                                                    export async function POST(request) {
                                                      try {
                                                          const user = requireAuth(request);
                                                              const body = await request.json();
                                                                  const data = await createRequisition(body, user);
                                                                      return successResponse(data, 'Requisition created', 201);
                                                                        } catch (err) {
                                                                            return handleError(err);
                                                                              }
                                                                              }