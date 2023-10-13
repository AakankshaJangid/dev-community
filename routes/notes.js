// routes/notes.js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Create a new note
router.post('/', async (req, res) => {
  try {
    const { title, note } = req.body;
    const newNote = new Note({ title, note });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a note by ID
router.delete('/:noteId', async (req, res) => {
  try {
    const noteId = req.params.noteId;
    await Note.findByIdAndDelete(noteId);
    res.status(204).send(); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
