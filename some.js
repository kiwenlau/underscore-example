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



var A = _.some(companyList,
{
    name: "Google"
});
console.log(A); // true



var B = _.some(companyList,
{
    name: "Amazon"
});
console.log(B); // false