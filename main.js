canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty";
var last_posX, last_posY;
color = "black";
width_of_line = 3;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log(last_posX, last_posY);
        ctx.moveTo(last_posX, last_posY);
        console.log(currentX, currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        last_posX = currentX;
        last_posY = currentY;
    }
}