// loops o bucles

// for

for(let i=0; i < 5; i++){
    console.log(`Hola ${i}`)
} 

const number = [1,2,3,4,5]

for(let i=0; i < number.length; i++){
    console.log(`Elemento ${number[i]}`)
} 

// while

let i =0
while(i < 5){
    console.log(`Hola ${i}`)
    i++
}

// do while

do{
    console.log(`Hola ${i}`)
    i++
}while (i<5)

// for of

myArray=["Nicolas", "Alexander", "Rodriguez", "Villota", 37, true]

myMap = new Map([
    ["name","Nicolas"],
    ["email", "rodriguezvillotanicolas@gmail.com"],
    ["age", 18]
])

mySet = new Set(["Nicolas", "Alexander", "Rodriguez", "Villota", 37, true])

for(let valor of myArray){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

// Buenas practicas

// break y continue

for(let i=0; i < 5; i++){
    if(i==2){
        continue
    }else if(i == 3){
        break
    }
    console.log(`Hola ${i}`)
} 