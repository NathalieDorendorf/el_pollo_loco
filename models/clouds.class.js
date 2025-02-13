class Clouds extends MovableObjects {
    height;
    width;
    speed = 0.15;

    IMAGES_CLOUD = [
        'assets/img/5_background/layers/4_clouds/1.png',
        'assets/img/5_background/layers/4_clouds/2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_CLOUD[0]);
        this.loadImages(this.IMAGES_CLOUD);

        this.x = 100 + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_CLOUD);
        }, 250);
    }
}