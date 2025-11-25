function processProducts(arr) {
    let productNames = arr.map(arr => arr.name)

    let price = arr.forEach(arr => arr.price > 50 ? console.log(`${arr.name} is above $50`) : console.log(`${arr.name} is below $50`))
}
let obj = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

processProducts(obj)