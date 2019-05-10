const canvas = document.getElementById('canvas');
class Circle {
    constructor(x, y, r, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        //this.startAngle = startAngle;
        //this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}


function getRandomArbitrary(min, max) {
    let a = Math.random() * (max - min) + min;
    return Math.round(a);
}

setInterval(() => {
    let randomX = getRandomArbitrary(10, 690);
    let randomY = getRandomArbitrary(10, 690);
    let randomR = getRandomArbitrary(10, 50);
    let colorR = getRandomArbitrary(0, 255);
    let colorG = getRandomArbitrary(0, 255);
    let colorB = getRandomArbitrary(0, 255);

    let c1 = new Circle(randomX, randomY, randomR, 'rgb(' + colorR +',' + colorG + ',' + colorB +')');
    c1.draw();  
}, 500);