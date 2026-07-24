import axios from 'axios';

export const sendSMS = async (to, message) => {
  try {
      await axios.post(`${process.env.TERMII_BASE_URL}/sms/send`, {
            to,
                  from:    process.env.TERMII_SENDER_ID,
                        sms:     message,
                              type:    'plain',
                                    channel: 'generic',
                                          api_key: process.env.TERMII_API_KEY,
                                              });
                                                } catch (err) {
                                                    console.error('SMS Error:', err.message);
                                                      }
                                                      };

                                                      export const sendApprovalSMS = async (phone, reqNumber) => {
                                                        await sendSMS(
                                                            phone,
                                                                `[KSU Procurement] ${reqNumber} requires your approval. Login at ${process.env.NEXT_PUBLIC_APP_URL}`
                                                                  );
                                                                  };