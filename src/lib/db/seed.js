import { connectToDatabase } from './mongodb';

export default async function seed() {
  await connectToDatabase();
  return { seeded: true };
}
