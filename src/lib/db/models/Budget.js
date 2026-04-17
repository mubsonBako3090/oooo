import mongoose from 'mongoose';

const schema = new mongoose.Schema({}, { timestamps: true });

export default mongoose.models.Budget || mongoose.model('Budget', schema);
