//առաջին 10 տողը նույնությամբ գրիր, որպեսզի լոկալհոստ ունենաս
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

//10

//քո սկրիպտ ֆայլից տպի մատրիցդ գեներացնոլու հատվածը և դատարկ զանգվածը
// ինձ մոտ այն չի գեներացվում,,,քեզ մոտ լաաաավ կլինի , որ գեներացվի

let matrix = [];
let side = 10;

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


//այստեղ քո պատրաստի թվերով լցված զանգվածը ուղարկում ես կլիենտին:
//սոքեթի emit մեթոդը թույլ է տալիս առաջին արգումենտով ստեղծել իվենթի անունը, 
//2-րդ արգումենտով ուղղարկել տվյալը, այն ինչ ուզում ես ուղարկել

    io.sockets.emit('send matrix', matrix)
    
// հիմա գնա կլիենտի ֆայլ

//.........................................լոադինգ

//եթե գնացիր ու ամենինչ գրեցիր, արի էստեղ, դեռ անելիք ունենք

//էստեղ բեր քո գազանիկների դատարկ զանգվածները
    

    //քանի որ քո կլասս-երը արդեն մոդուլներ են և ոչ մի կապ չունեն html ֆայլիդ հետ՝
    //այլ աշխատում են սերվերի վրա:
    //Դու պետք է նրանց իմպորտ անես: Ինձ մոտ նրանք երկուսն են, քեզ մոտ ավելի շատ
     Xot = require("./Xot")
     Xotaker = require("./Xotaker")
     gish = require("./gish")
     killer = require("./killer")
     antar = require("./antar")
     gyux = require("./gyux")
     gom = require("./gom")
     amk = require("./amk")
     amkamk = require("./amkamk")   
    //Այժմ լցնենք մատրիցը օբյեկտներով
    //սարքի մի հատ ֆունկցիա օրինակ createObject անունով
    //և էստեղ բեր քո սկրիպտ ֆայլի օբյեկտներով լցնող հատվածը
    function createObject(matrix) {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    var gr = new xot(x, y, 1);
                    grassArr.push(gr)
                }
                else if (matrix[y][x] == 2) {
                    var grEater = new xotaker(x, y, 2);
                    grassEaterArr.push(grEater)

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
        // և կրկին ուղարկի կլիենտիդ: 
        //չմոռանաս , որ emit-ը տվյալ ուղարկողն է, իսկ on-ը ստացողը և կատարողը
        //այս դեպքում 2-րդ արգումենտը տվյալն է
        io.sockets.emit('send matrix', matrix)


    }


    //հիմա անցնենք նրանց վայրենի գործունեությանը
    //որևէ անունով կոչիր ֆունկցիադ և մեջը դիր մեթոդների հատվածը:

    function game() {
        for (var i in xotArr) {
            xotArr[i].mul()
        }
        for (var i in xotakerArr) {
            xotakerArr[i].eat();
            xotakerArr[i].move();
            xotakerArr[i].mul();
            xotakerArr[i].die();
        }
        for (var i in gishArr){
            gishArr[i].mul();
            gishArr[i].die();
            gishArr[i].move();
            gishArr[i].eat();
        }
        for (var i in killerArr){
            killerArr[i].eat();
            killerArr[i].mul();
            killerArr[i].die();
            killerArr[i].move();
        }
        for (var i in antarArr){
            antarArr[i].die();
            antarArr[i].mul();
        }
        for (var i in gyuxArr){
            gyuxArr[i].die();
            gyuxArr[i].mul();
        }
        for (var i in gomArr){
            gomArr[i].die();
            gomArr[i].mul();
        }
        for (var i in posArr){
            posArr[i].eat();
        }
        for (var i in amkArr){
            amkArr[i].die();
            amkArr[i].eat();
            amkArr[i].move();
        }
        for (var i in amkamkArr){
            amkamkArr[i].die();
            amkamkArr[i].mul();
            }
        



        //այո, դու ճիշտ ես տեսնում, կրկին և կրկին
        io.sockets.emit("send matrix", matrix);
    }

    //մեր խաղի շարժը լինելու է 1 վարկյանը մեկ
    setInterval(game, 1000)
    


      // մինչև այժմ մենք ինքներս էինք դնում իվենթների անուննները, 
      //օրինակ send matrix կամ ըըը... էլ չկա :D
      // էստեղ connection պատրասի իվենթի անուն է, որը աշխատում է այն ժամանակ, 
      //երբ որևէ մեկը աշխատացնում է սերվերը՝ մտնում է սերվեր
      //և մենք դեռ չէինք կանչել createObject ֆունկցիան
      // էստեղ կկանչենք )))
io.on('connection', function (socket) {
    createObject(matrix)
})

//դե ինչ այսօր այսքանը:

//ինձ համար շատ կարևոր է , որ հենց դու շատ լավ հասկանաս էս 
//ամենը ու լինես լավագույնը քո ընտրած ոլորտում:



//Գիտեմ, որ լիիիիիքը սխալ կա մեջը: Դուք ճիշտը գրեք :PPPPP