import Budget       from '@/models/Budget';
import Department   from '@/models/Department';
import { connectDB } from '@/lib/db';
import { currentYear } from '@/utils/formatDate';

export const getAllBudgets = async (year) => {
  await connectDB();
    const fiscalYear = year || currentYear();
      return Budget.find({ fiscalYear })
          .populate('department', 'name code')
              .sort({ createdAt: -1 });
              };

              export const getBudgetByDept = async (deptId, year) => {
                await connectDB();
                  const fiscalYear = year || currentYear();
                    const budget = await Budget.findOne({
                        department: deptId,
                            fiscalYear,
                              }).populate('department', 'name code');

                                if (!budget) throw { statusCode: 404, message: 'Budget not found for this department' };
                                  return budget;
                                  };

                                  export const createBudget = async (body) => {
                                    await connectDB();
                                      const budget = await Budget.create(body);
                                        return Budget.findById(budget._id).populate('department', 'name code');
                                        };

                                        export const updateBudget = async (id, body) => {
                                          await connectDB();
                                            const budget = await Budget.findByIdAndUpdate(id, body, { new: true, runValidators: true })
                                                .populate('department', 'name code');
                                                  if (!budget) throw { statusCode: 404, message: 'Budget not found' };
                                                    return budget;
                                                    };

                                                    export const getBudgetSummary = async (year) => {
                                                      await connectDB();
                                                        const fiscalYear = year || currentYear();
                                                          const budgets    = await Budget.find({ fiscalYear })
                                                              .populate('department', 'name code');

                                                                const summary = {
                                                                    totalAllocated: 0,
                                                                        totalSpent:     0,
                                                                            totalCommitted: 0,
                                                                                totalAvailable: 0,
                                                                                    departments:    [],
                                                                                      };

                                                                                        budgets.forEach((b) => {
                                                                                            const available = b.amountAllocated - b.amountSpent - b.amountCommitted;
                                                                                                summary.totalAllocated += b.amountAllocated;
                                                                                                    summary.totalSpent     += b.amountSpent;
                                                                                                        summary.totalCommitted += b.amountCommitted;
                                                                                                            summary.totalAvailable += available;
                                                                                                                summary.departments.push({
                                                                                                                      id:          b._id,
                                                                                                                            department:  b.department,
                                                                                                                                  allocated:   b.amountAllocated,
                                                                                                                                        spent:       b.amountSpent,
                                                                                                                                              committed:   b.amountCommitted,
                                                                                                                                                    available,
                                                                                                                                                          utilization: b.utilizationPct,
                                                                                                                                                              });
                                                                                                                                                                });

                                                                                                                                                                  return summary;
                                                                                                                                                                  };