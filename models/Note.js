// models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  note: String,
  // You can add more fields like user reference, timestamps, etc.
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
