(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

  Asteroids.GameView = function () {
    this.game = new Asteroids.Game();
    this.canvas = function () {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        return ctx;
      }();
  };

  var AGVP = Asteroids.GameView.prototype;

  AGVP.start = function () {
    var moving = function () {
      this.game.draw(this.canvas);
      this.game.moveObjects();
    }.bind(this);

    setInterval(moving, 15);
  };


})(this);
