import { NextResponse } from 'next/server';

export const successResponse = (data, message = 'Success', status = 200) =>
  NextResponse.json({ success: true, message, data }, { status });

  export const errorResponse = (message = 'Error', status = 500, errors = null) =>
    NextResponse.json(
        { success: false, message, ...(errors && { errors }) },
            { status }
              );

              export const handleError = (err) => {
                console.error('API Error:', err);

                  if (err.statusCode) {
                      return errorResponse(err.message, err.statusCode);
                        }

                          if (err.code === 11000) {
                              const field = Object.keys(err.keyValue)[0];
                                  return errorResponse(`${field} already exists`, 409);
                                    }

                                      if (err.name === 'ValidationError') {
                                          const messages = Object.values(err.errors).map((e) => e.message);
                                              return errorResponse('Validation failed', 422, messages);
                                                }

                                                  return errorResponse('Internal server error', 500);
                                                  };