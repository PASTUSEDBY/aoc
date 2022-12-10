const readline = require('readline').createInterface({
  input : process.stdin
});

const results = [];
let cycles = 0, X = 1;

readline.on('line', line => {
  const [ins, number] = line.split(" ");

  switch (ins) {
    case 'noop': cycles++; update(); break;
    case 'addx': {
      for (let i = 0; i < 2; i++) {
        cycles++;
        update();
      }

      X += parseInt(number);
      break;
    }
    default: throw new Error("Invalid instruction.");
  }
});

readline.on('close', () => {
  console.log(results.slice(0, 6).reduce((acc, val) => acc + val));
});

function update() {
  if ((cycles - 20) % 40 === 0) {
    results.push(cycles * X);
  }
}
