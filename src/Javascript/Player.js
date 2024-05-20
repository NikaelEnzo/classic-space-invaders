export default class Player {
    rightPressed = false;
    leftPressed = false;
    shootPressed = false;

    constructor(canvas, velocity, bulletController) {
        this.canvas = canvas;
        this.velocity = velocity;
        this.bulletController = bulletController;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 50;
        this.width = 50;
        this.height = 48;
        this.image = new Image();
        this.image.src = "./src\assets\images\player.png";
    }

    move() {
        if(this.rightPressed) {
            this.x += this.velocity;
        } else if(this.leftPressed) {
            this.x += -this.velocity;
        }
    }
}