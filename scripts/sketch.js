var pipe;
var birds = [];
let score = 0;
let highScore = 0;

var backgroundImage;
var ground;

let groundHeight = 80;

let birdSpawn = 0;

var gameOverScreen;
let gameOverScreenWidth = 400;
let gameOverScreenHeight = 200;

let fontRegular;

function preload() {
  gameOverScreen = loadImage("assets/images/game_over.png");
  fontRegular = loadFont("assets/fonts/04B_19.TTF");
}

function setup() {
  var canvas = createCanvas(480, 640);
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);

  backgroundImage = loadImage("assets/images/background.png");
  ground = new Ground();

  pipe = new Pipe();
}

function draw() {
  background(backgroundImage);

  fill(255);
  textFont(fontRegular);
  textSize(62);
  textStyle(BOLD);
  textAlign(CENTER);
  text(score, width / 2, 100);
  textStyle(NORMAL);
  textSize(16);
  text("HI " + highScore, width / 2, 130);

  ground.update();
  ground.show();

  pipe.show();
  pipe.update();

  if (birdSpawn <= 0) {
    birds.push(new Bird());
    birdSpawn = random(100, 200);
  }
  birdSpawn--;

  for (let i = birds.length - 1; i >= 0; i--) {
    birds[i].show();
    birds[i].update();

    if (birds[i].offscreen()) {
      birds.splice(i, 1);
      score += 1;
      if (score > highScore) highScore = score;
    }

    if (birds[i].hits(pipe)) {
      pipe.reset();
      birds = [];
      score = 0;
      birdSpawn = 0;

      image(
        gameOverScreen,
        width / 2 - gameOverScreenWidth / 2,
        height / 2 - gameOverScreenHeight / 2,
        gameOverScreenWidth,
        gameOverScreenHeight
      );

      noLoop();
      break;
    }
  }
}

function keyPressed() {
  if (key == " ") action();
}

function mousePressed() {
  if (mouseButton == LEFT) action();
}

function action() {
  pipe.lift();
  loop();
}
