(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

  Asteroids.Game = function () {
    this.asteroids = this.addAsteroids();
  };
  var AGP = Asteroids.Game.prototype;

  AGP.addAsteroids = function(NUM_ASTEROIDS) {
    var asteroids = [];
    while (asteroids.length < Asteroids.Game.NUM_ASTEROIDS){
      asteroids.push(new Asteroids.Asteroid(this.randomPosition()));
    }
    return asteroids;
  };

  AGP.randomPosition = function () {
    return {pos: [
      Math.floor(Math.random() * Asteroids.Game.DIM_X),
      Math.floor(Math.random() * Asteroids.Game.DIM_Y)
    ]};
  };

  AGP.draw = function(ctx) {
    ctx.clearRect(0, 0, Asteroids.Game.DIM_X, Asteroids.Game.DIM_Y);
    this.asteroids.forEach( function(el){
      el.draw(ctx);
    });
  };

  AGP.canvas = function() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  return ctx;
  };

  AGP.moveObjects = function() {
    this.asteroids.forEach (function(asteroid){
      asteroid.move();
    });
  };

  Asteroids.Game.DIM_X = 500;
  Asteroids.Game.DIM_Y = 500;
  Asteroids.Game.NUM_ASTEROIDS = 1500;

})(this);
