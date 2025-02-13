class Clouds extends MovableObjects {
    y = 0;
    height = 400;
    width = 720;
    speed = 0.075;

    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}