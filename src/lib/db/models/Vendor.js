import mongoose from 'mongoose';

const schema = new mongoose.Schema({}, { timestamps: true });

export default mongoose.models.Vendor || mongoose.model('Vendor', schema);
