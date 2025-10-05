const EventEmitter=require("events");

const eventEmitter=new EventEmitter();

// create an event

eventEmitter.on('greet',(username)=>{
    console.log(`hello ${username} and welcome to events in node`);
})

// emit an Event 
// eventEmitter.emit('greet',"gautam");

// Once it print only once 
eventEmitter.once('Message',(msg)=>{
    console.log(`Message Recived: ${msg}`)
})

eventEmitter.emit('Message',"Welcome To India")
eventEmitter.emit('Message',"hello gautam")

