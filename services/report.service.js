import Requisition  from '@/models/Requisition';
import Budget       from '@/models/Budget';
import { connectDB } from '@/lib/db';
import { currentYear } from '@/utils/formatDate';

export const getSummary = async (year) => {
  await connectDB();
    const fiscalYear = year || currentYear();
      const start = new Date(`${fiscalYear}-01-01`);
        const end   = new Date(`${fiscalYear}-12-31`);

          const [total, approved, pending, rejected, totalValue] = await Promise.all([
              Requisition.countDocuments({ createdAt: { $gte: start, $lte: end } }),
                  Requisition.countDocuments({ status: 'approved',  createdAt: { $gte: start, $lte: end } }),
                      Requisition.countDocuments({ status: /^pending_/, createdAt: { $gte: start, $lte: end } }),
                          Requisition.countDocuments({ status: 'rejected',  createdAt: { $gte: start, $lte: end } }),
                              Requisition.aggregate([
                                    { $match: { status: 'approved', createdAt: { $gte: start, $lte: end } } },
                                          { $group: { _id: null, total: { $sum: '$totalAmount' } } },
                                              ]),
                                                ]);

                                                  return {
                                                      total,
                                                          approved,
                                                              pending,
                                                                  rejected,
                                                                      draft:      total - approved - pending - rejected,
                                                                          totalValue: totalValue[0]?.total || 0,
                                                                              fiscalYear,
                                                                                };
                                                                                };

                                                                                export const getByDepartment = async (year) => {
                                                                                  await connectDB();
                                                                                    const fiscalYear = year || currentYear();
                                                                                      const start = new Date(`${fiscalYear}-01-01`);
                                                                                        const end   = new Date(`${fiscalYear}-12-31`);

                                                                                          return Requisition.aggregate([
                                                                                              { $match: { createdAt: { $gte: start, $lte: end } } },
                                                                                                  {
                                                                                                        $group: {
                                                                                                                _id:        '$department',
                                                                                                                        total:      { $sum: '$totalAmount' },
                                                                                                                                count:      { $sum: 1 },
                                                                                                                                        approved:   { $sum: { $cond: [{ $eq: ['$status','approved'] }, 1, 0] } },
                                                                                                                                              },
                                                                                                                                                  },
                                                                                                                                                      {
                                                                                                                                                            $lookup: {
                                                                                                                                                                    from:         'departments',
                                                                                                                                                                            localField:   '_id',
                                                                                                                                                                                    foreignField: '_id',
                                                                                                                                                                                            as:           'department',
                                                                                                                                                                                                  },
                                                                                                                                                                                                      },
                                                                                                                                                                                                          { $unwind: '$department' },
                                                                                                                                                                                                              { $sort:   { total: -1 } },
                                                                                                                                                                                                                ]);
                                                                                                                                                                                                                };

                                                                                                                                                                                                                export const getByStatus = async () => {
                                                                                                                                                                                                                  await connectDB();
                                                                                                                                                                                                                    return Requisition.aggregate([
                                                                                                                                                                                                                        { $group: { _id: '$status', count: { $sum: 1 } } },
                                                                                                                                                                                                                            { $sort:  { count: -1 } },
                                                                                                                                                                                                                              ]);
                                                                                                                                                                                                                              };

                                                                                                                                                                                                                              export const getMonthly = async (year) => {
                                                                                                                                                                                                                                await connectDB();
                                                                                                                                                                                                                                  const fiscalYear = year || currentYear();
                                                                                                                                                                                                                                    const start = new Date(`${fiscalYear}-01-01`);
                                                                                                                                                                                                                                      const end   = new Date(`${fiscalYear}-12-31`);

                                                                                                                                                                                                                                        return Requisition.aggregate([
                                                                                                                                                                                                                                            { $match: { createdAt: { $gte: start, $lte: end } } },
                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                      $group: {
                                                                                                                                                                                                                                                              _id:   { $month: '$createdAt' },
                                                                                                                                                                                                                                                                      count: { $sum: 1 },
                                                                                                                                                                                                                                                                              value: { $sum: '$totalAmount' },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                            { $sort: { '_id': 1 } },
                                                                                                                                                                                                                                                                                              ]);
                                                                                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                                                                              export const exportCSV = async (year) => {
                                                                                                                                                                                                                                                                                                await connectDB();
                                                                                                                                                                                                                                                                                                  const fiscalYear = year || currentYear();
                                                                                                                                                                                                                                                                                                    const start = new Date(`${fiscalYear}-01-01`);
                                                                                                                                                                                                                                                                                                      const end   = new Date(`${fiscalYear}-12-31`);

                                                                                                                                                                                                                                                                                                        const reqs = await Requisition.find({ createdAt: { $gte: start, $lte: end } })
                                                                                                                                                                                                                                                                                                            .populate('requester',  'name')
                                                                                                                                                                                                                                                                                                                .populate('department', 'name');

                                                                                                                                                                                                                                                                                                                  const header = 'REQ Number,Title,Department,Requester,Category,Priority,Amount,Status,Date\n';
                                                                                                                                                                                                                                                                                                                    const rows   = reqs.map((r) =>
                                                                                                                                                                                                                                                                                                                        `${r.reqNumber},"${r.title}",${r.department?.name},${r.requester?.name},${r.category},${r.priority},${r.totalAmount},${r.status},${r.createdAt?.toISOString().slice(0,10)}`
                                                                                                                                                                                                                                                                                                                          ).join('\n');

                                                                                                                                                                                                                                                                                                                            return header + rows;
                                                                                                                                                                                                                                                                                                                            };