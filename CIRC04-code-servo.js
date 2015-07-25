var five = require("johnny-five"),
    board, myServo;

board = new five.Board();

board.on("ready", function() {

  var servo1 = new five.Servo({
    pin: 9,
    type: "continuous"
  });

  var servo2= new five.Servo({
    pin: 10,
    type: "continuous"
  });

  // Clockwise, top speed.
  servo1.ccw(1);

  servo2.cw(2);

});
