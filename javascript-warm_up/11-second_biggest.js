#!/usr/bin/node
let large = 0;
let seclarge = 0;
for (let a = 2; a < process.argv.length; a++) {
  const current = parseInt(process.argv[a]);
  if (current > large) {
    seclarge = large;
    large = current;
  }
  if (current > seclarge && current < large) {
    seclarge = current;
  }
}
console.log(seclarge);
