const files = new Map;
let dirs = [], sums = [];

function parseCommand(str) {
  let [command, arg] = str.split(" ");

  if (command === 'ls') return; //This has no use/impact
  
  //The only other is cd

  switch (arg) {
    case '..': dirs.pop(); break;
    case '/': dirs = []; break;
    default: dirs.push(arg);
  }
}

function getDirMap() {
  let map = files;
  for (let dir of dirs) {
    map = map.get(dir);

    if (typeof map !== 'object') {
      throw new TypeError(`${dir} should have been a valid directory.`);
    }
  }

  return map;
}

function parse(input) {
  if (input.startsWith("$")) {
    return parseCommand(input.slice(2)); //Ignoring the $ and space
  }

  let dir = getDirMap();
  let [determiner, name] = input.split(" ");

  switch (determiner) {
    case 'dir': {
      dir.set(name, new Map);
      break;
    }
    default : dir.set(name, parseInt(determiner)); //This is a file
  }
}

function getDirSizes() {
  sum(files);
  return sums;
}

function sum(dir) {
  let s = 0;
  for (let file of dir.values()) {
    if (typeof file === 'object') {
      let dirSum = sum(file);
      s += dirSum;
      continue;
    }

    s += file;
  }

  sums.push(s);
  return s;
}



module.exports = {
  parse,
  getDirSizes
};
