// Import the Express library (it helps us create a web server easily)
const express = require('express');

// Create an Express application
const app = express();

// ================= ROUTES =================

// GET request to the homepage ('/')
// When someone visits http://localhost:8000/
app.get('/', function (req, res) {
    // Send a response back to the client
    res.end('Welcome to Home Page');
});

// GET request to '/contact-us'
// When someone visits http://localhost:8000/contact-us
app.get('/contact-us', (req, res) => {
    res.end('You can contact me at Email');
});

// GET request to '/tweets'
// When someone visits http://localhost:8000/tweets
app.get('/tweets', function (req, res) {
    res.end('Here are your Tweets');
});

// POST request to '/tweets'
// When someone sends data to http://localhost:8000/tweets using POST
app.post('/tweets', (req, res) => {
    // Set status code to 201 (means: “Created successfully”)
    res.status(201).end('You created tweets successfully');
});

// ================= START SERVER =================

// Start the server and listen on port 8000
// When the server starts, log a message in the console
app.listen(8000, () => console.log('Server is running on port 8000'));
