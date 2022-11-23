const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541,// PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: RFB"); // this will send to server. it will detect name and can only be max 3 letters.
//    conn.write("Move: up");
  })

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