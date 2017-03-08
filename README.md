# ucompose
Utility for composing functions.

[![Build Status][travis-build-status]][travis-url]
[![NPM version](https://img.shields.io/npm/v/ucompose.svg)](https://www.npmjs.com/package/ucompose)



## Installation
$ `npm install ucompose --save` 

## Basic Usage

```js
const ucompose = require('ucompose');

function add(a, b) {
    return a+b;
}

function square(a) {
    return a*a;
}

function decorateGreaterThan100(a){
    return a>100 ? `${a} is greater than 💯` : a;
}

const addThenSquareThenDecorateThenLog = ucompose (add, square, decorateGreaterThan100, console.log);

// print 49
addThenSquareThenDecorateThenLog(15, -8);

// print 121 is greater than 💯
addThenSquareThenDecorateThenLog(7, 4);

```

## Why (another) utility for composing functions

If you are here, chances that you know what functions composition is all about are high. This small utility provides you with an intuitive way to compose your functions. If you are familiar with Ramda.js, this utily has the semantic of R.pipe since it performs a left-to-right function composition under the conditions that only the leftmost function (the first in the chain) may take any number of arguments, and the remaining functions must be unary. But where it really shines is in the fact that it gives you the ability of grouping your functions into logical units that can be composed with other functions (or logical units) later on. See [examples](#examples) for more information.


## features
- composition of any number of functions (left-to-right evalutions)
- logical grouping of functions


## Api

## <code>ucompose: (...fns) ⇒ function (...args)</code>
  - Takes functions as parameters and returns their composition

| Param | Type | Description |
| --- | --- | --- |
| fns | <code>function</code> \| <code>Array of functions</code>| functions  to be composed |


## Examples

```js
const ucompose = require('ucompose');


function wakeUpEarly(arg){
    // at 12:00 PM 
};

function buyBread(arg) {
    // buy bread
}

function buyMilk(arg) {
    // buy milk
}
// grouping `buyBread` and `buyMilk` into a logical unit called shopping
const shopping = [buyBread,buyMik]

function payAVisitToMom(){
    // Gifts are highly appreciated
}

const yourWeekendProgram = ucompose (wakeUpEarly, shopping,payAVisitToMom );

// Start your weekend
yourWeekendProgram(You);
```

## Tests

  First install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

  [MIT](LICENSE)




[travis-build-status]:https://travis-ci.org/randowize/ucompose.svg?branch=master&label=linux
[travis-url]:https://travis-ci.org/randowize/ucompose