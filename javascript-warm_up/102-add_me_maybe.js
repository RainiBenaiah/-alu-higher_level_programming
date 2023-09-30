#!/usr/bin/node
module.exports = {
  addMaybe: function (a, b) {
    return b(a + 1);
  }
};
