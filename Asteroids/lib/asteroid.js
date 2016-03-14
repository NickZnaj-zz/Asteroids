(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
  // var Asteroid = root.Asteroids.Asteroid = root.Asteroids.Asteroid || {};

  Asteroids.Asteroid = function(pos){
    var velocity = Asteroids.Util.randomVec(Asteroids.Asteroid.SPEED);
    defaults = {color: "#00FF00", vel: velocity, radius: 5};
    defaults.pos = pos.pos;
    MovingObject.call(this, defaults);
  };

  Asteroids.Asteroid.SPEED = 10;

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);


})(this);
