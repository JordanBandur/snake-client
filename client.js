const net = require("net");

// establishes a connection with the game server
const connect = function() {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // server sends message when kicked for idling
  conn.on("data", (message) => {
    console.log(message);
  });

  // Handle connection errors
  conn.on("error", (err) => {
    console.error("Connection error:", err.message);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;