import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema(
  {
      name:     { type: String, required: true, unique: true, trim: true },
          code:     { type: String, unique: true, trim: true },
              hodName:  { type: String, trim: true },
                  phone:    { type: String },
                      email:    { type: String },
                          isActive: { type: Boolean, default: true },
                            },
                              { timestamps: true }
                              );

                              export default mongoose.models.Department ||
                                mongoose.model('Department', DepartmentSchema);