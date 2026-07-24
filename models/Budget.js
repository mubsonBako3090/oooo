import mongoose from 'mongoose';

const BudgetSchema = new mongoose.Schema(
  {
      department:      { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
          fiscalYear:      { type: Number, required: true },
              amountAllocated: { type: Number, default: 0 },
                  amountSpent:     { type: Number, default: 0 },
                      amountCommitted: { type: Number, default: 0 },
                          budgetCode:      { type: String },
                              notes:           { type: String },
                                },
                                  { timestamps: true }
                                  );

                                  BudgetSchema.index({ department: 1, fiscalYear: 1 }, { unique: true });

                                  BudgetSchema.virtual('amountAvailable').get(function () {
                                    return this.amountAllocated - this.amountSpent - this.amountCommitted;
                                    });

                                    BudgetSchema.virtual('utilizationPct').get(function () {
                                      if (!this.amountAllocated) return 0;
                                        return Math.round(
                                            ((this.amountSpent + this.amountCommitted) / this.amountAllocated) * 100
                                              );
                                              });

                                              BudgetSchema.set('toJSON', { virtuals: true });
                                              BudgetSchema.set('toObject', { virtuals: true });

                                              export default mongoose.models.Budget ||
                                                mongoose.model('Budget', BudgetSchema);