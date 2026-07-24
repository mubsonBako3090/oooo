import { requireAuth } from '@/lib/auth';
import { exportCSV }   from '@/services/report.service';

export async function GET(request) {
  try {
      requireAuth(request);
          const { searchParams } = new URL(request.url);
              const csv = await exportCSV(searchParams.get('year'));
                  return new Response(csv, {
                        headers: {
                                'Content-Type':        'text/csv',
                                        'Content-Disposition': 'attachment; filename="procurement-report.csv"',
                                              },
                                                  });
                                                    } catch (err) {
                                                        return new Response(JSON.stringify({ success: false, message: err.message }), {
                                                              status:  500,
                                                                    headers: { 'Content-Type': 'application/json' },
                                                                        });
                                                                          }
                                                                          }