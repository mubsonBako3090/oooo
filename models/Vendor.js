import mongoose from 'mongoose';

const VendorSchema = new mongoose.Schema(
  {
      name:       { type: String, required: true, trim: true },
          email:      { type: String, trim: true },
              phone:      { type: String, trim: true },
                  address:    { type: String },
                      location:   { type: String },
                          rcNumber:   { type: String },
                              tinNumber:  { type: String },
                                  isVerified: { type: Boolean, default: false },
                                      rating:     { type: Number, default: 0, min: 0, max: 5 },
                                          notes:      { type: String },
                                              isActive:   { type: Boolean, default: true },
                                                },
                                                  { timestamps: true }
                                                  );

                                                  export default mongoose.models.Vendor ||
                                                    mongoose.model('Vendor', VendorSchema);