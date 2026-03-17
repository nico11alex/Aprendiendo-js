// 1

let animal={
    nombre: "Gotes",
    especie: "felino",
    accionRecurrente: "Dormir"
}

// 2

console.log(animal.nombre)
console.log(animal.especie)
console.log(animal.accionRecurrente)

// 3

animal["edad"]=3

console.log(animal.edad)

// 4

delete animal.nombre
delete animal.especie
delete animal.accionRecurrente

console.log(animal)

// 5

animal["acción"]=function(){
    console.log("El gato le gusta maullar")
}

animal.acción()

// 6

for(let key in animal){
    console.log(key +":"+ animal[key])
}

// 7

animal["trabajo"]={
    nombre: "Dormir mucho",
    experiencia:2
}

// 8

console.log(animal.trabajo.nombre)
console.log(animal.trabajo.experiencia)

// 9

let perro={
    nombre: "Niño",
    especie: "Perruno",
    accionRecurrente: "Orinarse"
}

console.log(animal==perro)

// 10

console.log(animal.nombre==perro.nombre)