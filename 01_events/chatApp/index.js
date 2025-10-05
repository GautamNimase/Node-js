// Import the ChatRoom class from the local file "chatRoom.js"
const Chat = require("./chatRoom");

// Create a new instance of the ChatRoom class
const chat = new Chat();

// Register an event listener for when a user joins the chat
// Whenever the 'join' event is emitted, this callback runs
chat.on('join', (user) => {
    console.log(`${user} has joined the chat`);
});

// Register an event listener for when a user sends a message
// It listens for the 'sendMessage' event and logs the message to the console
chat.on('sendMessage', (user, message) => {
    console.log(`${user}: ${message}`);
});

// Register an event listener for when a user leaves the chat
// When the 'leave' event is emitted, it logs that the user has left
chat.on('leave', (user) => {
    console.log(`${user} has left the chat`);
});

// Add a user named "Alice" to the chat room
// This triggers the 'join' event inside ChatRoom
chat.join("Alice");

// Try to send a message as "alice" (note: lowercase 'a')
// Since usernames are case-sensitive and only "Alice" joined,
// the ChatRoom will detect that "alice" is not in the room
// and print: "alice is not in chatRoom"
chat.sendMessage("alice", "hey gautam");
