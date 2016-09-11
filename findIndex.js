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

var i = _.findIndex(companyList,
{
    name: "Google"
});

console.log(i); // 1