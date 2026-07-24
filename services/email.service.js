import { sendMail } from '@/lib/mailer';

export const sendApprovalRequestEmail = async (to, name, req, role) => {
  await sendMail({
      to,
          subject: `[Action Required] ${req.reqNumber} — Pending ${role.toUpperCase()} Approval`,
              html: `
                    <div style="font-family:Sora,sans-serif;max-width:560px;margin:auto;padding:20px">
                            <h2 style="color:#00C37B">Procurement Approval Required</h2>
                                    <p>Dear ${name},</p>
                                            <p>Requisition <strong>${req.reqNumber}</strong> is pending your approval as <strong>${role}</strong>.</p>
                                                    <p><strong>Amount:</strong> ₦${Number(req.totalAmount).toLocaleString()}</p>
                                                            <a href="${process.env.NEXT_PUBLIC_APP_URL}/requisitions/${req._id}"
                                                                       style="display:inline-block;background:#00C37B;color:#000;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;margin-top:16px">
                                                                                 Review Now
                                                                                         </a>
                                                                                               </div>
                                                                                                   `,
                                                                                                     });
                                                                                                     };