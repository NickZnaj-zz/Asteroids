(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
  var Util = root.Asteroids.Util = root.Asteroids.Util || {};

  Asteroids.Util.inherits = function (childClass, parentClass) {
    var Surrogate = function (){};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  };

  Asteroids.Util.randomVec = function (length) {
    var options = [1, -1];
    var velocity = [];
    velocity.push(options[Math.floor(Math.random() * options.length)] * [Math.floor(Math.random() * 5) + 1]);
    velocity.push(options[Math.floor(Math.random() * options.length)] * [Math.floor(Math.random() * 5) + 1]);

    return velocity;
  };



})(this);
