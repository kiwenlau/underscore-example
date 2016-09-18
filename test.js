var _ = require("underscore");

var person = {};

person.friends = {
    name1: true,
    name2: false,
    name3: true,
    name4: true
};

_.each(['name4', 'name2'], function(name)
{
    // this refers to the friends property of the person object
    console.log(this[name]);
}, person.friends);
