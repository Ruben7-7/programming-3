var socket = io();
socket.on('matrix update', nkarel)

let matrix = [];
let side = 10;

function setup() {
    matrixGenerator(80, 1500, 80, 30, 50, 5, 5, 3, 1, 2, 2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('grey');
}
function nkarel() {
    var matrix = data.matrix; 
    console.log(matrix);
    for (let y = 0; y < matrix.length; y++) {
        const element = matrix[y];
        for (let x = 0; x < element.length; x++) {

            if (matrix[y][x] == 1) {
                fill('green')
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('blue')
            }
            else if (matrix[y][x] == 5) {
                fill('#5fe164')
            }
            else if (matrix[y][x] == 6) {
                fill('#924d5f')
            }
            else if (matrix[y][x] == 7) {
                fill('#d2522f')
            }
            else if (matrix[y][x] == 11) {
                fill('black')
            }
            else if (matrix[y][x] == 15) {
                fill('white')
            }
            else if (matrix[y][x] == 16) {
                fill('pink')
            }
            else {
                fill('grey')
            }
            rect(x * side, y * side, side, side)
        }
    }
}

function lightningEvent() {
    socket.emit('lightningEvent');
}

