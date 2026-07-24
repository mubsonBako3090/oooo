import { requireAuth } from '@/lib/auth';
import AuditLog        from '@/models/AuditLog';
import { connectDB }   from '@/lib/db';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request) {
  try {
      requireAuth(request);
          await connectDB();
              const { searchParams } = new URL(request.url);
                  const reqId  = searchParams.get('requisition');
                      const query  = reqId ? { requisition: reqId } : {};
                          const logs   = await AuditLog.find(query)
                                .populate('user', 'name role')
                                      .sort({ createdAt: -1 })
                                            .limit(200);
                                                return successResponse(logs, 'Audit logs fetched');
                                                  } catch (err) {
                                                      return handleError(err);
                                                        }
                                                        }