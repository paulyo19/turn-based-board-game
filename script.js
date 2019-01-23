
class Stage {
    constructor(){
        this.tileSize = 37;
        this.map = [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],    
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]   
        ];
    }
    draw(ctx) {
        this.map.forEach((row, y) => {
        row.forEach((id, x) => {
            let xpos = x * this.tileSize;
            let ypos = y * this.tileSize;
            ctx.save();
            ctx.beginPath();
            ctx.strokeRect(xpos, ypos, this.tileSize, this.tileSize);
            ctx.fillStyle = id ? "white" : "grey";
            ctx.fillRect(xpos, ypos, this.tileSize, this.tileSize);
            ctx.stroke();
            ctx.restore();

        });
        });
    }
}


class App {
    constructor() {
        console.log("Canvas Tiles");
        let canvas = document.createElement("canvas");
        let stage = new Stage();
        canvas.width = stage.tileSize * stage.map[0].length;
        canvas.height = stage.tileSize * stage.map.length;
        document.body.appendChild(canvas);
        let ctx = canvas.getContext("2d");
        stage.draw(ctx);
    }
}
new App();


var Player = {
init: function (name, score, weapon, damage) {
    this.name = name;
    this.score = score;
    this.weapon = weapon;
    this.damage = damage;
}
};


var player1 = Object.create(Player);
player1.init("batman", 100, "rifle", 10);

var player2 = Object.create(Player);
player2.init("joker", 100, "rifle", 10);

// console.log(player1);
// console.log(player2);

var Weapons = {
init: function (type, value) {
    this.type = type;
    this.value = value;
 }
};


var rifle = Object.create(Weapons);
rifle.init("rifle", 10);

var laser = Object.create(Weapons);
laser.init("laser", 20);

var gatling = Object.create(Weapons);
gatling.init("gatling", 30);

var tank = Object.create(Weapons);
tank.init("tank", 40);

var apache = Object.create(Weapons);
apache.init("apache", 50);

// console.log(rifle);
// console.log(laser);
// console.log(gatling);
// console.log(tank);
// console.log(apache);












