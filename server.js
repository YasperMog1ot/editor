const express=require("express");
const app=express();
const socket=require("socket.io");
const port=process.env.PORT || 3000;

app.use(express.static("public"));

const server=app.listen(3000,()=>console.log("listening"));
const io=socket(server);
io.on("connection",(client)=>{
    console.log("connected ID "+client.id)
client.on("mouse",(data)=>{
    console.log(data);
client.broadcast.emit("mouse",{...data,id:client.id});
})

});