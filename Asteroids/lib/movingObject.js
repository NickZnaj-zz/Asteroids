(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

 Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  };
    var MOP = Asteroids.MovingObject.prototype;

    MOP.canvas = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    return ctx;
  };

    MOP.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fillStyle = this.color;
    // ctx.stroke();
    ctx.fill();
  };

  MOP.move = function(ctx) {
    // ctx.clearRect();
    this.pos[0]+= this.vel[0];
    this.pos[1]+= this.vel[1];
  };

})(this);
