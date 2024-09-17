function Bird() {
  var graphicsUp = loadImage("assets/images/bird_up.png");
  var graphicsDown = loadImage("assets/images/bird_down.png");

  this.x = width;
  this.y = random(100, height - 200);

  this.width = birdWidth;
  this.height = birdHeight;

  this.wiggle = birdWiggle;

  this.update = function () {
    this.x -= movementSpeed;
    this.y += sin(frameCount / this.wiggle) * 0.5;
  };

  this.show = function () {
    var graphics = int(frameCount / 10) % 2 == 0 ? graphicsUp : graphicsDown;
    image(graphics, this.x, this.y, this.width, this.height);
  };

  this.offscreen = function () {
    return this.x < 0;
  };

  this.hits = function (pipe) {
    if (this.x < pipe.x + pipe.thickness && this.x + this.width > pipe.x)
      if (
        this.y < pipe.cutPos ||
        this.y + this.height > pipe.cutPos + pipe.cutSize
      )
        return true;

    return false;
  };
}
