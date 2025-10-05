// Import the built-in 'events' module from Node.js
// This module provides the EventEmitter class used for handling custom events.
const EventEmitter = require("events");

// Create a class 'Chat' that extends EventEmitter
// This means 'Chat' inherits all the event-handling capabilities of EventEmitter.
class Chat extends EventEmitter {

    // Define a method called 'sendMessage' which takes a message as input
    sendMessage(msg) {
        // Log the message to the console when it is sent
        console.log(`Message sent: ${msg}`);

        // Emit (trigger) a custom event named 'MessageRecived' and pass the message as data
        // Other parts of the program can listen for this event and react when it's emitted
        this.emit("MessageRecived", msg);
    }
}

// Create a new instance of the Chat class
const chat = new Chat();

// Set up an event listener for the 'MessageRecived' event
// When this event is triggered, the callback function runs and prints the received message
chat.on("MessageRecived", (msg) => {
    console.log(`New Message: ${msg}`);
});

// Trigger the process by calling sendMessage()
// This will print "Message sent: hey gautam" and also trigger the event listener above
chat.sendMessage("hey gautam");
