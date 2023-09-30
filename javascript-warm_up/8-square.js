#!/usr/bin/node
const size = parseInt(process.argv[2]);

  if (isNaN(size)) {
    console.log('Missing size');
  } else {
    for (let a = 0; a < size; a++) {
      let row = '';
      for (let B = 0; B < size; B++) {
        row += 'X';
      }
      console.log(row);
