class Point {
  constructor () {
    this.x = 0;
    this.y = 0;
  }

  toString() {
    return `${this.x},${this.y}`;
  }
}

class Knots {
  constructor(n = 2) {
    this.knots = [];
    for (let i = 0; i < n; i++) {
      this.knots.push(new Point);
    }
    
    this.visited = new Set;
    this.visited.add("0,0"); //origin always exists
  }

  move(direction, moves) {
    const head = this.knots[0];
    for (let i = 0; i < moves; i++) {
      switch (direction) {
        case 'R': head.x++; break;
        case 'L': head.x--; break;
        case 'U': head.y++; break;
        case 'D': head.y--; break;
      }

      this.update();

      this.visited.add(this.knots.at(-1).toString());
    }
  }

  update() {
    //let h be head, b be an adjacent body.
    //hx = -2, bx = 0, dx = -2, bx -> -1
    //hx = 1, bx = -1, dx = 2, bx -> 0
    //hx = 5, bx = 6, dx = 1, bx doesn't change.
    //bx and by both change if dx or dy any changes.
    
    for (let i = 0; i < this.knots.length - 1; i++) {
      const curr = this.knots[i], adjacent = this.knots[i + 1];

      const dx = curr.x - adjacent.x, dy = curr.y - adjacent.y;

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        adjacent.x += Math.sign(dx);
        adjacent.y += Math.sign(dy);
      }
    }
  }
}

module.exports = {
  Knots
};
