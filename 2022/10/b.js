const readline = require('readline').createInterface({
  input : process.stdin
});

const results = [];
let current = "";
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
  console.log("BEAUTIFUL ART");
  console.log(results.slice(0, 6).join("\n"));
});

function update() {
  let pos = current.length;
  if (isInRange(pos)) {
    current += "#";
  } else {
    current += ".";
  }

  if (current.length === 40) {
    results.push(current);
    current = "";
  }
}

function isInRange(n) {
  let mX = X % 40;

  return [e(mX - 1), e(mX), e(mX + 1)].includes(n);
}

function e(x) {
  if (x < 0) {
    x += 40;
  }

  return x;
}
