let myArray = [1,2,3,4]

let person= {
    name: "Nicolas",
    age: 18,
    alias: "Pro"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Destructuracion

// sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)

// sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue4 = 0] = myArray

console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue4)

// Ignorar elementos array

let [myValue9, , ,myValue10]=myArray
console.log(myValue9)
console.log(myValue10)

// Sintaxis objects

let {name,age,alias}=person
console.log(name)
console.log(age)
console.log(alias)

// sintaxis objects con valores predeterminados

let {name2,age2,alias2,email = "rodriguezvillota@gmail.com"} = person

console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

// sintaxis objects con nuevos nombres de variables

let {name:name3 ,age:age3 ,alias:alias3}=person
console.log(name3)
console.log(age3)
console.log(alias3)

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

let {name:name4, job: { name : jobName } }=persona3

console.log(name4)
console.log(jobName)

// Propragación

// Sintaxis arrays

let myArray2 = [...myArray] // copia

console.log(myArray2)

// copia de arrays

let myArray3 = [...myArray,5,6]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis de objeto

let persona4 = {...persona3}
console.log(persona4)