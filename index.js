// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const videoTutorialsRouter = require('./routes/videoTutorial');
const blogsRouter = require('./routes/blogs');
const notesRouter = require('./routes/notes');
const resumeRouter = require('./routes/resume'); // Import the resume route


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://aakanksha_01:jangid0110@cluster0.h3ukqgp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the API endpoints
app.use('/api/tutorials', videoTutorialsRouter);

app.use('/api/blogs', blogsRouter); 

app.use('/api/notes', notesRouter);

app.use('/api/resume', resumeRouter); // Add the resume route

app.use('/api/userExists', resumeRouter); // Add the resume route


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
