let particleCount = 100;
let prewTime = 0;
let currTime = 0;
let deltaTime = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let particles = [];
let particlesMade = false;
let resizeCanvas = true;
/** @type {CanvasRenderingContext2D} */
/** @type {HTMLCanvasElement} */

export function drawSomething(canvas, ctx, time) {
  if (resizeCanvas == true) {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    canvasWidth = ctx.canvas.width;
    canvasHeight = ctx.canvas.height;
    resizeCanvas = false;
  }
  currTime = time;
  deltaTime = (currTime - prewTime) * 0.001;

  if (!ctx) return;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  class Particle {
    constructor(id) {
      // Setting id by it's index in the array
      this.id = id;

      // Calculating starting position
      let dx = Math.random() * 200 - 100;
      let dy = Math.random() * 200 - 100;

      this.x = canvasWidth * 0.5 + dx;
      this.y = canvasHeight * 0.5 + dy;

      // this.x = canvasWidth * 0.5;
      // this.y = canvasHeight * 0.5;

      // Calculating starting size and mass
      this.size = Math.floor(Math.random() * 7) + 8;
      this.mass = Math.PI * this.size * this.size;

      // Calculating starting vector
      let direction = Math.floor(Math.random() * 360);
      let speed = Math.floor(Math.random() * 70) + 10;

      let vx = Math.cos(direction) * speed;
      let vy = Math.sin(direction) * speed;

      this.vector = { x: vx, y: vy };

      // Calculating starting styling
      this.strokeColor = "white";
      this.fillColor = "rgba(255,255,255,0.15)";
      this.lineWidth = 1;
    }

    move() {
      if (!isNaN(deltaTime)) {
        this.x += this.vector.x * deltaTime;
        this.y += this.vector.y * deltaTime;
      }
    }

    draw() {
      ctx.fillStyle = this.fillColor;
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.strokeStyle = this.strokeColor;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    checkParticleCollision() {
      particles.forEach((particle) => {
        if (this.id != particle.id) {
          let dx = this.x - particle.x;
          let dy = this.y - particle.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < this.size + particle.size) {
            this.staticParticleCollision(distance, particle);
            this.dynamicParticleCollision(particle);
          }
        }
      });
    }

    staticParticleCollision(distance, particle) {
      // Calculatin overlap if particles
      let overlap = 0.6 * (distance - this.size - particle.size);
      if (overlap >= 0) console.log(overlap);

      // Moving itself
      this.x -= (overlap * (this.x - particle.x)) / distance;
      this.y -= (overlap * (this.y - particle.y)) / distance;

      // Moving the other particle
      particle.x += (overlap * (particle.x - particle.x)) / distance;
      particle.y += (overlap * (particle.y - particle.y)) / distance;
    }
    dynamicParticleCollision(particle) {
      let dx = this.x - particle.x;
      let dy = this.y - particle.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      // console.log("Mass1:", this.mass, "Mass2:", particle.mass, "Distance:", distance, "Overlap:", distance - this.size - particle.size);
      // console.log("Before:", this.vector.x, this.vector.y, particle.vector.x, particle.vector.y);
      let nx = (particle.x - this.x) / distance;
      let ny = (particle.y - this.y) / distance;

      let tx = -ny;
      let ty = nx;

      let dpTan1 = this.vector.x * tx + this.vector.y * ty;
      let dpTan2 = particle.vector.x * tx + particle.vector.y * ty;

      let dpNorm1 = this.vector.x * nx + this.vector.y * ny;
      let dpNorm2 = particle.vector.x * nx + particle.vector.y * ny;

      let m1 = (dpNorm1 * (this.mass - particle.mass) + 2 * particle.mass * dpNorm2) / (this.mass + particle.mass);
      let m2 = (dpNorm2 * (particle.mass - this.mass) + 2 * this.mass * dpNorm1) / (this.mass + particle.mass);

      this.vector.x = tx * dpTan1 + nx * m1;
      this.vector.y = ty * dpTan1 + ny * m1;
      particle.vector.x = tx * dpTan2 + nx * m2;
      particle.vector.y = ty * dpTan2 + ny * m2;
      // console.log("After:", this.vector.x, this.vector.y, particle.vector.x, particle.vector.y);

      // let kx = this.vector.x - particle.vector.x;
      // let ky = this.vector.y - particle.vector.y;

      // let p = (2 * (nx * kx + ny * ky)) / (this.mass + particle.mass);

      // this.vector.x = this.vector.x - p * particle.mass * nx;
      // this.vector.y = this.vector.y - p * particle.mass * ny;
      // particle.vector.x = particle.vector.x + p * this.mass * nx;
      // particle.vector.y = particle.vector.y + p * this.mass * ny;
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
      this.checkParticleCollision();
      this.checkBorder();
      this.draw();
    }
  }

  if (particlesMade == false) {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(i));
    }
    particlesMade = true;
  }

  particles.forEach((particle) => particle.update());
  prewTime = currTime;
}
