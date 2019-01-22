import { ipcRenderer, IpcRenderer } from "electron";
import { Player } from "../src/Player";
import { Rect } from "../src/Rect";

var canvas = <HTMLCanvasElement> document.getElementById("canvas-leaderboard");
var button = document.getElementById("button-update");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var rect = new Rect(0,0, window.innerWidth, window.innerHeight);
rect.DrawFill(ctx);

console.log(canvas);
createRects();


button.addEventListener("click", function() {
    console.log("Click");
    ipcRenderer.send('give-me-players');
});

ipcRenderer.on("update-players", function(sender : BroadcastChannel, players : Player[]) {
    console.log(sender.name);
    console.log("Players", players);
});

function createRects()
{

}

window.addEventListener("resize", function(){
    resizeCanvas()
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}