# ucompose - utility for composing functions



```js
var ucompose = require('ucompose');

function toUpperCase(a, b) {
    return a+b;
}

function square(a) {
    return a*a;
}

function decorateGreaterThan100(a){
    return a>100 ? `${a} is greater than 💯` : a;
}

var addThenSquareThenDecorateThenLog = ucompose (add, square, decorateGreaterThan100, console.log);

// print 49
addThenSquareThenDecorateThenLog(15, -8);

// print 121 is greater than 💯
addThenSquareThenDecorateThenLog(7, 4);

```