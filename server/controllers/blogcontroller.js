const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const fs = require("fs");
const cloudinaryConf = require("../config/cloudinaryConf");
const Blog = require("../Models/blogSchema");

cloudinary.config(cloudinaryConf.cloudinary);

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Destination folder
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // File name
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"), false);
    }
  },
});

const uploadToCloudinary = async (path, folder = "ariana") => {
  try {
    const data = await cloudinary.uploader.upload(path, { folder: folder });
    return { url: data.secure_url, publicId: data.public_id };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Get Blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: "Error fetching blogs", error });
  }
};

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Blog with Image Upload
exports.addBlog = async (req, res) => {
  const image = req.file; // multer stores the file in req.file
  const { title, content, author } = req.body;
  if (!image) {
    return res.status(400).json({ error: "No image file uploaded" });
  }

  try {
    // Upload the image to Cloudinary
    const results = await uploadToCloudinary(image.path, "ariana");

    // Remove the file from the local uploads folder
    fs.unlinkSync(image.path);

    const blog = new Blog({ title, content, author, imageUrl: results.url });
    await blog.save();
    // Respond with the Cloudinary URL
    res.status(201).json({ message: "blog registered successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ error: "A server error occurred with this request" });
  }
};

exports.upload = upload.single("image");
