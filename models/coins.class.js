class Coins extends MovableObjects {
    IMAGES_COIN = [
        'assets/img/8_coin/coin_1.png',
        'assets/img/8_coin/coin_2.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        
        this.x = 400 + Math.random() * 700; 

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 250);
    }
}