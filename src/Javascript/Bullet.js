export default class Bullet {
    constructor(canvas, x, y, velocity, bulletColor) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bulletColor = bulletColor;
    
        this.whidth = 5
        this.height = 20
    }
    draw(ctx) {
        this.y -= this.velocity;
        ctx.fillStyle = this.bulletColor;
        ctx.fillRect(this.x, this.y, this.whidth, this.height);
    }
    collideWith(sprite) {
        if (
            this.x + this.whidth > sprite.x &&
            this.x < sprite.x + sprite.width &&
            this.y + this.height > sprite.y &&
            this.y < sprite.y + sprite.height 
        ) {
            return true;
        } else {
            return false;
        }
    }
}