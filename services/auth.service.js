import User           from '@/models/User';
import { connectDB }  from '@/lib/db';
import { signToken }  from '@/lib/auth';
import { sendMail }   from '@/lib/mailer';
import jwt            from 'jsonwebtoken';

export const registerUser = async (body) => {
  await connectDB();
    const { name, email, password, role, department, phone, staffId } = body;

      const existing = await User.findOne({ email });
        if (existing) throw { statusCode: 409, message: 'Email already registered' };

          const user = await User.create({
              name, email, password, role,
                  department: department || null,
                      phone, staffId,
                        });

                          const token = signToken({
                              id:   user._id,
                                  role: user.role,
                                      name: user.name,
                                        });

                                          return { token, user };
                                          };

                                          export const loginUser = async (email, password) => {
                                            await connectDB();

                                              const user = await User.findOne({ email })
                                                  .select('+password')
                                                      .populate('department', 'name code');

                                                        if (!user) throw { statusCode: 401, message: 'Invalid email or password' };
                                                          if (!user.isActive) throw { statusCode: 403, message: 'Account is deactivated' };

                                                            const match = await user.comparePassword(password);
                                                              if (!match) throw { statusCode: 401, message: 'Invalid email or password' };

                                                                user.lastLogin = new Date();
                                                                  await user.save({ validateBeforeSave: false });

                                                                    const token = signToken({
                                                                        id:         user._id.toString(),
                                                                            role:       user.role,
                                                                                name:       user.name,
                                                                                    email:      user.email,
                                                                                        department: user.department?._id?.toString(),
                                                                                          });

                                                                                            return { token, user };
                                                                                            };

                                                                                            export const getMe = async (userId) => {
                                                                                              await connectDB();
                                                                                                const user = await User.findById(userId).populate('department', 'name code');
                                                                                                  if (!user) throw { statusCode: 404, message: 'User not found' };
                                                                                                    return user;
                                                                                                    };

                                                                                                    export const changePassword = async (userId, currentPassword, newPassword) => {
                                                                                                      await connectDB();
                                                                                                        const user = await User.findById(userId).select('+password');
                                                                                                          if (!user) throw { statusCode: 404, message: 'User not found' };

                                                                                                            const match = await user.comparePassword(currentPassword);
                                                                                                              if (!match) throw { statusCode: 400, message: 'Current password is incorrect' };

                                                                                                                user.password = newPassword;
                                                                                                                  await user.save();
                                                                                                                  };

                                                                                                                  export const forgotPassword = async (email) => {
                                                                                                                    await connectDB();
                                                                                                                      const user = await User.findOne({ email });
                                                                                                                        if (!user) return;

                                                                                                                          const token   = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                                                                                                                            const expiry  = new Date(Date.now() + 3600000);

                                                                                                                              user.resetToken       = token;
                                                                                                                                user.resetTokenExpiry = expiry;
                                                                                                                                  await user.save({ validateBeforeSave: false });

                                                                                                                                    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${token}`;

                                                                                                                                      await sendMail({
                                                                                                                                          to:      email,
                                                                                                                                              subject: 'Password Reset — KSU Procurement System',
                                                                                                                                                  html: `
                                                                                                                                                        <div style="font-family:Sora,sans-serif;max-width:500px;margin:auto">
                                                                                                                                                                <h2>Password Reset Request</h2>
                                                                                                                                                                        <p>Dear ${user.name},</p>
                                                                                                                                                                                <p>Click the button below to reset your password. This link expires in 1 hour.</p>
                                                                                                                                                                                        <a href="${resetLink}" style="display:inline-block;background:#00C37B;color:#000;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;margin:16px 0">
                                                                                                                                                                                                  Reset Password
                                                                                                                                                                                                          </a>
                                                                                                                                                                                                                  <p style="color:#999;font-size:12px">If you did not request this, ignore this email.</p>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                            `,
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                              };

                                                                                                                                                                                                                              export const resetPassword = async (token, newPassword) => {
                                                                                                                                                                                                                                await connectDB();

                                                                                                                                                                                                                                  const decoded = jwt.verify(token, process.env.JWT_SECRET);
                                                                                                                                                                                                                                    const user    = await User.findOne({
                                                                                                                                                                                                                                        _id:              decoded.id,
                                                                                                                                                                                                                                            resetToken:       token,
                                                                                                                                                                                                                                                resetTokenExpiry: { $gt: new Date() },
                                                                                                                                                                                                                                                  });

                                                                                                                                                                                                                                                    if (!user) throw { statusCode: 400, message: 'Invalid or expired reset link' };

                                                                                                                                                                                                                                                      user.password         = newPassword;
                                                                                                                                                                                                                                                        user.resetToken       = undefined;
                                                                                                                                                                                                                                                          user.resetTokenExpiry = undefined;
                                                                                                                                                                                                                                                            await user.save();
                                                                                                                                                                                                                                                            };