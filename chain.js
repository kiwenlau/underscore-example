var _ = require("underscore");

var X = ["a", "b", "b", "c", "c", "c", "d", "d", "d", "d"];

var Y = _.chain(X)
    .countBy()
    .pairs()
    .sortBy(1)
    .reverse()
    .pluck(0)
    .value();

console.log(Y); // [ 'd', 'c', 'b', 'a' ]
