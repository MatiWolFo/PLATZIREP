//getelementbyid is a method that brings a document by its ID, it is a string
var s = document.getElementById("sketch");
//Sets the context for the canvas from the var 's', can be 2d or 3d, it is a string
var canvas = s.getContext("2d");
console.log(canvas);
//Starts the sketch
canvas.beginPath();
//var 'canvas' feature to set the colour of the line, it is a string
canvas.strokeStyle = "red";
//Moves to the starting point of the line
canvas.moveTo(0, 0);
//Moves to the final point of the line
canvas.lineTo(1, 1);
//Executes the line or stroke
canvas.stroke();
//Finishes the sketch
canvas.closePath();

//Creating a function will automatise the canvas sketch, remember functions do not need ;
function sketchLine(colour, startX, startY, endX, endY) {
    canvas.beginPath();
    canvas.strokeStyle = colour;
    canvas.moveTo(startX, startY);
    canvas.lineTo(endX, endY);
    canvas.stroke();
    canvas.closePath();
}
//To call the function, remember the colours are strings
//Each line calls the function to draw a star line
//WHILE or FOR not applied yet
sketchLine("black", 200, 0, 250, 150);
sketchLine("black", 250, 150, 400, 150);
sketchLine("black", 400, 150, 280, 240);
sketchLine("black", 280, 240, 320, 400);
sketchLine("black", 320, 400, 200, 300);
sketchLine("black", 200, 300, 80, 400);
sketchLine("black", 80, 400, 120, 240);
sketchLine("black", 120, 240, 0, 150);
sketchLine("black", 0, 150, 150, 150);
sketchLine("black", 150, 150, 200, 0);