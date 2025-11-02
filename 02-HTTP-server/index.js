const http=require('node:http');
const server =http.createServer(function (req,res){
    console.log(`Incoming request at [${Date.now()}]`)
    console.log(req.headers);

    res.writeHead(200);
    res.end('OK!')
})

server.listen(8000,()=> console.log(`server is running on port number:8000`));