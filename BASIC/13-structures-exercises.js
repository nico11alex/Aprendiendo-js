// 1

let animales = ["Canguro", "Perro", "Vaca", "Toro", "Gato"]
console.log(animales)

// 2

animales.unshift("Camello")
animales.push("rata")
console.log(animales)

// 3

animales.splice(3,1)
console.log(animales)

// 4

let libros = new Set(["Habitos Atommicos", "Como hacer amigos e influir sobre las personas", "Zero a uno", "Carry", "It"])
console.log(libros)

// 5

libros.add("It 2")
libros.add("It")
console.log(libros)

// 6

libros.delete("It")
console.log(libros)

// 7

let mes = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"],
])

console.log(mes)

// 8

console.log(mes.get(5))

// 9

mes.set("Meses de verano",["Julio", "Agosto", "Septiembre"])
console.log(mes)

// 10

let setAnimales= new Set(animales)
let animalesMap = new Map()
animalesMap.set("animales",animales)
console.log(animalesMap)