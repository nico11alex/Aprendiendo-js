// funciones 

// simple

function myFunc(){
    console.log("Hola, funcion!")
}

for(let i=0; i < 5; i++){
    myFunc()
} 

// con parametros

function myFuncParams(name){
    console.log(`Hola, ${name}`)
}

myFuncParams("Nicolas")

// funciones anonimas

const myFunc2= function(name){
    console.log(`Hola, ${name}`)
}

myFunc2("Nicolas")

// arrow fuctions

const myFunc3=(name)=>{
    console.log(`Hola, ${name}`)
}

myFunc3("Nicolas")

const myFunc4=(name)=> console.log(`Hola, ${name}`)

myFunc4("Alexander")

// parametros

function sum(a,b){
    console.log(a+b)
}

sum(5,10)
sum(5)
sum()

// por defecto

function defaulsum(a=0,b=0){
    console.log(a+b)
}

defaulsum()
defaulsum(5)
defaulsum(5,10)

// retorno de valores

function mul(a,b){
    return a + b
}

let result = mul(5,10)

console.log(result)

// funciones anidadas

function extern(){
    console.log("Externo")
    function interna(){
        console.log("Interno")
    }
    interna()
}

extern()

// Funciones de orden superior

function applyFunc(func,param){
    func(param)
}

applyFunc(myFunc4,"Funcion de orden superior")

// forEach

let myArray = [1,2,3,4,5,6]

let mySet = new Set(["Nicolas", "Alexander", "Rodriguez", "Villota", 37, true])

myMap = new Map([
    ["name","Nicolas"],
    ["email", "rodriguezvillotanicolas@gmail.com"],
    ["age", 18]
])

myArray.forEach(function (value){
    console.log(value)
})


myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))

