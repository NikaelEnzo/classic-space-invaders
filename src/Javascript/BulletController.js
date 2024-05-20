class BulletController {
    bullets = [];
    timeTillNextBulletAllowed = 0;

    constructor(canvas, maxBulletAtAtime, bulletColor, soundEnabled) {
        this.canvas = canvas;
        this.maxBulletAtAtime = maxBulletAtAtime;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;
    
        this.bulletSound = new Audio("src\assets\sounds\shoot.wav")
        this.bulletSound.volume = 0.1;
    }

    draw(ctx) {
        this.bullets = this.bullets.filter((bullet) => bullet.width > 0 && bullet.y <= this.canvas.height);

        this.bullets.forEach((bullet) => bullet.draw(ctx));
        
        if(this.timeTillNextBulletAllowed > 0) {
            this.timeTillNextBulletAllowed--;
        }
    }
}