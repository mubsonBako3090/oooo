import { requireAuth }      from '@/lib/auth';
import { getOneLPO }        from '@/services/lpo.service';
import { generateLPOPDF }   from '@/services/pdf.service';

export async function GET(request, { params }) {
  try {
      requireAuth(request);
          const lpo    = await getOneLPO(params.id);
              const stream = await generateLPOPDF(lpo);

                  const chunks = [];
                      await new Promise((resolve, reject) => {
                            stream.on('data',  (chunk) => chunks.push(chunk));
                                  stream.on('end',   resolve);
                                        stream.on('error', reject);
                                            });

                                                const buffer = Buffer.concat(chunks);

                                                    return new Response(buffer, {
                                                          headers: {
                                                                  'Content-Type':        'application/pdf',
                                                                          'Content-Disposition': `attachment; filename="LPO-${lpo.lpoNumber}.pdf"`,
                                                                                },
                                                                                    });
                                                                                      } catch (err) {
                                                                                          return new Response(JSON.stringify({ success: false, message: err.message }), {
                                                                                                status: 500,
                                                                                                      headers: { 'Content-Type': 'application/json' },
                                                                                                          });
                                                                                                            }
                                                                                                            }