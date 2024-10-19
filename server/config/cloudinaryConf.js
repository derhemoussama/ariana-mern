require('dotenv').config();
module.exports = {
    cloudinary: {
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    },
  };