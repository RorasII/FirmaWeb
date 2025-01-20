let particleCount = 50;
let prewTime = 0;
let currTime = 0;
let deltaTime = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let particles = [];
let particlesMade = false;
/** @type {CanvasRenderingContext2D} */
/** @type {HTMLCanvasElement} */

export function drawSomething(canvas, ctx, time) {
  canvasWidth = ctx.canvas.width;
  canvasHeight = ctx.canvas.height;
  currTime = time;
  deltaTime = (currTime - prewTime) * 0.001;

  if (!ctx) return;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  class Particle {
    constructor(x, y, size, vector, strokeColor, fillColor) {
      let dx = Math.random() * 200 - 100;
      let dy = Math.random() * 200 - 100;
      this.x = 400 + dx;
      this.y = 400 + dy;
      this.size = Math.floor(Math.random() * 7) + 8;
      let vx = Math.random() * 50 + 5;
      let vy = Math.random() * 50 + 5;
      if (Math.round(Math.random())) vx *= -1;
      if (Math.round(Math.random())) vy *= -1;
      this.vector = { x: vx, y: vy };
      this.strokeColor = "white";
      this.fillColor = "black";
    }

    move() {
      if (!isNaN(deltaTime)) {
        this.x += this.vector.x * deltaTime;
        this.y += this.vector.y * deltaTime;
      }
    }

    draw() {
      ctx.fillStyle = this.fillColor;
      ctx.beginPath();
      ctx.strokeStyle = this.strokeColor;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    checkBorder() {
      if (this.x + this.size > canvasWidth || this.x - this.size < 0) {
        this.vector.x *= -1;
        if (this.x + this.size > canvasWidth) this.x = canvasWidth - this.size;
        else this.x = this.size;
      }
      if (this.y + this.size > canvasHeight || this.y - this.size < 0) {
        this.vector.y *= -1;
        if (this.y + this.size > canvasHeight) this.y = canvasHeight - this.size;
        else this.y = this.size;
      }
    }

    update() {
      this.move();
      this.checkBorder();
      this.draw();
    }
  }

  if (particlesMade == false) {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    particlesMade = true;
  }

  particles.forEach((particle) => particle.update());

  // function Prudel(time) {
  //   currTime = Math.floor((time / 1000) * 60);
  //   if (prewTime != currTime) {
  //     console.log(currTime);
  //     if (Math.floor((time / 1000) * 60) % 60 == 0) console.log("prudel");
  //   }
  //   prewTime = currTime;
  // }
  prewTime = currTime;
}
