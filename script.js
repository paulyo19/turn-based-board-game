var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function Player(name, score, player, weapon, damage) {
    this.name = name;
    this.score = score;
    this.player = player;
    this.weapon = weapon;
    this.damage = damage;
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
let player1 = new Player('Batman', 100, 'player1', '', 0);
let player2 = new Player('Joker', 100, 'player2', '', 0);
let player1State = new State('src/batman.jpg');
let player2State = new State('src/joker.jpg');

