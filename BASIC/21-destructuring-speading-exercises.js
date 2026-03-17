// 1

let array1=[1,2,3]

let [elemento1,elemento2]=array1

console.log(elemento1)
console.log(elemento2)

// 2

let [,,elemento3,elemento4=0]=array1
console.log(elemento3)
console.log(elemento4)

// 3

let persona = {
    name:"Nicolas",
    apellido:"Rodriguez",
    edad:18,
    job:{
        name:"Programador",
        experiencia:12
    }
}

let{name,apellido}=persona
console.log(name)
console.log(apellido)

// 4

let{name:name2,apellido:apellido2}=persona
console.log(name2)
console.log(apellido2)

// 5

let{job:{name:name4,experiencia:experiencia2}}=persona
console.log(experiencia2)
console.log(name4)

// 6

let array2=[2,2,2,2,2,2]

let array3=[...array1,...array2]

console.log(array3)

// 7

let array4=[...array3]

console.log(array4)

// 8

let persona2 = {
    grado:"ADSO",
    tiempo:12
}

let persona3={...persona,...persona2}
console.log(persona3)

// 9

let persona4={...persona3}
console.log(persona4)

// 10

let array5=[1,1,1,1,1,1]
let[el1,el2,el3,el4]=array5

let array6=[...el1,...el2,...el3,...el4]
console.log(array6)