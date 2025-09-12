const ChatRoom=require("./chatroom")

const chat=new ChatRoom()

chat.on('join',(user)=>{
    console.log(`${user} is joined the chatapp`)
})

chat.on('sendMessage',(user,message)=>{
    console.log(`${user}: ${message} `)
})

chat.join("gautam")
chat.sendMessage("gauta","hey gautam how are you!!")