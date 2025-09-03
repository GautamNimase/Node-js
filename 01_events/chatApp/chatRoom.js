const EventEmitter=require("events")

class ChatRoom extends EventEmitter{
    
    constructor(){
        super();
        this.users=new Set();

    }

    join(user){
        this.users.add(user)
        this.emit('join',user)
    }

    sendMessage(user, message){
        if(this.users.has(user)){
            this.emit('sendMessage',user,message)
        }
        else{
            console.log(`${user} is not in chatroom`)
        }
    }

    left(user){
        if(this.users.has(user)){
            this.users.delete(user)
            this.emit('left', user)
        }
        else{
            console.log(`${user} is not present in ChatRoom`)
        }
    }
}

module.exports=ChatRoom