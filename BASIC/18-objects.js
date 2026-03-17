// objects

let persona = {
    name: "Nicolas",
    age: 37,
    alias: "Mango Chupado"
}

// Acceso a propiedades

// Notación por punto

console.log(persona.name)

console.log(persona["name"])

// Modificacion

persona.name="Alexander"

console.log(persona.name)

console.log(typeof persona.age)
persona.age="18"
console.log(typeof persona.age)

// Eliminación de propiedades

delete persona.age

console.log(persona)

// Nueva propiedad 

persona.email = "rodriguezvillotanicolas@gmail.com"

console.log(persona)

persona["age"]=18

console.log(persona)

// Metodos

let persona2={
    name: "Nicolas",
    age: 37,
    alias: "Mango Chupado",
    walk: function(){
        console.log("La persona camina.")
    }
}

persona2.walk()

// Anidacion de objects

let persona3={
    name: "Nicolas",
    age: 37,
    alias: "Mango Chupado",
    walk: function(){
        console.log("La persona camina.")
    },
    job:{
        name: "Programador",
        exp: 15,
        work: function(){
            console.log(`El ${this.name} trabaja.`)
        }
    }
}

console.log(persona3)

console.log(persona3.name)
console.log(persona3.job)
console.log(persona3.job.name)
persona3.job.work()

// Igualdad de objetos

let persona4={
    name: "Nicolas",
    age: 18,
    alias: "Mango Chupado",
    email:"rodriguezvillotanicolas@gmail.com"
}

console.log(persona)
console.log(persona4)

console.log(persona == persona4)
console.log(persona === persona4)

console.log(persona.alias == persona4.alias)

// Iteración

for(let key in persona4){
    console.log(key + ": " + persona4[key])
}

// funciones como objects

function Person(name,age){
    this.name=name
    this.age=age
}

let persona5 = new Person("Nicolas",18)
console.log(persona5)
console.log(persona5.name)

console.log(typeof persona4)
console.log(typeof persona5)