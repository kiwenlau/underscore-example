var _ = require("underscore");

var X = ["b", "b", "d", "d", "d", "d", "a", "c", "c", "c"];

var Y = _.chain(X)
    .countBy()
    .pairs()
    .sortBy(1)
    .pluck(0)
    .value();

console.log(Y); // [ 'd', 'c', 'b', 'a' ]
