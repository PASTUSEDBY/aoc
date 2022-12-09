const readline = require('readline').createInterface({
  input : process.stdin
});

let [hx, hy] = [0, 0];
let [tx, ty] = [0, 0];

const visited = new Set;
visited.add("0,0");

readline.on('line', line => {
  const [direction, moves] = [line[0], parseInt(line.slice(2))];

  for (let i = 1; i <= moves; i++) {
    switch (direction) {
      case 'R': hx++; break;
      case 'L': hx--; break;
      case 'U': hy++; break;
      case 'D': hy--; break;
    }
    
    update();

    visited.add(`${tx},${ty}`);
  }
});

readline.on('close', () => {
  console.log(visited.size);
});

function update() {
  //hx = -2, tx = 0, dx = -2, tx -> -1
  //hx = 1, tx = -1, dx = 2, tx -> 0
  //hx = 5, tx = 6, dx = -1, tx doesn't change.
  //tx and ty both change if dx or dy any changes.
  const dx = hx - tx, dy = hy - ty;
  
  if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
    tx += Math.sign(dx);
    ty += Math.sign(dy);
  }
}
