// map

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ["name","Nicolas"],
    ["email", "rodriguezvillotanicolas@gmail.com"],
    ["age", 18]
])

console.log(myMap)

// Metodos y propiedades

// set 

myMap.set("alias", "alex")
myMap.set("name", "Nicolass")

console.log(myMap)

// get

console.log(myMap.get("name"))

// has

console.log(myMap.has("name"))
console.log(myMap.has("surname"))

// delete

myMap.delete("email")

console.log(myMap)

// keys

console.log(myMap.keys())

// values 

console.log(myMap.values())

// entries

console.log(myMap.entries())

// size 

console.log(myMap.size)

// clear 

myMap.clear()

console.log(myMap)