import Ball from "./ball";

const ball = new Ball(document.getElementById("ball"));

let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    ball.update(delta);
    console.log(delta);
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
