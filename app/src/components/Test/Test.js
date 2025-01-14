let prdel = 1;

export function drawSomething(ctx, time) {
  if (!ctx) return;
  prdel += 1;
  console.log(prdel);

  // Clear the canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Draw something dynamic (e.g., based on time)
  const x = (time / 10) % ctx.canvas.width; // Change position over time
  const y = (time / 10) % ctx.canvas.height; // Change position over time
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 50, 50); // Moving rectangle
}
