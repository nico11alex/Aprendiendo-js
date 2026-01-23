// operadores 

// operadres arimeticos
let a=5
let b=10

console.log(a+b) //suma
console.log(a-b) // resta
console.log(a*b) // multiplicación
console.log(a/b) // division 
console.log(a%b) // modulo
console.log(a**b) // exponente

a++ // incremento
console.log(a)

b-- // Decremento
console.log(b)

// operadores de asignaión

let myVariable= 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// operadores de comparación 

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6")
console.log(a == a)
console.log(a === a)
console.log(a === "6")
console.log(a === 6)
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (Valores verdaderos)

// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

// Fasty vales (valores falsos)

//0
//0n
//null
//undifined
//NaN
//El boolean false
//Cadenas de  texto vacías

// Operadores logicos

// and (&&)

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)

console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo"):console.log("No esta lloviendo")
