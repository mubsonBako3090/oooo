import mongoose from 'mongoose';

const AuditLogSchema = new mongoose.Schema(
  {
      requisition: {
            type: mongoose.Schema.Types.ObjectId,
                  ref:  'Requisition',
                      },
                          user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
                              action:    { type: String, required: true },
                                  details:   { type: String },
                                      ipAddress: { type: String },
                                          userAgent: { type: String },
                                            },
                                              { timestamps: true }
                                              );

                                              export default mongoose.models.AuditLog ||
                                                mongoose.model('AuditLog', AuditLogSchema);