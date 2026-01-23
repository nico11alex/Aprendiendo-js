// set 

let mySet = new Set()

console.log(mySet)


// Inicializacion

mySet = new Set(["Nicolas", "Alexander", "Rodriguez", "Villota", 37, true])

console.log(mySet)

// metodos comunes

mySet.add("https")

console.log(mySet)

mySet.delete("https")

console.log(mySet)

// has

console.log(mySet.has("Nicolas"))
console.log(mySet.has("Vi"))

// size

console.log(mySet.size)

// convertir un set a  array

let myArray = Array.from(mySet)
console.log(myArray)

// convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admiten duplicados

mySet.add("Nicolas")

console.log(mySet)