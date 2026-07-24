import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:    process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      export const uploadFile = async (filePath, folder = 'ksu-procurement') => {
        const result = await cloudinary.uploader.upload(filePath, { folder });
          return result.secure_url;
          };

          export const deleteFile = async (publicId) => {
            await cloudinary.uploader.destroy(publicId);
            };

            export default cloudinary;