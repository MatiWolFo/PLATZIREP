//getelementbyid is a method that brings an HTML document by its ID, it is a string
var textVal = document.getElementById("text_lines");
var button = document.getElementById("ok_button");
//agrega al boton un escuchador para que dispare la funcion cuando el evento ocurra, afecta el button
//CUANDO EL CLICK OCURRE, DISPARA LA FUNCION
button.addEventListener("click", dibujoPorClick);

/* 
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
*/

//FUNCION PARA AUTOMATIZAR EL TRAZADO DE LINEAS, UNA FUNCION NO LLEVA ;
function sketchLine(colour, startX, startY, endX, endY) {
    canvas.beginPath();
    canvas.strokeStyle = colour;
    canvas.moveTo(startX, startY);
    canvas.lineTo(endX, endY);
    canvas.stroke();
    canvas.closePath();
}

//getelementbyid is a method that brings a document by its ID, it is a string
var s = document.getElementById("sketch");
//Sets the context for the canvas from the var 's', can be 2d or 3d, it is a string
var canvas = s.getContext("2d");
var ancho = s.width;

function dibujoPorClick() {
    //PARSEINT CONVIERTE STRING A NUMERO
    var x = parseInt(textVal.value);
    var lines = x;
    var l = 0;
    var yS;
    var xE;
    var colour1 = "black";
    var colour2 = "red";
    //VAR PARA CALCULAR EL ESPACIO ENTRE LINEAS SEGUN INPUT
    var espacio = ancho / lines;
    //PARA ITERAR LA VARIABLE 
    for (var l = 0; l <= lines; l++) {
        xE = espacio * l;
        yS = espacio * l;
        sketchLine(colour1, 0, yS, xE, 200);
        console.log("Line " + l);
    }
    for (var l = 0; l <= lines; l++) {
        xE = espacio * l;
        yS = espacio * l;
        sketchLine(colour2, 200, yS, xE, 0);
        console.log("Line " + l);
    }
    //PARA LLAMAR A LA FUNCION
    sketchLine;
}