const FPS = 60;
var bs = 5;
var bx, by;

var pxpfx, pxpfy;
var canvas, context;
var wd, ht;

canvas = document.getElementById("bg");
context = canvas.getContext("2d");

setInterval(update, 1000 / FPS);
bx = canvas.width /2;
by = canvas.height /2;

pxpfx = Math.floor(Math.random()*50+10) / FPS;
pxpfy = Math.floor(Math.random()*50+10) / FPS;

if (Math.floor(Math.random() *2) == 0) {
    pxpfx = -pxpfx;
}
if (Math.floor(Math.random() *2) == 0) {
    pxpfy = -pxpfy;
}

function update() {
    bx += pxpfx;
    by += pxpfy;
    context.fillStyle = "#2f4672";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    wd = window.innerWidth;
    ht = window.innerHeight
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "white";
    context.arc(bx - bs/2,by - bs/2,bs/2, 0,2*Math.PI);
    context.stroke();

    if (bx-bs/2 < 0&&pxpfx<0) {
        pxpfx = -pxpfx;
    }
    if (bx + bs/2 > wd && pxpfx >0) {
        pxpfx = -pxpfx;
    }
    if (by - bs/2 < 0 && pxpfy<0) {
        pxpfy = -pxpfy;
    }
    if (by + bs/2 > canvas.height && pxpfy>0) {
        pxpfy = -pxpfx;
    }

}
function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}