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

const handleUserInput = function(key) { // Allows user to exit the game using ctrl + c
  if (key === "\u0003") {
    process.exit();
  }
  if (key === 'w') {
    console.log('Moving up');
    connection.write("Move: up");
  }
  if (key === 'a') {
    console.log('Moving left');
    connection.write("Move: left");
  }
  if (key === 's') {
    console.log('Moving down');
    connection.write("Move: down");
  }
  if (key === 'd') {
    console.log('Moving right');
    connection.write("Move: right");
  }
};

module.exports = { setupInput };