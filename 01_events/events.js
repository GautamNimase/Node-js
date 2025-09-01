const EventEmitter=require("events");
const eventEmitter=new EventEmitter();

// eventEmitter.on('greet',(username)=>{
//     console.log(`hello ${username} and welcome to event in node.js`);
// });

// eventEmitter.once('massage',()=>{
//     console.log("hey this will be print only once ")
// })

// eventEmitter.emit('greet','gautam');
// eventEmitter.emit('greeting');
// eventEmitter.emit('massage')
// eventEmitter.emit('massage')
// eventEmitter.emit('greet','champa');

eventEmitter.on("error",(err)=>{
    console.error(`Error Occurred: ${err.message}`);
});

eventEmitter.emit("error",new Error("Something Went Wrong "))