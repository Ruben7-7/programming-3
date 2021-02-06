var express = require('express');
var app = express();
var server = require('http').createServer(app);
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
    res.redirect('index.html');
});

server.listen(3000);

io.on('connection', function (socket) {
    createObjects(matrix);
    console.log('a user connected');
    socket.on('lightningEvent', function () {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
        }
        let tiv1 = getRandomInt(0, 50);
        console.log("tiv1");
    });
    socket.on('someEvent', function () {
        console.log('some event happened on server');
        // ավելացնել լոգիկան թե մատրիցայում ինչ է տեղի ունենում ինչ որ իրադարձության ժամանակ    
    });
});

matrix = []; // Մատրիցի ստեղծում
var rows = 50; // Տողերի քանակ
var columns = 50; // Սյուների քանակ

for (var y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (var x = 0; x < columns; x++) {
        var a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 20) {
            matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
        }
        if (a >= 20 && a < 40) {
            matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
        }
        else if (a >= 40 && a < 60) {
            matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
        }
        else if (a >= 60 && a < 80) {
            matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
        }
        else if (a >= 80 && a < 99) {
            matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
        }
        else if (a >= 99 && a < 100) {
            matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
        }
    }
}


function matrixGenerator(matrixSize, xotCount, xotakerCount, gishCount, killerCount, antarCount, gyuxCount, gomCount, posCount, amkCount, amkamkCount) {
    for (let index = 0; index < matrixSize; index++) {
        matrix[index] = [];
        for (let i = 0; i < matrixSize; i++) {
            matrix[index][i] = 0;
        }
    }
    for (let index = 0; index < xotCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 1;
    }
    for (let index = 0; index < xotakerCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 2;
    }
    for (let index = 0; index < gishCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 3;
    }
    for (let index = 0; index < killerCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 4;
    }
    for (let index = 0; index < antarCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 5;
    }
    for (let index = 0; index < gyuxCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 6;
    }
    for (let index = 0; index < gomCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 7;
    }
    for (let index = 0; index < posCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 11;
    }
    for (let index = 0; index < amkCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 15;
    }
    for (let index = 0; index < amkamkCount; index++) {
        let x = Math.floor(random(0, matrixSize));
        let y = Math.floor(random(0, matrixSize));
        matrix[y][x] = 16;
    }
}


setInterval(function () {
    io.sockets.emit('matrix update', matrix);
}, 1000);

let matrix = [];

let xotArr = [];
let xotakerArr = [];
let gishArr = [];
let killerArr = [];
let antarArr = [];
let gyuxArr = [];
let gomArr = [];
let posArr = [];
let amkArr = [];
let amkamkArr = [];

io.sockets.emit('send matrix', matrix);

Xot = require("./Xot")
Xotaker = require("./Xotaker")
gish = require("./gish")
killer = require("./killer")
antar = require("./antar")
gyux = require("./gyux")
gom = require("./gom")
amk = require("./amk")
amkamk = require("./amkamk")

function createObject(matrix) {
    matrixGenerator();
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new xot(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new xotaker(x, y, 2);
                grassEaterArr.push(grEater);

            }
            else if (matrix[y][x] == 3) {
                let gish = new Gish(x, y);
                gishArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                let killer = new Killer(x, y);
                killerArr.push(killer);
            }
            else if (matrix[y][x] == 5) {
                let antar = new Antar(x, y);
                antarArr.push(antar);
            }
            else if (matrix[y][x] == 6) {
                let gyux = new Gyux(x, y);
                gyuxArr.push(gyux);
            }
            else if (matrix[y][x] == 7) {
                let gom = new Gom(x, y);
                gomArr.push(gom);
            }
            else if (matrix[y][x] == 11) {
                let pos = new Pos(x, y);
                posArr.push(pos);
            }
            else if (matrix[y][x] == 15) {
                let amk = new Amk(x, y);
                amkArr.push(amk);
            }
            else if (matrix[y][x] == 16) {
                let amks = new Amkamk(x, y);
                amkamkArr.push(amks);
            }
        }
    }
    io.sockets.emit('send matrix', matrix);
}
function game() {
    for (let index = 0; index < xotArr.length; index++) {
        xotArr[index].mul();
    }
    for (let index = 0; index < xotakerArr.length; index++) {
        xotakerArr[index].eat();
    }
    for (let index = 0; index < gishArr.length; index++) {
        gishArr[index].eat();
    }
    for (let index = 0; index < killerArr.length; index++) {
        killerArr[index].eat();
    }
    for (let index = 0; index < antarArr.length; index++) {
        antarArr[index].mul();
    }
    for (let index = 0; index < gyuxArr.length; index++) {
        gyuxArr[index].mul();
    }
    for (let index = 0; index < gomArr.length; index++) {
        gomArr[index].mul();
    }
    for (let index = 0; index < posArr.length; index++) {
        posArr[index].eat();
    }
    for (let index = 0; index < amkArr.length; index++) {
        amkArr[index].eat();
    }
    for (let index = 0; index < amkamkArr.length; index++) {
        amkamkArr[index].mul();
    }

    var sendData = {
        "matrix": matrix,
    };

    console.log(matrix);
    io.sockets.emit("data", sendData);
}

createObject();

io.on('connection', function (socket) {
    createObject(matrix);
})

for (var i = 0; i >= 1; i++) {
    if (i = 0) { setInterval(game, 1000); }
    else if (i = 1) { setInterval(game, 2000); }
}