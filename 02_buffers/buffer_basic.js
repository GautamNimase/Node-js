// Import the 'Buffer' class from Node.js built-in 'buffer' module
const { Buffer } = require("buffer");

// Import 'buffer' (unused here) from stream/consumers — not needed for this example
const { buffer } = require("stream/consumers");

// -------------------------------------------
// Example 1: Creating a Buffer using from()
// -------------------------------------------

// Create a Buffer from a string
// 'Buffer.from()' encodes the given string into bytes (by default, UTF-8 encoding)
const buf = Buffer.from("Chai aur \n\nCode");

// You could log this to see the raw bytes or decoded string:
// console.log(buf)            // shows the byte values (hex form)
// console.log(buf.toString()) // converts bytes back to readable text

// -------------------------------------------
// Example 2: allocUnsafe() vs alloc()
// -------------------------------------------

// 'allocUnsafe(size)' creates a new buffer of given size (in bytes)
// but **does NOT initialize** it — so it may contain old/random data.
// It's faster but less safe for security-sensitive operations.
const bufTwo = Buffer.allocUnsafe(7);
console.log(bufTwo); // shows uninitialized random byte values

// 'alloc(size)' creates a zero-filled buffer of given size
const bufThree = Buffer.alloc(40);

// Write a string into the buffer
bufThree.write("hello");

// Convert buffer contents to a string (only the written bytes will be meaningful)
console.log(bufThree.toString()); // Output: "hello" + empty bytes as null chars

// -------------------------------------------
// Example 3: Reading part of a Buffer
// -------------------------------------------

// Create a new buffer from string
const bufFour = Buffer.from("chai aur Code");

// Convert entire buffer to string
console.log(bufFour.toString()); // Output: "chai aur Code"

// Convert buffer to string only from index 0 to 4
// The slice (0,4) means bytes 0,1,2,3 → characters "chai"
console.log(bufFour.toString('utf8', 0, 4)); // Output: "chai"

// -------------------------------------------
// Example 4: Modifying Buffer contents
// -------------------------------------------

// Create buffer from string "chai"
const bufFive = Buffer.from("chai");
console.log(bufFive); // Prints raw byte representation, e.g., <Buffer 63 68 61 69>

// Change the first byte (0 index) to hex 0x4A → ASCII 'J'
// This effectively changes "chai" → "Jhai"
bufFive[0] = 0x4A;

console.log(bufFive);          // Shows updated byte values
console.log(bufFive.toString()); // Output: "Jhai"

// -------------------------------------------
// Example 5: Concatenating multiple Buffers
// -------------------------------------------

// Create two separate buffers
const buf1 = Buffer.from("chai");
const buf2 = Buffer.from(" aur code");

// Combine them into one continuous buffer
const merged = Buffer.concat([buf1, buf2]);

// Convert the merged buffer back into a readable string
console.log(merged.toString()); // Output: "chai aur code"
