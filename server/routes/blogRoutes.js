const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogcontroller');

router.get('/blogs', blogController.getBlogs);
router.get('/blogs/:id', blogController.getBlogById);  // Ensure this route exists
router.post('/addBlog', blogController.upload, blogController.addBlog);

module.exports = router;


