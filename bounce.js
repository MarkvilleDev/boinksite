const FPS = 60;
var bs = 15;
var bx, by;

var pxpfx, pxpfy;
var canvas, context;
var wd, ht;
var audios = [];

canvas = document.getElementById("bg");
context = canvas.getContext("2d");

function genrandom() {
    var ans = Math.floor(Math.random()*6);
    return ans;
}

setInterval(update, 1000 / FPS);
bx = canvas.width /2;
by = canvas.height /2;

pxpfx = Math.floor(Math.random()*500+10) / FPS;
pxpfy = Math.floor(Math.random()*500+10) / FPS;

if (Math.floor(Math.random() *2) == 0) {
    pxpfx = -pxpfx;
}
if (Math.floor(Math.random() *2) == 0) {
    pxpfy = -pxpfy;
}
// function playAudio() {
//     const media = this.videoplayer.nativeElement;
//     media.muted = true;
//     media.play();
// }
// function init() {
//     audios = [
//         new Audio("one.mp3"),
//         new Audio("two.mp3"),
//         new Audio("three.mp3"),
//         new Audio("four.mp3"),
//         new Audio("five.mp3"),
//         new Audio("six.mp3")
//     ]
// }
function update() {
    init();
    bx += pxpfx;
    by += pxpfy;
    context.canvas.width = document.documentElement.clientWidth;
    context.canvas.height = document.documentElement.clientHeight;
    context.fillStyle = "#2f4672";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    wd = context.canvas.width;
    ht = context.canvas.height;
    context.fill();
    context.lineWidth = 15;
    context.strokeStyle = "white";
    context.arc(bx - bs/2,by - bs/2,bs/2, 0,2*Math.PI);
    context.stroke();

    if (bx-bs/2 < 0 && pxpfx<0) {
        pxpfx = -pxpfx;
        // audios[genrandom()].play();
    }
    if (bx + bs/2 > wd && pxpfx >0) {
        pxpfx = -pxpfx;
        // audios[genrandom()].play();
    }
    if (by - bs/2 < 0 && pxpfy<0) {
        pxpfy = -pxpfy;
        // audios[genrandom()].play();
    }
    if (by + bs/2 > ht && pxpfy>0) {
        pxpfy = -pxpfy;
        // audios[genrandom()].play();
    }
}