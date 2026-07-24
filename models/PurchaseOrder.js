import mongoose from 'mongoose';

const PurchaseOrderSchema = new mongoose.Schema(
  {
      lpoNumber:    { type: String, unique: true, required: true },
          requisition:  { type: mongoose.Schema.Types.ObjectId, ref: 'Requisition', required: true },
              vendor:       { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor',      required: true },
                  issuedBy:     { type: mongoose.Schema.Types.ObjectId, ref: 'User',        required: true },
                      status: {
                            type:    String,
                                  enum:    ['issued', 'acknowledged', 'delivered', 'closed'],
                                        default: 'issued',
                                            },
                                                expectedDeliveryDate: { type: Date },
                                                    actualDeliveryDate:   { type: Date },
                                                        deliveryNotes:        { type: String },
                                                            notes:                { type: String },
                                                              },
                                                                { timestamps: true }
                                                                );

                                                                export default mongoose.models.PurchaseOrder ||
                                                                  mongoose.model('PurchaseOrder', PurchaseOrderSchema);