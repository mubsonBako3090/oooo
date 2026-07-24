import { requireAuth } from '@/lib/auth';
import Notification    from '@/models/Notification';
import { connectDB }   from '@/lib/db';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request) {
  try {
      const user = requireAuth(request);
          await connectDB();
              const notifs = await Notification.find({ user: user.id })
                    .sort({ createdAt: -1 })
                          .limit(50);
                              return successResponse(notifs, 'Notifications fetched');
                                } catch (err) {
                                    return handleError(err);
                                      }
                                      }