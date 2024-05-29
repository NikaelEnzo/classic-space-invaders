import EnemyController from "./EnemyController";
import BulletController from "./BulletController";
import Player from "./Player";

const canvas = document.createElement('game');
const ctx = canvas.getContext('2d'); // 2d context

canvas.width = 600;
canvas.height = 600;

const background = new image();
background.src = "./src/assets/images/space.png"

const playerBulletController = new BulletController(canvas, 10, "twite", true);
const enemyBulletController = new BulletController(canvas, 4, "red", false);

const enemyController = new EnemyController(
    canvas, 
    enemyBulletController,
    playerBulletController
);

const player = new Player(canvas, 3, playerBulletController)

let isGameOver = false;
let didWin = false;

function checkGameOver() {
    if(isGameOver) {
        return;
    }

    if(enemyBulletController.collideWith(player)) {
        isGameOver = true;
    }

    if(enemyController.collideWith(player)) {
        isGameOver = true;
    }

    if(enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }   
}

function displayGameOver() {
    if(isGameOver) {
        let text = didWin ? " Você Ganhou" : "Gamer Over";
        let textOFFset = didWin ? 5 : 3.6;
        ctx.fillStyle = "white" ;
        ctx.font = "35px 'Press Start 2P'";
        ctx.fillText(text, canvas.width / textOFFset, canvas.height / 2);
    }
}