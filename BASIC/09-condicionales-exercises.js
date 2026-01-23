// if /else /else if /ternario 

// 1

let name1 = "Nicolas"

if (name1 === "Nicolas"){
    console.log(name1)
}

// 2

let username = "NicoPro"
let contraseña = "1234"

if (username === "NicoPro" && contraseña === "1234"){
    console.log("Acceso aceptado")
}

// 3
let num=0;

if(num>0){
    console.log("Soy un número positivo")
}else if(num<0){
    console.log("Soy un número negativo")
}else{
    console.log("Soy el cero")
}

//4
let edad=18;

if(edad>=18){
    console.log("Usted puede votar")
}else{
    console.log("Usted no puede votar, aun te faltan", 18-edad,"años")
}

//5
let age = 18;

const message = age >= 18 ? "Usted es mayor de edad" : "Usted es menor de edad";
console.log(message)

//6

let month1=1;
let monthName1;
let numDay1;

if(month1==1){
    monthName1="Enero";
    numDay1=31;
}else if(month1==2){
    monthName1="Febrero";
    numDay1=28;
}else if(month1==3){
    monthName1="Marzo"
    numDay1=31;
}else if(month1==4){
    monthName1="Abril"
    numDay1=30;
}else if(month1==5){
    monthName1="Mayo"
    numDay1=31;
}else if(month1==6){
    monthName1="Junio"
    numDay1=30;
}else if(month1==7){
    monthName1="Julio"
    numDay1=31;
}else if(month1==8){
    monthName1="Agosto"
    numDay1=31;
}else if(month1==9){
    monthName1="Septiembre"
    numDay1=30;
}else if(month1==10){
    monthName1="Octubre"
    numDay1=31;
}else if(month1==11){
    monthName1="Noviembre"
    numDay1=30;
}else if(month1==12){
    monthName1="Diciembre"
    numDay1=31;
}else{
    monthName1="Número de mes desconocido"
    numDay1="Número de día desconocido"
}
console.log(monthName1)

//7
console.log(numDay1)

//switch

//8

let len="es";
let saludo;

switch(len){
    case "es":
        saludo="Buenos dias"
        break
    case "en":
        saludo="Good morning"
        break
    case "por":
        saludo="bom dia"
        break
    default:
        saludo="Lenguaje no encontrado"
}
console.log(saludo)

//9

let month=9;
let monthName;
let numDay;

switch(month){
    case(1):
        monthName="Enero";
        numDay=31;
        break
    case(2):
        monthName="Febrero";
        numDay=28;
        break
    case(3):
        monthName="Marzo"
        numDay=31;
        break
    case(4):
        monthName="Abril"
        numDay=30;
        break
    case(5):
        monthName="Mayo"
        numDay=31;
        break
    case(6):
        monthName="Junio"
        numDay=30;
        break
    case(7):
        monthName="Julio"
        numDay=31;
        break
    case(8):
        monthName="Agosto"
        numDay=31;
        break
    case(9):
        monthName="Septiembre"
        numDay=30;
        break
    case(10):
        monthName="Octubre"
        numDay=31;
        break
    case(11):
        monthName="Noviembre"
        numDay=30;
        break
    case(12):
        monthName="Diciembre"
        numDay=31;
        break
    default:
        monthName="Número de mes desconocido"
        numDay="Número de día desconocido"

}
console.log(monthName)

//10

console.log(numDay)