// array

//Declaración

let myArray = [];
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Nicolas", "Alexander", "Rodriguez", "Villota", 37, true];
myArray2 = new Array("Nicolas", "Alexander", "Rodriguez", "Villota", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Nicolas"
// myArray2[1] = "Alexander"
myArray2[3] = "Rodriguez"

console.log(myArray2)

myArray = []
myArray[2] = "Alexander"
// myArray[0] = "Nicolas"
myArray[1] = "Rodriguez"

console.log(myArray)

// Metodos comunes

myArray = []

// push y pop

myArray.push("Nicolas")
myArray.push("Alexander")
myArray.push("Rodriguez")
myArray.push(18)

console.log(myArray)

console.log(myArray.pop()) 
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Nicolas", "Alexander")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []

// myArray.length =0

console.log(myArray)

// slice

myArray.push("Nicolas", "Alexander", "Rodriguez", "Villota", 37, true)

let myNewArray= myArray.slice(1,2)

console.log(myArray)
console.log(myNewArray)

// splice 

myArray.splice(1,3)
console.log(myArray)

myArray=["Nicolas", "Alexander", "Rodriguez", "Villota", 37, true]

myArray.splice(1,2,3)
console.log(myArray)