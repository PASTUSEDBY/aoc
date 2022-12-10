const readline = require('readline').createInterface({
  input : process.stdin
});

readline.on('line', line => {
  //parse ur lines
  console.log(line);
});

readline.on('close', () => {
  //do end stuff after parsing
  console.log("Hooray we have reached the end!");
});
