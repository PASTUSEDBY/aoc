function parse(arr) {
  let stackLength = arr.pop().trim().split(/\s+/).length;
  let stacks = [];

  for (let i = 0; i < stackLength; i++) {
    stacks.push([]);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    let crates = arr[i].split(" "), index = 0, emptyStrings = 0;

    crates.forEach(v => {
      if (!v) {
        if (++emptyStrings === 4) {
          index++;
          emptyStrings = 0;
        }

        return;
      };

      stacks[index++].push(v);
      emptyStrings = 0;
    });
  }

  return stacks;
}

module.exports = {
  parse
};
