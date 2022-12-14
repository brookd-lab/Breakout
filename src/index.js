import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball();

new InputHandler(paddle);

ctx.fillStyle = "#00f";

paddle.draw(ctx);

let lastTime = 0;

// images

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
