const { KEYMAP, KEYMESSAGES, PLAYERMESSAGES } = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // event listener for handling user input
  return stdin;
};

const message = function(key) {
  connection.write(PLAYERMESSAGES[key]);
};

const handleUserInput = function(key) {
  switch (key) {
  case "\u0003": // ctrl + c
    console.log(KEYMESSAGES.EXIT);
    process.exit();
    break;
  case 'w':
    console.log(KEYMESSAGES.MOVE_UP);
    connection.write(KEYMAP.MOVE_UP_KEY);
    break;
  case 'a':
    console.log(KEYMESSAGES.MOVE_LEFT);
    connection.write(KEYMAP.MOVE_LEFT_KEY);
    break;
  case 's':
    console.log(KEYMESSAGES.MOVE_DOWN);
    connection.write(KEYMAP.MOVE_DOWN_KEY);
    break;
  case 'd':
    console.log(KEYMESSAGES.MOVE_RIGHT);
    connection.write(KEYMAP.MOVE_RIGHT_KEY);
    break;
  case '1':
  case '2':
  case '3':
    message(key);
    break;

  default:
    break;
  }
};

module.exports = { setupInput };