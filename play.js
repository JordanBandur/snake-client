const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });
  // server sends message when kicked for idling
  conn.on("data", (message) => {
    console.log(message);
    conn.end();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
