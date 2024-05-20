export default class Enemy {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.imageNumber = imageNumber;
        this.whidth = 44;
        this.height = 32;
        this.image = new Image();
        this.image.src = `./src/assets/images/enemy${imageNumber}.png`;
    }
}