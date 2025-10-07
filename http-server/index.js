// Import the built-in 'http' module from Node.js
// This module allows you to create web servers that handle HTTP requests and responses.
const http = require('node:http');

// Create a new HTTP server
// The 'createServer' method takes a callback function that runs every time a request hits the server.
const server = http.createServer(function (req, res) {

    // This message will be printed in the console whenever the server receives a request.
    console.log('I got an incoming request');

    // Here you could handle database queries, authentication, or routing logic if needed.
    // Example: db queries, logging, etc.

    // Send an HTTP response header with status code 200 (OK)
    // By default, Node sends 'Content-Type: text/plain' if not specified.
    res.writeHead(200);

    // Send the response body (message) back to the client and end the response.
    res.end('Thanks for visiting my server :)');
});

// Start the server and have it listen on port 8000
// The callback runs once when the server starts successfully.
server.listen(8000, function () {
    console.log(`HTTP server is up and running on port 8000`);
});
