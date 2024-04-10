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

const message = function(num) {
  const messages = {
    1: "Say: Eat my scales!",
    2: "Say: Later, lil bro!",
    3: "Say: Know you place!"
  };
  connection.write(messages[num]);
};

const handleUserInput = function(key) {
  switch (key) {
  case "\u0003": // ctrl + c
    console.log('Exiting game...');
    process.exit();
    break;
  case 'w':
    console.log('Moving snake up');
    connection.write("Move: up");
    break;
  case 'a':
    console.log('Moving snake left');
    connection.write("Move: left");
    break;
  case 's':
    console.log('Moving snake down');
    connection.write("Move: down");
    break;
  case 'd':
    console.log('Moving snake right');
    connection.write("Move: right");
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