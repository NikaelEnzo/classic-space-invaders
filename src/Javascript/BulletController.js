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
}