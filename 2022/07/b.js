const { parse, getDirSizes } = require('./parse');
const TOTAL_SPACE = 70000000;
const REQUIRED_FOR_UPDATE = 30000000;

const readline = require('readline').createInterface({
  input : process.stdin
});

readline.on('line', parse);

readline.on('close', () => {
  const dirSizes = getDirSizes();
  const usedSpace = dirSizes.at(-1);
  const required = REQUIRED_FOR_UPDATE - (TOTAL_SPACE - usedSpace);
  
  console.log(Math.min(...dirSizes.filter(k => k >= required)));
});
