#!/usr/bin/node
function factor(a) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factor(a - 1);
}
console.log(factor(parseInt(process.argv[2])));
