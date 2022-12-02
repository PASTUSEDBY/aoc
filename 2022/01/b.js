const readline = require('readline').createInterface({
  input : process.stdin,
  output : process.stdout
});

let sums = [], sum = 0;

readline.on('line', ans => {
  if (!ans) {
    sums.push(sum);
    sum = 0;
  } else {
    sum += parseInt(ans);
  }
});

readline.on('close', () => console.log(sums.sort().slice(-3).reduce((acc, val) => acc + val)));
