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



var A = _.filter(companyList,
{  
    country: "America"
});
console.log(A);

/*
[ { name: 'Google', country: 'America' },
  { name: 'Apple', country: 'America' } ]
 */
