// Import the 'http' module to create a web server
const http = require('node:http');

// Import the 'fs' (file system) module to read/write files
const fs = require('node:fs');

// Create a web server
const server = http.createServer((req, res) => {
    // 'req' → request (what the client sends)
    // 'res' → response (what the server sends back)

    // Get the HTTP method (like GET or POST)
    const method = req.method;

    // Get the URL path (like '/', '/tweet', etc.)
    const path = req.url;

    // Create a log message with the time, method, and path
    const log = `\n[${Date.now()}]: ${method} ${path}`;

    // Save the log message to a file named 'log.txt'
    // The 'a' in appendFileSync means "add to the end of file"
    fs.appendFileSync('log.txt', log, 'utf-8');

    // Handle different request types (GET, POST, etc.)
    switch (method) {
        // If the request is a GET request
        case 'GET': {
            // Check which URL path was requested
            switch (path) {
                // If the path is "/", send a welcome message
                case '/':
                    return res.writeHead(200).end('Hello from the server 👋🏻');

                // If the path is "/contact-us", send contact info
                case '/contact-us':
                    return res
                        .writeHead(200)
                        .end(
                            'Sure, Email: piyushgarg.dev@gmail.com and Phone: +91 99999 99999'
                        );

                // If the path is "/tweet", send a list of tweets
                case '/tweet':
                    return res.writeHead(200).end('Tweet-1\nTweet-2');
            }
            break; // Exit this switch if no matching case found
        }

        // If the request is a POST request
        case 'POST': {
            switch (path) {
                // If the path is "/tweet", pretend to create a tweet
                case '/tweet':
                    return res.writeHead(201).end('Your tweet was created');
            }
        }
    }

    // If no route matched, send a 404 error message
    return res.writeHead(404).end('Youre lost man!');
});

// Start the server on port 8000
server.listen(8000, () => console.log(`Http server is running on PORT 8000`));
