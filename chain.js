var _ = require("underscore");

var X = ["b", "d", "a", "d", "d", "b", "c", "c", "d", "c"];

var Y = _.chain(X)
    .countBy()
    .pairs()
    .sortBy(1)
    .pluck(0)
    .value();

console.log(Y); // [ 'a', 'b', 'c', 'd' ]
