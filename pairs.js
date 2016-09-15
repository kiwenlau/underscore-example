var _ = require("underscore");

var X = {
    b: 2,
    d: 4,
    a: 1,
    c: 3
};

var Y = _.pairs(X);

console.log(Y); // [ [ 'b', 2 ], [ 'd', 4 ], [ 'a', 1 ], [ 'c', 3 ] ]
