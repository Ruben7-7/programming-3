var grassArr = []; //խոտերի զանգված
var eatersArr = []; //խոտակերների զանգված
var gishatichArr = [];
var JurArr = [];
var qarArr = [];
var zukArr = [];
var side = 20;
var matrix = [
    [5, 5, 0, 0, 0, 0, 0, 4, 3, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0, 0],
    [5, 5, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 1, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 3, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 2, 4, 4, 3, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 2, 0, 1, 4, 1, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 3, 0, 4, 4, 4, 1, 0, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 4, 1, 0, 0, 0],
    [0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 3, 0, 0, 1, 4, 1, 0, 0, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0],
    [5, 0, 0, 0, 0, 5, 0, 4, 0, 3, 1, 0, 0, 2, 0, 1, 0, 0, 0, 1, 2, 0, 0, 2, 0, 1, 0, 0],
    [5, 5, 6, 6, 5, 5, 0, 4, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 2, 4, 0, 0],
    [0, 5, 6, 5, 5, 0, 0, 4, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 2, 4, 0, 0],
    [5, 5, 5, 5, 0, 0, 0, 4, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 2, 4, 0, 0]
]

function setup() {
    noStroke();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); //կանվասի չափերը դնել մատրիցի չափերին համապատասխան
    background('#acacac');

    //մատրիցի վրա կրկնակի ցիկլը լցնում է խոտերի, խոտակերների զանգվածները օբյեկտներով 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }

            else if (matrix[y][x] == 2) {
                var eater = new GrassEater(x, y);
                eatersArr.push(eater);
            }

            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y);
                gishatichArr.push(gish);
            }

            else if (matrix[y][x] == 4) {
                var qaro = new qar(x, y);
                qarArr.push(qaro);
            }
            else if (matrix[y][x] == 5) {
                var juro = new Jur(x, y);
                JurArr.push(juro);
            }
            else if (matrix[y][x] == 6) {
                var zuko = new Zuk(x, y);
                zukArr.push(zuko);
            }
        }
    }
}

function draw() {
    //գծում է աշխարհը
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill("brown");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 6) {
                fill("black");
                rect(j * side, i * side, side, side);
            }
            
        }
    }
    if(grassArr.length==0){
        var i = Math.floor(Math.random()*(matrix.length));
        var j = Math.floor(Math.random()*(matrix.length));
        var grass = new Grass(i,j);
        grassArr.push(grass);
    }

    // while(eaterArr.length > 20){
    //     eatersArr[1].die()
    // }

    //խոտը բազմանում է
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in JurArr) {
        JurArr[i].mul();
    }

    //խոտակերը ուտում է խոտ
    for (var i in eatersArr) {
        eatersArr[i].eat();
    }
    
    for (var i in zukArr) {
        zukArr[i].eat();
    }
    
    for (var i in gishatichArr) {
        gishatichArr[i].eat();

    }

    // for (var i in qarArr) {
    //     qarArr[i].die();
    // }
}


