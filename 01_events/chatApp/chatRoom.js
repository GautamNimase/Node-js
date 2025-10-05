// Import the built-in 'events' module from Node.js
// This module allows creating and handling custom events using EventEmitter.
const EventEmitter = require("events");

// Define a class 'ChatRoom' that extends 'EventEmitter'
// This means 'ChatRoom' can emit and listen for custom events.
class ChatRoom extends EventEmitter {

    // The constructor runs when a new ChatRoom instance is created.
    constructor() {
        super(); // Call the parent EventEmitter constructor to enable event features.
        
        // Create a Set to store unique users in the chat room.
        // A Set automatically ensures that no duplicate users are added.
        this.users = new Set();
    }

    // Method for a user joining the chat room
    join(user) {
        // Add the user to the Set of users
        this.users.add(user);

        // Emit a custom event called 'join' with the username as data.
        // Other parts of the program can listen for this event to know when a user joins.
        this.emit('join', user);
    }

    // Method for sending a message
    sendMessage(user, message) {
        // Check if the user is currently in the chat room
        if (this.users.has(user)) {
            // Emit a 'sendMessage' event with the user and message as data
            // Listeners can react to this event (e.g., display or log the message)
            this.emit('sendMessage', user, message);
        } else {
            // If the user is not in the chat room, log a warning message
            console.log(`${user} is not in chatRoom`);
        }
    }

    // Method for leaving the chat room
    leave(user) {
        // Check if the user is currently in the chat room
        if (this.users.has(user)) {
            // Remove the user from the Set
            this.users.delete(user);

            // ❗ Issue: this line should emit a 'leave' event, not just 'user'
            // It should be: this.emit('leave', user)
            // Otherwise, the event name becomes the username itself (which is likely unintended)
            this.emit(user);
        } else {
            // Log a message if the user isn't part of the chat room
            console.log(`${user} is not in chatRoom`);
        }
    }
}

// Export the ChatRoom class so it can be imported and used in other files
module.exports = ChatRoom;
