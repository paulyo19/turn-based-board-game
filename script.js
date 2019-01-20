
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

function Player(name, score, damage, weapon) {
    this.name = name;
    this.score = score;
    this.damage = damage;
    this.weapon = weapon;
}

Player.prototype.add = function () {
    addItem(this.player);
};

function State(active, notActive, attack, win, dead) {
    this.active = active;
    this.notActive = notActive;
    this.attack = attack;
    this.win = win;
    this.dead = dead;
}

//Creates the players
let player1 = new Player('Batman', 100, 'player1', 0, "");
let player2 = new Player('Joker', 100, 'player2', 0, "");
let player1State = new State('src/batman.jpg');
let player2State = new State('src/joker.jpg');

