function Pipe() {
  graphicsBody = loadImage("assets/images/pipe_body.png");
  graphicsUp = loadImage("assets/images/pipe_up.png");
  graphicsDown = loadImage("assets/images/pipe_down.png");

  this.x = 60;
  this.thickness = pipeThickness;
  this.endSize = 19;
  this.cutSize = 100;
  this.cutPos = height / 2;

  this.velocity = 0;
  this.gravity = 0.2;
  this.liftVelocity = 5;

  this.reset = function () {
    this.cutPos = height / 2;
    this.velocity = 0;
  };

  this.show = function () {
    image(graphicsBody, this.x, 0, this.thickness, this.cutPos - this.endSize);
    image(
      graphicsUp,
      this.x,
      this.cutPos - this.endSize,
      this.thickness,
      this.endSize
    );

    image(
      graphicsDown,
      this.x,
      this.cutPos + this.cutSize,
      this.thickness,
      this.endSize
    );

    image(
      graphicsBody,
      this.x,
      this.cutPos + this.cutSize + this.endSize,
      this.thickness,
      height - groundHeight - (this.cutPos + this.cutSize + this.endSize)
    );
  };

  this.update = function () {
    this.velocity += this.gravity;
    this.cutPos += this.velocity;

    this.cutPos = constrain(
      this.cutPos,
      this.endSize + 1,
      height - groundHeight - (this.cutSize + this.endSize) - 1
    );
  };

  this.lift = function () {
    this.velocity = -this.liftVelocity;
  };
}
