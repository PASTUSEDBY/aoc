//Too tired to think or write better, I have done in the most basic
//way possible. Part 2 is copy pasted and modified.

const readline = require('readline').createInterface({
  input : process.stdin
});

const trees = [];

readline.on('line', line => trees.push(line));

readline.on('close', () => {
  const n = trees.length;
  let visible = 4 * (n - 1); //edge trees

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let tree = trees[i][j];

      if (tree === 0) continue;

      let visibility = 4;

      for (let k = 0; k < i; k++) {
        let rt = parseInt(trees[k][j]);
        if (rt >= tree) {
          visibility--;
          break;
        }
      }

      for (let k = i + 1; k < n; k++) {
        let rt = parseInt(trees[k][j]);
        if (rt >= tree) {
          visibility--;
          break;
        }
      }

      for (let k = 0; k < j; k++) {
        let rt = parseInt(trees[i][k]);
        if (rt >= tree) {
          visibility--;
          break;
        }
      }

      for (let k = j + 1; k < n; k++) {
        let rt = parseInt(trees[i][k]);
        if (rt >= tree) {
          visibility--;
          break;
        }
      }

      if (visibility > 0) visible++;
    }
  }

  console.log(visible);
});
