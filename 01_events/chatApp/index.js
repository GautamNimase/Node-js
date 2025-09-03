const ChatRoom=require("./chatRoom")

const chat=new ChatRoom();

chat.on('join',(user)=>{
    console.log(`${user} is join the chatroom`)
})

chat.on('sendMessage',(user,message)=>{
    console.log(`${user}: ${message}`)
})
chat.on('left',(user)=>{
    console.log(`${user} is left the chatroom`)
})

// simulating

chat.join("gautam")
chat.join("champi")

chat.sendMessage("gautam","hey champe kya kr rhi ho")

// chat.left("gautam")