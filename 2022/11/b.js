//This was legit hard. I learnt something new here.

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
  const modulo = Monkey.monkeys.map(x => x.divisor).reduce((acc, val) => lcm(acc, val), 1);
  for (let i = 0; i < 10000; i++) round(modulo);

  console.log(
    Monkey.monkeys.map(x => x.inspected)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, val) => acc * val)
  );
});

function round(modulo) {
  for (let monkey of Monkey.monkeys) {
    const n = monkey.items.length;

    for (let i = 0; i < n; i++) {
      monkey.inspected++;
      const item = monkey.operation(monkey.items.shift());
      const boredItem = item % modulo;
      const target = monkey.actionTarget;

      if (monkey.isDivisible(boredItem)) {
        Monkey.monkeys[target.success].items.push(boredItem);
      } else {
        Monkey.monkeys[target.failure].items.push(boredItem);
      }
    }
  }
}

function gcd(x, y) {
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }

  return x;
}

function lcm(x, y) {
  return x * y / gcd(x, y);
}
