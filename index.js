'use strict';
module.exports = function (arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array to multiply its items');
  }

  var temp = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      temp.push(arr[i]);
    }
  }

  return temp;
};
