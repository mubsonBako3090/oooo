import { NextResponse } from 'next/server';
import { verifyToken }  from '@/lib/auth';

const PUBLIC_PATHS  = ['/login', '/register', '/api/auth/login', '/api/auth/register'];
const API_PREFIX    = '/api';

export function middleware(request) {
  const { pathname } = request.nextUrl;

    // Allow public paths
      if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
          return NextResponse.next();
            }

              // Get token from cookie or header
                const cookieToken = request.cookies.get('token')?.value;
                  const headerToken = request.headers.get('authorization')?.split(' ')[1];
                    const token       = cookieToken || headerToken;

                      // No token
                        if (!token) {
                            if (pathname.startsWith(API_PREFIX)) {
                                  return NextResponse.json(
                                          { success: false, message: 'Unauthorized. Please login.' },
                                                  { status: 401 }
                                                        );
                                                            }
                                                                return NextResponse.redirect(new URL('/login', request.url));
                                                                  }

                                                                    // Invalid token
                                                                      const user = verifyToken(token);
                                                                        if (!user) {
                                                                            if (pathname.startsWith(API_PREFIX)) {
                                                                                  return NextResponse.json(
                                                                                          { success: false, message: 'Invalid or expired token.' },
                                                                                                  { status: 401 }
                                                                                                        );
                                                                                                            }
                                                                                                                return NextResponse.redirect(new URL('/login', request.url));
                                                                                                                  }

                                                                                                                    // Attach user to headers for API routes
                                                                                                                      const requestHeaders = new Headers(request.headers);
                                                                                                                        requestHeaders.set('x-user-id',   user.id);
                                                                                                                          requestHeaders.set('x-user-role', user.role);
                                                                                                                            requestHeaders.set('x-user-name', user.name);

                                                                                                                              return NextResponse.next({ request: { headers: requestHeaders } });
                                                                                                                              }

                                                                                                                              export const config = {
                                                                                                                                matcher: ['/((?!_next/static|_next/image|favicon.ico|public/).*)'],
                                                                                                                                };