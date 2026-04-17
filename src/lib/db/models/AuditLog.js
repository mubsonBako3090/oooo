import mongoose from 'mongoose';

const schema = new mongoose.Schema({}, { timestamps: true });

export default mongoose.models.AuditLog || mongoose.model('AuditLog', schema);
