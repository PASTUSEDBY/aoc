const readline = require('readline').createInterface({
  input : process.stdin,
  output : process.stdout
});

let max = 0, sum = 0;

readline.on('line', ans => {
  if (!ans) {
    max = Math.max(max, sum);
    sum = 0;
  } else {
    sum += parseInt(ans);
  }
});

readline.on('close', () => console.log(max));
