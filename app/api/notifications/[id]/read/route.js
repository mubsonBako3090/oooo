import { requireAuth } from '@/lib/auth';
import Notification    from '@/models/Notification';
import { connectDB }   from '@/lib/db';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function PUT(request, { params }) {
  try {
      requireAuth(request);
          await connectDB();
              await Notification.findByIdAndUpdate(params.id, { isRead: true });
                  return successResponse(null, 'Marked as read');
                    } catch (err) {
                        return handleError(err);
                          }
                          }