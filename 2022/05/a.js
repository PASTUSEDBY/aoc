const { parse } = require('./parse.js');

const readline = require('readline').createInterface({
  input : process.stdin
});

let inputs = [];
let parseInputs = null;

readline.on('line', line => {
  if (!line) {
    parseInputs = parse(inputs);
    return;
  }

  if (!parseInputs) {
    inputs.push(line);
    return;
  }

  let [, count, start, end ] = line.match(/move (\d+) from (\d+) to (\d+)/).map(Number);

  for (let i = 1; i <= count; i++) {
    parseInputs[end - 1].push(parseInputs[start - 1].pop());
  }
});

readline.on('close', () => {
  console.log(parseInputs.map(k => k[k.length - 1].replace(/[\[\]]/g, '')).join(""));
});
