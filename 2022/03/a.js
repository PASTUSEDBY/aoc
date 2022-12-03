const readline = require('readline').createInterface({
  input : process.stdin
});

let sum = 0;

readline.on('line', line => {
  let n = line.length / 2;
  let [first, last] = [line.substring(0, n), line.substring(n)];

  let common = [...first].find(ch => last.includes(ch));
  if (!common) return;

  let general = common.toLowerCase();

  let priority = general.charCodeAt(0) - 96;

  if (common !== general) { //This means its an uppercase
    priority += 26;
  }

  sum += priority;
});

readline.on('close', () => {
  console.log(sum);
});
