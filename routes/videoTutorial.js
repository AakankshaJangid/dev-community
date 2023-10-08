// routes/videoTutorials.js

const express = require('express');
const router = express.Router();
const VideoTutorial = require('../models/VideoTutorial');

// GET /api/video-tutorials - Get a list of all video tutorials
router.get('/all', async (req, res) => {
  try {
    const videoTutorials = await VideoTutorial.find();
    res.json(videoTutorials);
  } catch (error) {
    console.error('Error fetching video tutorials:', error);
    res.status(500).json({ error: 'An error occurred while fetching video tutorials' });
  }
});

module.exports = router;
