// models/VideoTutorial.js

const mongoose = require('mongoose');

const videoTutorialSchema = new mongoose.Schema({
  title: String,
  description: String,
  coverImg: String,
  url: String,
});

const VideoTutorial = mongoose.model('VideoTutorial', videoTutorialSchema);

module.exports = VideoTutorial;
