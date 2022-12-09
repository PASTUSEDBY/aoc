const { Knots } = require('./helper');
const readline = require('readline').createInterface({
  input : process.stdin
});
const knots = new Knots(10);

readline.on('line', line => {
  const [direction, moves] = [line[0], parseInt(line.slice(2))];

  knots.move(direction, moves);
});

readline.on('close', () => {
  console.log(knots.visited.size);
});
