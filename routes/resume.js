// routes/resume.js

const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

router.post('/generate', async (req, res) => {
  try {
    const { name, title, email, /* Add more fields as needed */ } = req.body;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Use the data to generate the resume HTML
    const html = `<html>
      <head>
        <title>Resume</title>
      </head>
      <body>
        <h1>${name}</h1>
        <p>Title/Domain: ${title}</p>
        <p>Email: ${email}</p>
        <!-- Add more fields as needed -->
      </body>
    </html>`;

    // Create a PDF file from the HTML
    await page.setContent(html);
    const pdfBuffer = await page.pdf();

    // Close the browser
    await browser.close();

    // Send the PDF as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;