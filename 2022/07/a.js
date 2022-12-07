const { parse, getDirSizes } = require('./parse');
const LIMIT = 100000;;

const readline = require('readline').createInterface({
  input : process.stdin
});

readline.on('line', parse);

readline.on('close', () => {
  console.log(getDirSizes().filter(k => k <= LIMIT).reduce((acc, val) => acc + val));
});
