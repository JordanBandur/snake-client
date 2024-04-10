const connect = require('./client');

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // event listener for handling user input
  return stdin;
};

const handleUserInput = function(key) { // Allows user to exit the game using ctrl + c
  if (key === "\u0003") {
    process.exit();
  }
};

setupInput();
connect();
