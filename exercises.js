var sum = function () {
  var sum = 0;
  [].slice.call(arguments).forEach( function(num) {
    sum += num;
  });

  return sum;
};


Function.prototype.myBind = function () {
  var fn = this;
  var object = arguments[0];
  var allArgs = [].slice.call(arguments);
  var args = allArgs.slice(1);

  return function() {

    var argsList = args.concat([].slice.call(arguments));
    return fn.apply(object,argsList );
  };
};


var curriedSum = function (numArgs) {
  var numbers = [];
  var _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs){
      var sum = 0;
      numbers.forEach ( function(num) {
        sum += num;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};


Function.prototype.curry = function (numArgs) {
  var fn = this;
  var args = [];

  var _fn = function (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(args[0], args);
    } else {
      return _fn;
    }
  };

  return _fn;
};
// =================================================== \\


Function.prototype.inherits = function(parentClass){
  childClass = this;
  var Surrogate = function (){};
  Surrogate.prototype = parentClass.prototype;
  childClass.prototype = new Surrogate();
  childClass.prototype.constructor = childClass;
};























//
