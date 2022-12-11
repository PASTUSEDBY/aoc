const { parse, Monkey } = require('./helper');
const readline = require('readline').createInterface({
  input : process.stdin
});

let currMonkey = [];

readline.on('line', line => {
  if (!line) {
    Monkey.monkeys.push(new Monkey(parse(currMonkey)));
    currMonkey = [];
    return;
  }

  currMonkey.push(line.trim());
});

readline.on('close', () => {
  for (let i = 0; i < 20; i++) round();

  console.log(
    Monkey.monkeys.map(x => x.inspected)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, val) => acc * val)
  );
});

function round() {
  for (let monkey of Monkey.monkeys) {
    const n = monkey.items.length;

    for (let i = 0; i < n; i++) {
      monkey.inspected++;
      const item = monkey.operation(monkey.items.shift());
      const boredItem = Math.floor(item / 3);
      const target = monkey.actionTarget;

      if (monkey.isDivisible(boredItem)) {
        Monkey.monkeys[target.success].items.push(boredItem);
      } else {
        Monkey.monkeys[target.failure].items.push(boredItem);
      }
    }
  }
}
