function employees(arr){
    let a = arr.filter(arr => arr.tasksCompleted > 5)
    let b = a.map(arr => arr.rating > 4.5 ? "Excellent" : arr.rating > 3 ? "Good" : "Needs improvement")
    let c = b.sort((a,b) => b-a)
    return c
}
let obj =  [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]
console.log(employees(obj))