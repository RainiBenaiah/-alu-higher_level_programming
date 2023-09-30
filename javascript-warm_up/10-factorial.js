#!/usr/bin/node
function factorial (b) {
  if (isNaN(b) || b < 0) return 1;
  if (b === 0) return 1;
  return b * factorial(b - 1);
}
console.log(factorial(parseInt(process.argv[2])));
