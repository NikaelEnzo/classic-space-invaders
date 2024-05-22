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

    collideWithWalls() {
        if(this.x < 0) {
            this.x = 0;
        }
        if(this.x > this.canvas.withis - this.width) {
            this.x = this.canvas.withis - this.width;
        }

        keydow = (event) => {
            if(event.code == "ArrowRight") {
                this.rightPressed = true;
            }
            else if(event.code == "ArrowLeft") {
                this.leftPressed = true;
            }
            else if(event.code == "Space") {
                this.shootPressed = true;
            }
        }

        keyup = (event) => {
            if(event.code == "ArrowRight") {
                this.rightPressed = false;
            }
            else if(event.code == "ArrowLeft") {
                this.leftPressed = false;
            }
            else if(event.code == "Space") {
                this.shootPressed = false;
            }
        }
    }
}