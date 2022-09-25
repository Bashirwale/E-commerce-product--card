const show = document.querySelector(".imgcart");
const showcart = document.querySelector(".imgcart");

function showCart() {}
console.log(show);

const companies = [
  { name: "company one", category: "Finance", start: 1981, end: 2004 },
  { name: "company two", category: "Retail", start: 1992, end: 2008 },
  { name: "company three", category: "Auto", start: 1999, end: 2007 },
  { name: "company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "company Nine", category: "Retail", start: 1981, end: 1986 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//foreach
/* for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
} */

/* companies.forEach(function (company) {
  console.log(company.name);
}); */
//filter
/* let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);
 */
/* const canDrink = ages.filter(function (age) {
  if (age > 21) {
    return true;
  }
}); */

/* const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink); */

/* const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

//started in the 80s
console.log(retailCompanies); */
/* const eightiesCompany = companies.filter((company) => company.start < 1990);
console.log(eightiesCompany); */

//lasted ten year
/* const tenYearsCompany = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(tenYearsCompany);
 */
///MAP
//create array of companies name
/* const companyMap = companies.map(
  (company) => `${company.name} [${company.start}-${company.end}]`
);
console.log(companyMap); */

//sort

/* const companySort = companies.sort((a, b) => (a.start > b.start ? 2 : -2));
console.log(companySort); */
/* const ageSort = ages.sort((a, b) => b - a);

const companyReduce = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(companyReduce); */
