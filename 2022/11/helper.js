class Monkey {
  static monkeys = [];

  constructor ({
    id,
    items,
    divisor,
    op,
    actions
  }) {
    this.id = id;
    this.items = items;
    this.divisor = divisor;
    this.isDivisible = x => x % divisor === 0;
    this.operation = op;
    this.actionTarget = actions;
    this.inspected = 0;
  }
}

function parse(data) {
  const id = parseInt(data[0].slice(7));
  const items = data[1].replace(`Starting items:`, "").trim().split(", ").map(Number);
  const op = parseOperation(data[2]);

  const [, divisor] = data[3].split(" by ").map(Number);
  const [success, failure] = data.slice(4).map(x => x.split(" monkey ")[1]).map(Number);

  const actions = {
    success,
    failure
  };

  return {
    id,
    items,
    op,
    divisor,
    actions
  };
}

function parseOperation(str) {
  const [, expr] = str.split(" = ");
  let [, op, rhs] = expr.split(" ");
  rhs = parseInt(rhs);

  switch (op) {
    case '+': return x => x + (isNaN(rhs) ? x : rhs);
    case '*': return x => x * (isNaN(rhs) ? x : rhs);
    default: throw new Error(`Invalid operation to increase worry ${op}`);
  }
}

module.exports = {
  parse,
  Monkey
};
