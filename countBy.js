var _ = require("underscore");

var X = ["b", "b", "d", "d", "d", "d", "a", "c", "c", "c"];

var Y = _.countBy(X);

console.log(Y); // { b: 2, d: 4, a: 1, c: 3 }
