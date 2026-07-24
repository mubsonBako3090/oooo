import { requireAuth }  from '@/lib/auth';
import { getOneRequisition, updateRequisition, deleteRequisition } from '@/services/requisition.service';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request, { params }) {
  try {
      requireAuth(request);
          const data = await getOneRequisition(params.id);
              return successResponse(data, 'Requisition fetched');
                } catch (err) {
                    return handleError(err);
                      }
                      }

                      export async function PUT(request, { params }) {
                        try {
                            const user = requireAuth(request);
                                const body = await request.json();
                                    const data = await updateRequisition(params.id, body, user);
                                        return successResponse(data, 'Requisition updated');
                                          } catch (err) {
                                              return handleError(err);
                                                }
                                                }

                                                export async function DELETE(request, { params }) {
                                                  try {
                                                      const user = requireAuth(request);
                                                          await deleteRequisition(params.id, user);
                                                              return successResponse(null, 'Requisition deleted');
                                                                } catch (err) {
                                                                    return handleError(err);
                                                                      }
                                                                      }