#!/usr/bin/node
const fs = require('fs');
fs.readFile(process.argv[2], (errow, paragraph) => {
   if (errow) throw errow;
      console.log(paragraph.toString());
});
