// setup interface to handle user input from stdin

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //If you call setupInput but you haven't specified that the program should exit with a certain keyboard command, the program will not stop running! Node will keep the stdin connection open.
  if (key === '\u0003') { // This will allow for us to terminate the game wiht ctrl + c. 
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  //Implement some special keys that send canned messages to the server, for everyone to see.
  if (key === 'p') {
    connection.write("Say: Hello");
  }
  if (key === 'o') {
    connection.write("Say: Bye");
  }
};



module.exports = { setupInput };