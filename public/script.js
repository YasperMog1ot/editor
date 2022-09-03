const socket=io();
function setup(){
createCanvas(800,800);
background(0);
socket.on("mouse",(data)=>{
    console.log(data);
    stroke("green");
    line(data.px,data.py,data.x,data.y);
})
}
function mouseDragged(){
    socket.emit("mouse",{px:pmouseX,py:pmouseY,x:mouseX,y:mouseY})
    stroke("red");
    line(pmouseX,pmouseY,mouseX,mouseY);
}
