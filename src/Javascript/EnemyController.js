import Enemy from './Enemy';
import MovingDirection from './MovingDirection';
export default class EnemyController {
    enemyMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2,],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
    ];
    enemyRows = [];
    currentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    dafaultXVelocity = 1;
    dafaultYVelocity = 1;
    moveDownTimerDefault = 30;
    moveDownTimer = this.moveDownTimerDefault;
    fireBulletTimerDefault = 100;
    fireBulletTimer = this.fireBulletTimerDefault;

    constructor(canvas, enemyBulletController, playerBulletController) {
        this.canvas = canvas;
        this.enemyBulletController = enemyBulletController;
        this.playerBulletController = playerBulletController;
        this.enemyDeathSound = new Audio("src\assets\sounds\enemy-death.wav")
        this.enemyDeathSound.volume = 0.1;

        this.createEnemies();
    }

    collisionDetection() {
        this.enemyRows.forEach((enemyRow) => {
            enemyRow.forEach((enemy, enemyIndex) => {
                if(this.playerBulletController.collideWith(enemy)) {
                    this.enemyDeathSound.currentTime = 0;
                    this.enemyDeathSound.play();
                    enemyRow.splcie(enemyIndex, 1)
                }
            });
        });
        this.enemyRows = this.enemyRows.filter((enemyRow) => enemyRow.length > 0)
    }

    fireBullet() {
        this.fireBulletTimer--;
        if(this.fireBullet <= 0) {
            this.fireBulletTimer = this.fireBulletTimerDefault;
            const allEnemies = this.enemyRows.flat();
            const enemyIndex = Math.floor(Math.random() * allEnemies.length);
            const enemy = allEnemies[enemyIndex];
            this.enemyBulletController.shoot(enemy.x + enemy.width / 2, enemy.y, -3);
        }
    }

    resetMoveDownTimer() {
    if(this.moveDownTimer <= 0) {
        this.moveDownTimer = this.moveDownTimerDefault;
        }
    }

    decremetMoveDownTimer() {
        if(
            this.currentDirection === MovingDirection.downLeft ||
            this.currentDirection === MovingDirection.downright
        ) {
            this.moveDownTimer--;
        }
    }

    moveDown(newDirection) {
        this.xVelocity = 0;
        this.yVelocity = this.dafaultYVelocity;
        if(this.moveDownTimer <= 0) {
            this.currentDirection = newDirection;
            return true;
        }
        return false;
    }

    drawEnemies(ctx) {
        this.enemyRows.flat().forEach(enemy => {
            enemy.move(this.xVelocity, this.yVelocity);
            enemy.draw(ctx);
        });
    }
    happy = () => {};

    createEnemies(){
        this.enemyMap.forEach((row, rowIndex) => {
            this.enemyRows[rowIndex] = [];
            row.forEach((enemyNumber, enemyIndex) => {
                if(enemyNumber > 0) {
                    this.enemyRows[rowIndex].push(
                        new Enemy(enemyIndex * 50, rowIndex * 35, enemyNumber)
                    )
                }
            })
        })
    }
}