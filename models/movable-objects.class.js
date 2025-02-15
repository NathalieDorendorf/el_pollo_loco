class MovableObjects {
    x = 50;
    y = 220;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    // offsetY;
    offset = {
        top: 0, // 120
        bottom: 0, // 30
        left: 0, // 40
        right: 0 // 30
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 180;
    }

    jump() {
        this.speedY = 20;
    }

    isColliding(object) {
        return (this.x + this.width) >= object.x && // von rechts zum gegner
            this.x <= (object.x + object.width) && // von links zum gegner
            (this.y + this.height) >= object.y &&  // von oben zum gegner
            this.y <= (object.y + object.height); // von unten zum gegner
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
    }

    isDead() {
        return this.energy == 0;
    }
}


// return (this.x + this.width) >= object.x && this.x <= (object.x + object.width) &&
//     (this.y + this.offsetY + this.height) >= object.y &&
//     (this.y + this.offsetY) <= (object.y + object.height);      
//     }

