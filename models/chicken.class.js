class Chicken extends MovableObjects {
    y = 330;
    
    IMAGES_CHICKEN = [
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_CHICKEN_DEAD = [
        'assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    IMAGES_CHICKEN_SMALL = [
        'assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    IMAGES_CHICKEN_SMALL_DEAD = [
        'assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_CHICKEN[0]);
        this.loadImages(this.IMAGES_CHICKEN);
        this.loadImages(this.IMAGES_CHICKEN_DEAD);
        this.loadImages(this.IMAGES_CHICKEN_SMALL);
        this.loadImages(this.IMAGES_CHICKEN_SMALL_DEAD);

        this.x = 400 + Math.random() * 700; 
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_CHICKEN);
        }, 250);
    }
}