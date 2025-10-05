const EventEmitter=require("events")

const eventEmiter=new EventEmitter()

eventEmiter.on('error',(err)=>{
    console.error(`error Occuerd: ${err}`)
})

eventEmiter.emit('error', new Error("Something Went Wrong"))