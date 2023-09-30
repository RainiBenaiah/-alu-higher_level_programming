#!/usr/bin/node
module.exports = {
  moreCall: function (a, b) {
    for (let i = 0; i < a; i++) {
      b();
    }
  }
};
