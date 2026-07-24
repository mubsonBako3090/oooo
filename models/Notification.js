import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
  {
      user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
          title:       { type: String, required: true },
              message:     { type: String },
                  type: {
                        type:    String,
                              enum:    ['info', 'success', 'warning', 'error'],
                                    default: 'info',
                                        },
                                            isRead:      { type: Boolean, default: false },
                                                requisition: { type: mongoose.Schema.Types.ObjectId, ref: 'Requisition' },
                                                    actionUrl:   { type: String },
                                                      },
                                                        { timestamps: true }
                                                        );

                                                        export default mongoose.models.Notification ||
                                                          mongoose.model('Notification', NotificationSchema);