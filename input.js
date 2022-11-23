// setup interface to handle user input from stdin

const setupInput = function () {
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
  // your code here
};

module.exports = {setupInput};