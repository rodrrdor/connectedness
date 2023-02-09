const FPS = 60;
var cnv, ctx;
var mouse, points = [10], start = 1, finished = false;
var colors = ["red", "yellow", "lime", "cyan", "blue", "magenta"];

window.onload = function() {
    cnv = document.getElementById("canvas");
    ctx = cnv.getContext("2d");
    window.addEventListener("mousedown", mousedown);
    window.addEventListener("keydown", (e) => {if (e.code == "Space") {finished = true;};});
    setInterval(main, 1000 / FPS);
};
function main() {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    draw();
};
function mousedown(e) {
    mouse = {x: e.clientX, y: e.clientY};
    let point = {x: mouse.x, y: mouse.y, r: 10};
    points.push(point);
};
function draw() {
    let color = 0;
    for (let point = start; point < points.length - 1; point++) {
        if (color >= colors.length) {color = 0;};
        ctx.strokeStyle = colors[color++];
        ctx.beginPath();
        ctx.moveTo(points[point].x, points[point].y);
        ctx.lineTo(points[point + 1].x, points[point + 1].y);
        if (finished && point == points.length - 2) {
            ctx.stroke();
            ctx.strokeStyle="white";
            ctx.beginPath();
            ctx.moveTo(points[point + 1].x, points[point + 1].y);
            ctx.lineTo(points[start].x, points[start].y);
        };
        ctx.stroke();
    };
    color = 0;
    for (let point = start; point < points.length; point++) {
        if (color >= colors.length) {color = 0;};
        ctx.strokeStyle = colors[color];
        ctx.fillStyle = colors[color++];
        ctx.beginPath();
        ctx.arc(points[point].x, points[point].y, points[0], 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
};};