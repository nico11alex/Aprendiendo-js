// 1

try{
    console.log(iasasd)
}catch{
    console.log("No es un string")
}

// 2

try{
    console.log(iasasd)
}catch{
    console.log("No es un string")
}finally{
    console.log("Mejor suerte la proxima")
}

// 3

try{
    console.log(iasasd)
}catch{
    console.log("No es un string")
}finally{
    console.log("Mejor suerte la proxima")
}

// 4

try{
    console.log(iasasd)
}catch(error){
    console.error("se detecto un erro:", error.message)
}finally{
    console.log("Mejor suerte la proxima")
}

// 5

class ErrorPerzonalizado extends Error{
    constructor(message){
        super(message);
        this.name = "Error creado por mi";
    }
}

function dividir(a,b){
    if(b === 0){
        throw new ErrorPerzonalizado("No se puede dividir con cero")
    }else{
        return a / b
    }
}

try{
    dividir(21,0);
}catch(error){
    console.log(error.name)
    console.log(error.message)
}

// 6

let monto = 150;
let saldo = 140;

try{
    if (monto > saldo) {
        throw new ErrorPerzonalizado("Fondos insuficientes");
    }
}catch(error){
    console.log(error.message)
}

// 7

class ErrorPerzonalizado2 extends Error{
    constructor(message){
        super(message);
        this.name = "Error creado por mi";
    }
}

class ErrorPerzonalizado3 extends Error{
    constructor(message){
        super(message);
        this.name = "Error creado por mi";
    }
}
let edad = 17;
try{
    if (monto > saldo) {
        throw new ErrorPerzonalizado3("Fondos insuficientes");
    }

    if (edad < 18){
        throw new ErrorPerzonalizado2("Edad insuficiente")
    }
}catch (error) {
    switch (error.name) {
        case "ErrorPerzonalizado3":
            console.log("Problema de dinero");
            break;
        case "ErrorPerzonalizado2":
            console.log("Problema de edad");
            break;
        default:
            console.log("Otro error");
    }
}