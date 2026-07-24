import mongoose from 'mongoose';
import bcrypt   from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
      name:     { type: String, required: true, trim: true },
          email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
              password: { type: String, required: true, minlength: 6, select: false },
                  phone:    { type: String, trim: true },
                      staffId:  { type: String, unique: true, sparse: true },
                          role: {
                                type:    String,
                                      enum:    ['requester', 'hod', 'procurement', 'finance', 'vc', 'admin'],
                                            default: 'requester',
                                                },
                                                    department: {
                                                          type: mongoose.Schema.Types.ObjectId,
                                                                ref:  'Department',
                                                                    },
                                                                        isActive:        { type: Boolean, default: true  },
                                                                            avatar:          { type: String },
                                                                                resetToken:      { type: String },
                                                                                    resetTokenExpiry:{ type: Date   },
                                                                                        lastLogin:       { type: Date   },
                                                                                          },
                                                                                            { timestamps: true }
                                                                                            );

                                                                                            // Hash password before saving
                                                                                            UserSchema.pre('save', async function (next) {
                                                                                              if (!this.isModified('password')) return next();
                                                                                                this.password = await bcrypt.hash(this.password, 12);
                                                                                                  next();
                                                                                                  });

                                                                                                  // Compare password method
                                                                                                  UserSchema.methods.comparePassword = async function (candidatePassword) {
                                                                                                    return bcrypt.compare(candidatePassword, this.password);
                                                                                                    };

                                                                                                    // Remove password from JSON output
                                                                                                    UserSchema.methods.toJSON = function () {
                                                                                                      const obj = this.toObject();
                                                                                                        delete obj.password;
                                                                                                          delete obj.resetToken;
                                                                                                            delete obj.resetTokenExpiry;
                                                                                                              return obj;
                                                                                                              };

                                                                                                              export default mongoose.models.User || mongoose.model('User', UserSchema);