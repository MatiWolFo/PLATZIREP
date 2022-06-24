//COLECCION DE VARIABLES {};
var teclas = {
    Wkey: 87,
    Skey: 83,
    Akey: 65,
    Dkey: 68
};

//KEYUP DETECTA EL EVENTO CUANDO LA TECLA DEJA DE SER PRESIONADA, KEYDOWN DETECTA MIENTRAS SE MANTENGA PULSADO
document.addEventListener("keydown", dibujarTeclado);
var lienzoDibujo = document.getElementById("areaCanvas");
var papel = lienzoDibujo.getContext("2d");
var x = 150;
var y = 150;

//FUNCION PARA AUTOMATIZAR EL TRAZADO DE LINEAS, UNA FUNCION NO LLEVA ;
function sketchLine(colour, startX, startY, endX, endY, canvas) {
    canvas.beginPath();
    canvas.strokeStyle = colour;
    canvas.lineWidth = 5;
    canvas.moveTo(startX, startY);
    canvas.lineTo(endX, endY);
    canvas.stroke();
    canvas.closePath();
}

function dibujarTeclado(evento) {
    //ESTE KEYCODE DETECTA EL ID DE LA TECLA PRESIONADA
    console.log(evento.keyCode);
    var colorcito = "black";
    var movimiento = 1;
    switch (evento.keyCode) {
        case teclas.Wkey:
            console.log("ARRIBA");
            sketchLine(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.Skey:
            console.log("ABAJO");
            sketchLine(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.Akey:
            console.log("IZQUIERDA");
            sketchLine(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.Dkey:
            console.log("DERECHA");
            sketchLine(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            console.log("TECLA NO RECONOCIDA");
            break;
    }


}