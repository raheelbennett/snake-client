const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT,// PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: RFB"); // this will send to server. it will detect name and can only be max 3 letters.
    //    conn.write("Move: up"); // this will move up one time.
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log(data);
  });

 
  return conn;
};

module.exports = {
  connect
};