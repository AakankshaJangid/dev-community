// routes/blogs.js

const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// POST /api/blogs - Create a new blog post
router.post('/create', async (req, res) => {
  try {
    const { images,title, description, createdBy, createdTime } = req.body;
    const blog = new Blog({ images,title, description, createdBy, createdTime });
    await blog.save();
    res.status(201).json({ message: 'Blog post created successfully' });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/blogs - Get a list of all blog posts
router.get('/all', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
