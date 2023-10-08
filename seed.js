// seed.js

const mongoose = require('mongoose');
const VideoTutorial = require('./models/VideoTutorial');

// Define your videoTutorialsSubPage array here
const videoTutorialsSubPage = [
  {
    title: "Tutorial 1",
    description: "This is the first video tutorial.",
    coverImg: "/dev-comm-logo.png",
    url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
  },
  {
    title: "Tutorial 2",
    description: "This is the second video tutorial.",
    coverImg: "/dev-comm-logo.png",
    url: "https://youtu.be/some-url-here",
  },
  // Add more video tutorials as needed
];

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://aakanksha_01:jangid0110@cluster0.h3ukqgp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  try {
    // Clear existing data (optional)
    await VideoTutorial.deleteMany({});

    // Save the videoTutorialsSubPage data to the database
    await VideoTutorial.insertMany(videoTutorialsSubPage);

    console.log('Video tutorials data saved to the database.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
});
