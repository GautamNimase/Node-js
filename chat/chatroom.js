const EventEmitter=require("events")

class Chat extends EventEmitter{
    constructor(){
        super();
        this.users=new Set();
    }

    join(user){
        // console.log(`${user} is join chatroom`)
        this.users.add(user)
        this.emit('join',user)
    }

    sendMessage(user,message){
        if(this.users.has(user)){
            // console.log(`${user}: ${message}`)
            this.emit('sendMessage',user,message)
        }else{
            console.log(`${user} is not in chatroom`)
        }
    }
}



module.exports=Chat