import mongoose from 'mongoose';

export async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return mongoose;
  return await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/procurement');
}
