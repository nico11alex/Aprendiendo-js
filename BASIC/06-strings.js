// strings

// Concatenación

let myName = 'Nicolas'
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Metodos Comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Nicolas"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.includes("Nicolas"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0,10))
console.log(greeting.replace("Nicolas", "Alexander"))

// Template literals

let message = `Hola este es mi 
               curso de JavaScript` 

console.log(message)

let email = "nicolas"

console.log(`Hola, ${myName} este es tu email ${email}`)