var _ = require("underscore");

var X = [ [ 'b', 2 ], [ 'd', 4 ], [ 'a', 1 ], [ 'c', 3 ] ];

var Y = _.sortBy(X, 1);

console.log(Y); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]
