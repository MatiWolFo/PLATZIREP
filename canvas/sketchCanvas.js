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
sketchLine("red", 0, 0, 1, 1);

var lines = 20;
var l = 0;
var yS;
var xE;
var xS;
var yE;
var colour1 = "black";
var colour2 = "red";
var colour3 = "blue";
var colour4 = "green";
for (var l = 0; l <= lines; l++) {
    xE = 10 * l;
    yS = 10 * l;
    sketchLine(colour1, 0, yS, xE, 200);
    console.log("Line " + l);
}
for (var l = 0; l <= lines; l++) {
    xE = 10 * l;
    yS = 10 * l;
    sketchLine(colour2, 200, yS, xE, 0);
    console.log("Line " + l);
}