let LivingCreature = require('./LivingCreature')

module.exports = class Gom extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.dies = 0;
        this.hashiv = 0; 
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < gomArr.length; index++) {
            if (gomArr[index].x == this.x && gomArr[index].y == this.y) {
                gomArr.splice(index, 1)
            }
        }
    }

    mul() {
        this.hashiv++;
        let newCell = random(this.chooseCell(1).concat(this.chooseCell(0)));
        if (this.hashiv > 40 && newCell) {
            let x = newCell[0];
            let y = newCell[1];
            let cnvacXotaker = new Xotaker(x, y);
            xotakerArr.push(cnvacXotaker);
            this.hashiv = 0;
        }
        if(this.dies>=800){
            this.die();
        }
    }
}