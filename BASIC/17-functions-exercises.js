// 1

const suma=(a=0, b=0) => console.log(a+b)

suma(3,5)

// 2

function numMayor(arr){
    let numeroMayor = arr[0]
    for(let valor of arr){
        if(valor >= numeroMayor){
            numeroMayor=valor
        }
    }
    return numeroMayor
}

let elMayor = numMayor([1,34,76,3,245,67])
console.log(elMayor)

// 3



function vocales(palabra){
    let vocales = ["a","e","i","o","u"]
    let contador=0;
    palabra=palabra.toLowerCase()
    for(let valor of palabra){
        if(vocales.includes(valor)){
            contador++
        }
    }
    return contador
}

let numVocales=vocales("Estados Unidos")
console.log(numVocales)

// 4

let arrStrings = ["Nicolas","Alexander","Jesus","Adriana"]
let arrStringsMayuscula=[]

arrStrings.forEach((valor)=>{
    valor=valor.toUpperCase()
    arrStringsMayuscula.push(valor)
})

console.log(arrStringsMayuscula)

// 5

let numPrimo=function(numero){
    let contador=0;
    for(let num=1; num<=numero; num++){
        if(numero % num == 0){
            contador++
        }
    }
    if(contador == 2){
        console.log(true)
    }else{
        console.log(false)
    }
}

numPrimo(12)

// 6

function arrEnComun(arr1,arr2){
    let arr3=[]
    for(let valor of arr1){
        if(arr2.includes(valor)){
            if(arr3.includes(valor)){
                continue
            }else{
                arr3.push(valor)
            }
        }else{
            continue
        }
    }

    console.log(arr3)
}

arrEnComun([1,1,1,2,3,4,5,4,3,7,8,45,445],[2,3,4,6,2,7,9,0,4,23,5,7,2,5])

// 7

let arrNumSumaPares=[2,3,4,6,2,7,9,0,4,23,5,7,2,5]
let sumaPares=0;
arrNumSumaPares.forEach((valor) => {
    if(valor % 2 == 0){
        sumaPares +=valor
    }
})

console.log(sumaPares)

// 8

let arrNum=[2,3,4,6,2,7,9,0,4,23,5,7,2,5]
let arrNew=[]

arrNum.forEach((valor)=>{
    valor **= 2
    arrNew.push(valor)
})

console.log(arrNew)

// 9

let palabraInversa=""
function palabraReves(palabra){
    for(let i=palabra.length-1; i >=0;i--){
        palabraInversa += palabra[i].toLowerCase()
    }
    console.log(palabraInversa)
}

palabraReves("Roma")

// 10
let multiplicación=1
function factorial(num){
    if(num==0){
        console.log(multiplicación=1)
    }
    for(let i =1; i<=num;i++){
        multiplicación *= i 
    }
    console.log(multiplicación)
}

factorial(6)