const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '172.20.92.55',
    port: '50541'
  });
  // server sends message when kicked for idling
  conn.on("data", () => {
    console.log('Poor snake got hungry and died.');
    conn.end();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
