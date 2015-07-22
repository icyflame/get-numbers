# get-numbers

> Get all the numbers from an array

[![Build Status](https://travis-ci.org/icyflame/get-numbers.svg?branch=master)](https://travis-ci.org/icyflame/get-numbers)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --save get-numbers
```


## Usage

```js
var getNumbers = require('get-numbers');

getNumbers([1, 2, 'food', 5, 'bear']);
//=> [1, 2, 5]

getNumbers(['food', 'bear', 'eat']);
//=> []
```


## API

### getNumbers(input)

#### input

*Required*  
Type: `Array`


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
