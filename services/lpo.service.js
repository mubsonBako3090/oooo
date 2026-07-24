import PurchaseOrder  from '@/models/PurchaseOrder';
import Requisition    from '@/models/Requisition';
import AuditLog       from '@/models/AuditLog';
import { connectDB }  from '@/lib/db';
import { generateLPONumber } from '@/utils/generateId';

export const getAllLPOs = async () => {
  await connectDB();
    return PurchaseOrder.find()
        .populate({ path: 'requisition', select: 'reqNumber title totalAmount department', populate: { path: 'department', select: 'name' } })
            .populate('vendor',    'name location')
                .populate('issuedBy',  'name role')
                    .sort({ createdAt: -1 });
                    };

                    export const getOneLPO = async (id) => {
                      await connectDB();
                        const lpo = await PurchaseOrder.findById(id)
                            .populate({ path: 'requisition', populate: [{ path: 'requester', select: 'name email' }, { path: 'department', select: 'name code hodName' }] })
                                .populate('vendor',   'name email phone address location rcNumber')
                                    .populate('issuedBy', 'name role email');

                                      if (!lpo) throw { statusCode: 404, message: 'LPO not found' };
                                        return lpo;
                                        };

                                        export const createLPO = async (body, user) => {
                                          await connectDB();

                                            const { requisitionId, vendorId, expectedDeliveryDate, notes } = body;

                                              const req = await Requisition.findById(requisitionId);
                                                if (!req)           throw { statusCode: 404, message: 'Requisition not found' };
                                                  if (req.status !== 'approved') throw { statusCode: 400, message: 'Requisition must be approved first' };
                                                    if (req.lpoGenerated)          throw { statusCode: 400, message: 'LPO already generated for this requisition' };

                                                      const lpo = await PurchaseOrder.create({
                                                          lpoNumber:            generateLPONumber(),
                                                              requisition:          requisitionId,
                                                                  vendor:               vendorId,
                                                                      issuedBy:             user.id,
                                                                          expectedDeliveryDate: expectedDeliveryDate || null,
                                                                              notes,
                                                                                });

                                                                                  // Update requisition
                                                                                    req.lpoGenerated = true;
                                                                                      req.vendor       = vendorId;
                                                                                        await req.save();

                                                                                          await AuditLog.create({
                                                                                              requisition: requisitionId,
                                                                                                  user:        user.id,
                                                                                                      action:      'LPO_GENERATED',
                                                                                                          details:     `LPO ${lpo.lpoNumber} generated`,
                                                                                                            });

                                                                                                              return getOneLPO(lpo._id);
                                                                                                              };

                                                                                                              export const updateLPOStatus = async (id, status, user) => {
                                                                                                                await connectDB();
                                                                                                                  const lpo = await PurchaseOrder.findByIdAndUpdate(
                                                                                                                      id,
                                                                                                                          { status },
                                                                                                                              { new: true }
                                                                                                                                );
                                                                                                                                  if (!lpo) throw { statusCode: 404, message: 'LPO not found' };

                                                                                                                                    await AuditLog.create({
                                                                                                                                        requisition: lpo.requisition,
                                                                                                                                            user:        user.id,
                                                                                                                                                action:      `LPO_STATUS_UPDATED`,
                                                                                                                                                    details:     `LPO status changed to ${status}`,
                                                                                                                                                      });

                                                                                                                                                        return lpo;
                                                                                                                                                        };