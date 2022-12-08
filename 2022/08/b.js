const readline = require('readline').createInterface({
  input : process.stdin
});

const trees = [];

readline.on('line', line => trees.push(line));

readline.on('close', () => {
  const n = trees.length;
  let score = 0; //edge trees

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let localScore = 1;
      let tree = trees[i][j];

      if (tree === 0) continue;

      for (let k = i - 1; k >= 0; k--) {
        let rt = parseInt(trees[k][j]);
        if (rt >= tree || k === 0) {
          localScore *= i - k;
          break;
        }
      }

      for (let k = i + 1; k < n; k++) {
        let rt = parseInt(trees[k][j]);
        if (rt >= tree || k === n - 1) {
          localScore *= k - i;
          break;
        }
      }

      for (let k = j - 1; k >= 0; k--) {
        let rt = parseInt(trees[i][k]);
        if (rt >= tree || k === 0) {
          localScore *= j - k;
          break;
        }
      }

      for (let k = j + 1; k < n; k++) {
        let rt = parseInt(trees[i][k]);
        if (rt >= tree || k === n - 1) {
          localScore *= k - j;
          break;
        }
      }

      score = Math.max(score, localScore);
    }
  }

  console.log(score);
});
