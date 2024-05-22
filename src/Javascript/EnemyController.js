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
    crurrentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    dafaultXVelocity = 1;
    dafaultYVelocity = 1;
    moveDownTimerDefault =30;
    moveDownTimer = this.moveDownTimerDefault;
    fireBulletTimerDegault = 100;
    fireBullet = this.fireBulletTimerDegault;

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
}