const readline = require('readline').createInterface({
  input : process.stdin
});

let sum = 0, groups = [];

readline.on('line', line => {
  groups.push(line);

  if (groups.length === 3) {
    compute();
    groups = [];
  }
});

readline.on('close', () => {
  console.log(sum);
});

function compute() {
  let [first, second, third] = groups;

  let [common] = [...first]
                 .filter(ch => second.includes(ch))
                 .filter(ch => third.includes(ch));



  if (!common) return;

  let general = common.toLowerCase();

  let priority = general.charCodeAt(0) - 96;

  if (common !== general) { //This means its an uppercase
    priority += 26;
  }

  sum += priority;
}
