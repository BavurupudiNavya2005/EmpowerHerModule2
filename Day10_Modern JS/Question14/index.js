const profile = { name: "Navya", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

const result = {...profile,...updates}

console.log(result)