#!/usr/bin/node
const num = process.argv[2];

const integers = num.map(num => parseInt(num)).filter(Number.isInteger);

if (integers.length < 2) {
  console.log(0);
} else {
 
  const sortedIntegers = integers.sort((a, b) => b - a);
  const secondBiggest = sortedIntegers[1];
  console.log(secondBiggest);
}
