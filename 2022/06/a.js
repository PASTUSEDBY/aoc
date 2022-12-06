const readline = require('readline').createInterface({
  input : process.stdin
});

let index = 0;

readline.on('line', line => {
  for (; index < line.length; index++) {
    let part = line.slice(index, index + 4);
    let unique = new Set(part);

    if (unique.size < 4) continue;

    break;
  }
});

readline.on('close', () => {
  console.log(index + 4);
});
