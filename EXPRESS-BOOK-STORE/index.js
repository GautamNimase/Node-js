// Import the 'console' module (though you don’t actually need this line)
const { error } = require('console');

// Import the 'express' library — this helps us create a web server easily
const express = require('express');

// Create an Express app instance
const app = express();

// Set the port number where your server will listen for requests
const PORT = 8000;

// Sample data — an array of book objects
const books = [
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' },
];

// ==================== ROUTES ====================

// GET /books — return the full list of books
app.get('/books', (req, res) => {
    // Send the 'books' array as JSON to the client
    res.json(books);
});

// GET /books/:id — return a single book based on its id
app.get('/books/:id', (req, res) => {
    // Get the 'id' from the URL (as a string)
    const id = req.params.id;

    // Find the book with the matching id
    const book = books.find((e) => e.id == id); // '==' allows string/number match

    // If no book was found, send a 404 (Not Found) error message
    if (!book)
        return res
            .status(404)
            .json({ error: `Book with id ${id} does not exist!` });

    // If found, send the book details back as JSON
    return res.json(book);
});

// ==================== MIDDLEWARE ====================

// Middleware to automatically parse JSON data from incoming requests
// (It must come before POST or PUT routes that use req.body)
app.use(express.json());

// POST /books — create a new book
app.post('/books', (req, res) => {
    // Extract 'title' and 'author' from the request body
    const { title, author } = req.body;

    // Check if 'title' is missing or empty
    if (!title || title === '')
        return res.status(400).json({ error: 'Title is required' });

    // Check if 'author' is missing or empty
    if (!author || author === '')
        return res.status(400).json({ error: 'Author is required' });

    // Create a new id (just the next number in sequence)
    const id = books.length + 1;

    // Create the new book object
    const book = { id, title, author };

    // Add the new book to the array
    books.push(book);

    // Return a success message (HTTP status 201 = Created)
    return res.status(201).json({ message: 'Book created successfully' });
});

// DELETE /books/:id — delete a book by id
app.delete('/books/:id', (req, res) => {
    // Convert the id from string to integer
    const id = parseInt(req.params.id);

    // If id is not a number, return an error
    if (isNaN(id))
        return res.status(404).json({ error: `Book with id ${id} does not exist!` });

    // Find the index of the book with the given id
    const indexToDelete = books.findIndex((e) => e.id === id);

    // If book not found, return a 404 error
    if (indexToDelete < 0)
        return res.status(404).json({ error: `Book with id ${id} does not exist!` });

    // Remove the book from the array
    books.splice(indexToDelete, 1);

    // Return a success message
    return res.status(200).json({ message: 'Book deleted' });
});

// ==================== START SERVER ====================

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`HTTP server is running on port ${PORT}`);
});
