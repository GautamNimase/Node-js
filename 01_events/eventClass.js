const EventEmitter=require("events");

class Chat extends EventEmitter{
    sendMessage(msg){
        console.log(`Sent Message: ${msg}`);
        this.emit("messageRecived",msg);
    }
}

const chat=new Chat();

chat.on("messageRecived",(msg)=>{
    console.log(`New Message: ${msg}`)
})

chat.sendMessage("hey gautam welocome to usa")