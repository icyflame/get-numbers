/* global it */
'use strict';
var assert = require('assert');
var getNumbers = require('./');

it('should ', function () {
  assert.deepEqual(getNumbers([1, 2, 'food']), [1, 2]);
  assert.deepEqual(getNumbers(['bear', 'food']), []);
  assert.deepEqual(getNumbers(['bear', 4.5, 'food', 2.5]), [4.5, 2.5]);
});
