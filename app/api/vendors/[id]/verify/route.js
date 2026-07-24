import { requireRole } from '@/lib/auth';
import Vendor          from '@/models/Vendor';
import { connectDB }   from '@/lib/db';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function POST(request, { params }) {
  try {
      requireRole(request, 'procurement', 'admin');
          await connectDB();
              const vendor = await Vendor.findByIdAndUpdate(
                    params.id,
                          { isVerified: true },
                                { new: true }
                                    );
                                        return successResponse(vendor, 'Vendor verified');
                                          } catch (err) {
                                              return handleError(err);
                                                }
                                                }