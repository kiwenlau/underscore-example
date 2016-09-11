var _ = require("underscore");

var X = ["a", "b", "b", "c", "c", "c", "d", "d", "d", "d"];

var Y = _.countBy(X);

console.log(Y); // { a: 1, b: 2, c: 3, d: 4 }
