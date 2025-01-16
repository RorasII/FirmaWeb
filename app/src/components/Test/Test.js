let prdel = 1;
let prewTime = 0;
let currTime = 0;
let deltaTime = 0;
/** @type {CanvasRenderingContext2D} */
/** @type {HTMLCanvasElement} */

let x = 30;
let y = 30;
let size = 15;
let vector = { x: 10, y: 10 };

export function drawSomething(canvas, ctx, time) {
  currTime = time;
  deltaTime = (currTime - prewTime) * 0.001;
  console.log(x);
  if (!ctx) return;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  console.log(`x: ${x}, y: ${y}, vector.x: ${vector.x}, vector.y: ${vector.y}`);
  Move();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  function Move() {
    x += vector.x * deltaTime;
    y += vector.y * deltaTime;
  }

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
