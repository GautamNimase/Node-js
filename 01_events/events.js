const EventEmitter=require("events");

const eventEmitter=new EventEmitter();

eventEmitter.on('test',(username)=>{
    console.log(`hello ${username} and welcome to node js`);
});
eventEmitter.on('test',(score)=>{
    console.log(`your score is 45`);
});

eventEmitter.emit('test',"gautam");

console.log(eventEmitter.listenerCount('test'))