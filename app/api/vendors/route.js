import { requireAuth } from '@/lib/auth';
import Vendor          from '@/models/Vendor';
import { connectDB }   from '@/lib/db';
import { successResponse, handleError } from '@/utils/apiResponse';

export async function GET(request) {
  try {
      requireAuth(request);
          await connectDB();
              const { searchParams } = new URL(request.url);
                  const q       = searchParams.get('q') || '';
                      const query   = q ? { name: { $regex: q, $options: 'i' } } : {};
                          const vendors = await Vendor.find({ ...query, isActive: true }).sort({ name: 1 });
                              return successResponse(vendors, 'Vendors fetched');
                                } catch (err) {
                                    return handleError(err);
                                      }
                                      }

                                      export async function POST(request) {
                                        try {
                                            requireAuth(request);
                                                await connectDB();
                                                    const body   = await request.json();
                                                        const vendor = await Vendor.create(body);
                                                            return successResponse(vendor, 'Vendor registered', 201);
                                                              } catch (err) {
                                                                  return handleError(err);
                                                                    }
                                                                    }