// models/Blog.js

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  images: [String], // Array of image URLs
  title: String,
  description: String,
  createdBy: String,
  createdTime: String,
});

module.exports = mongoose.model('Blog', blogSchema);
