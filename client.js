const net = require("net");
const { IP, PORT, INITIALS } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Sends client a message upon successful connection
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(INITIALS);
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

module.exports = { connect };