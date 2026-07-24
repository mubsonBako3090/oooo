import { requireAuth } from '@/lib/auth';
import Vendor          from '@/models/Vendor';
import { connectDB }   from '@/lib/db';
import { successResponse, errorResponse, handleError } from '@/utils/apiResponse';

export async function GET(request, { params }) {
  try {
      requireAuth(request);
          await connectDB();
              const vendor = await Vendor.findById(params.id);
                  if (!vendor) return errorResponse('Vendor not found', 404);
                      return successResponse(vendor, 'Vendor fetched');
                        } catch (err) {
                            return handleError(err);
                              }
                              }

                              export async function PUT(request, { params }) {
                                try {
                                    requireAuth(request);
                                        await connectDB();
                                            const body   = await request.json();
                                                const vendor = await Vendor.findByIdAndUpdate(params.id, body, { new: true });
                                                    if (!vendor) return errorResponse('Vendor not found', 404);
                                                        return successResponse(vendor, 'Vendor updated');
                                                          } catch (err) {
                                                              return handleError(err);
                                                                }
                                                                }

                                                                export async function DELETE(request, { params }) {
                                                                  try {
                                                                      requireAuth(request);
                                                                          await connectDB();
                                                                              await Vendor.findByIdAndUpdate(params.id, { isActive: false });
                                                                                  return successResponse(null, 'Vendor removed');
                                                                                    } catch (err) {
                                                                                        return handleError(err);
                                                                                          }
                                                                                          }