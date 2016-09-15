var _ = require("underscore");

var X = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4]
];

var Y = _.pluck(X, 0);

console.log(Y); // [ 'a', 'b', 'c', 'd' ]
