// if , elif , else


// if (si)

let age = 10

if (age == 18){
    console.log("La edad es 18")
}

// else (si no)

if (age == 18){
    console.log("La edad es 18")
} else {
    console.log("La edad no es 18")
}

// else if (si no, si)

if (age == 18){
    console.log("La edad es 18")
}else if(age < 18){
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 18 ")
}

// Operador ternario

const message = age == 18 ? "La edad es 18":"La edad no es 18"
console.log(message)

// swich

let day = 0
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día desconocido"
        
}

console.log(dayName)