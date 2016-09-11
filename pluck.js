var _ = require("underscore");

var companyList = [
{
    name: "Tecnet",
    country: "China"
},
{
    name: "Google",
    country: "America"
},
{
    name: "Apple",
    country: "America"
},
{
    name: "Samsung",
    country: "Korean"
}];

var nameList = _.pluck(companyList, "name");

console.log(nameList); // [ 'Tecnet', 'Google', 'Apple', 'Samsung' ]
