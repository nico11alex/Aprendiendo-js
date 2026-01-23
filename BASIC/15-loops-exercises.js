// 1

for(let i=0; i<=20;i++){
    console.log(i);
}

// 2

let suma = 0;
let num = 0;

while(num <= 100){
    suma += num
    num++
}

console.log(suma)

// 3

for(let i = 0; i < 50; i++){
    if((i & 1) == 0){
        console.log(i)
    }
}

// 4

let nombres = ["Nicolas","Alexander","Jesus","Sara","Adriana","Alex"]

for(let valor of nombres){
    console.log(valor)
}

// 5

let palabra = "Amo este mundo";
let numeroCaracteres = 0;
for(let valor of palabra){
    numeroCaracteres ++
}
console.log(numeroCaracteres)

// 6

let numeros = [1,3,4,5,6,7,8];
let multiplicación = 1;

for(let valor of numeros){
    multiplicación *= valor
}

console.log(multiplicación)

// 7

for(let i = 0; i <= 10; i++){
    console.log(`5 x ${i} = ${i*5}`)
}

// 8

let palabra1 = "Ramo"
let palabraReves = ""

for(let i = palabra1.length-1; i >= 0; i--){
    palabraReves+=palabra1[i];
}

console.log(palabraReves)

// 9

let num2=0;
let arr=[0];    

while(num2<=10){
    console.log(arr.at(-1))
    if(num2==0){
        arr.push(1)
        num2++
    }else{
        let fibonacci=arr[num2-1]+arr.at(-1)
        arr.push(fibonacci)
        num2++
    }
}

let arr2=[1,23,12,654,7568,22,768,89,44,3,23,4,5,6,7,8]
let arr3=[]

for(let valor of arr2){
    if(valor>10){
        arr3.push(valor)
    }
}

console.log(arr3)