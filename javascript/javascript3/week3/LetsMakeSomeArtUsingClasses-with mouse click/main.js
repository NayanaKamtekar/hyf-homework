const canvas = document.getElementById('canvas');
class Circle {
    constructor(x, y, r, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
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


canvas.addEventListener('mousedown', (e) => {
    let randomR = getRandomArbitrary(10, 50);
    let colorR = getRandomArbitrary(0, 255);
    let colorG = getRandomArbitrary(0, 255);
    let colorB = getRandomArbitrary(0, 255);
    let xOffset = document.getElementsByTagName('canvas')[0].offsetLeft;
    // let yOffset = document.getElementsByTagName('canvas')[0].offsetTop;
    // console.log(yOffset);

    let c1 = new Circle(e.clientX - xOffset, e.clientY, randomR, 'rgb(' + colorR +',' + colorG + ',' + colorB +')');
    c1.draw();  
});


var heightRatio = 1;
canvas.height = canvas.width * heightRatio;
 
