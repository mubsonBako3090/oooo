import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host:   process.env.MAIL_HOST   || 'smtp.gmail.com',
    port:   parseInt(process.env.MAIL_PORT) || 587,
      secure: false,
        auth: {
            user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
                  },
                    tls: { rejectUnauthorized: false },
                    });

                    export const sendMail = async ({ to, subject, html }) => {
                      try {
                          await transporter.sendMail({
                                from:    process.env.MAIL_FROM || `"KSU Procurement" <${process.env.MAIL_USER}>`,
                                      to,
                                            subject,
                                                  html,
                                                      });
                                                        } catch (err) {
                                                            console.error('Mail error:', err.message);
                                                              }
                                                              };