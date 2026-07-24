import { requireAuth } from '@/lib/auth';
import Notification    from '@/models/Notification';
import { connectDB }   from '@/lib/db';
import { successResponse, errorResponse, handleError } from '@/utils/apiResponse';

export async function GET(request, { params }) {
  try {
      requireAuth(request);
          await connectDB();

              const notif = await Notification.findById(params.id)
                    .populate('user',        'name email')
                          .populate('requisition', 'reqNumber title');

                              if (!notif) return errorResponse('Notification not found', 404);

                                  return successResponse(notif, 'Notification fetched');
                                    } catch (err) {
                                        return handleError(err);
                                          }
                                          }

                                          export async function DELETE(request, { params }) {
                                            try {
                                                const user = requireAuth(request);
                                                    await connectDB();

                                                        const notif = await Notification.findOne({
                                                              _id:  params.id,
                                                                    user: user.id,
                                                                        });

                                                                            if (!notif) return errorResponse('Notification not found', 404);

                                                                                await notif.deleteOne();
                                                                                    return successResponse(null, 'Notification deleted');
                                                                                      } catch (err) {
                                                                                          return handleError(err);
                                                                                            }
                                                                                            }

                                                                                            export async function PUT(request, { params }) {
                                                                                              try {
                                                                                                  requireAuth(request);
                                                                                                      await connectDB();

                                                                                                          const notif = await Notification.findByIdAndUpdate(
                                                                                                                params.id,
                                                                                                                      { isRead: true },
                                                                                                                            { new: true }
                                                                                                                                );

                                                                                                                                    if (!notif) return errorResponse('Notification not found', 404);
                                                                                                                                        return successResponse(notif, 'Notification updated');
                                                                                                                                          } catch (err) {
                                                                                                                                              return handleError(err);
                                                                                                                                                }
                                                                                                                                                }