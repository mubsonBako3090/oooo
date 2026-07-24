import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  description:   { type: String, required: true },
    quantity:      { type: Number, required: true, min: 1 },
      unit:          { type: String, default: 'units' },
        unitPrice:     { type: Number, required: true, min: 0 },
          totalPrice:    { type: Number },
            specification: { type: String },
            });

            const ApprovalSchema = new mongoose.Schema({
              role:     { type: String, enum: ['hod', 'procurement', 'finance', 'vc'] },
                approver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
                  level:    { type: Number },
                    status:   { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
                      comment:  { type: String },
                        decidedAt:{ type: Date },
                        });

                        const RequisitionSchema = new mongoose.Schema(
                          {
                              reqNumber: { type: String, unique: true, required: true },
                                  title:     { type: String, required: true, trim: true },
                                      justification: { type: String },
                                          requester: {
                                                type:     mongoose.Schema.Types.ObjectId,
                                                      ref:      'User',
                                                            required: true,
                                                                },
                                                                    department: {
                                                                          type:     mongoose.Schema.Types.ObjectId,
                                                                                ref:      'Department',
                                                                                      required: true,
                                                                                          },
                                                                                              category: { type: String },
                                                                                                  priority: {
                                                                                                        type:    String,
                                                                                                              enum:    ['low', 'medium', 'high', 'urgent'],
                                                                                                                    default: 'medium',
                                                                                                                        },
                                                                                                                            status: {
                                                                                                                                  type:    String,
                                                                                                                                        enum:    ['draft','pending_hod','pending_procurement','pending_finance','pending_vc','approved','rejected'],
                                                                                                                                              default: 'draft',
                                                                                                                                                  },
                                                                                                                                                      items:       [ItemSchema],
                                                                                                                                                          totalAmount: { type: Number, default: 0 },
                                                                                                                                                              approvals:   [ApprovalSchema],
                                                                                                                                                                  vendor: {
                                                                                                                                                                        type: mongoose.Schema.Types.ObjectId,
                                                                                                                                                                              ref:  'Vendor',
                                                                                                                                                                                  },
                                                                                                                                                                                      lpoGenerated:    { type: Boolean, default: false },
                                                                                                                                                                                          requiredDate:    { type: Date },
                                                                                                                                                                                              rejectionReason: { type: String },
                                                                                                                                                                                                },
                                                                                                                                                                                                  { timestamps: true }
                                                                                                                                                                                                  );

                                                                                                                                                                                                  // Auto-calculate totalAmount before saving
                                                                                                                                                                                                  RequisitionSchema.pre('save', function (next) {
                                                                                                                                                                                                    if (this.items?.length) {
                                                                                                                                                                                                        this.items.forEach((item) => {
                                                                                                                                                                                                              item.totalPrice = item.quantity * item.unitPrice;
                                                                                                                                                                                                                  });
                                                                                                                                                                                                                      this.totalAmount = this.items.reduce((sum, item) => sum + item.totalPrice, 0);
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                          next();
                                                                                                                                                                                                                          });

                                                                                                                                                                                                                          export default mongoose.models.Requisition ||
                                                                                                                                                                                                                            mongoose.model('Requisition', RequisitionSchema);