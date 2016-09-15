var _ = require("underscore");

var X = ["b", "d", "a", "d", "d", "b", "c", "c", "d", "c"];

var Y = _.countBy(X);

console.log(Y); // { b: 2, d: 4, a: 1, c: 3 }
