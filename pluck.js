var _ = require("underscore");

var stooges = [
{
    company: "Tecnet",
    country: "China"
},
{
    company: "Google",
    country: "America"
},
{
    company: "Apple",
    country: "America"
},
{
    company: "Samsung",
    country: "Korean"
}];

var companies = _.pluck(stooges, "company");

console.log(companies);
