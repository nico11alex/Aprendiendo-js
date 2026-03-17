// Exepciones

let myObjet


// Captura de errores

// Try - Catch

try{
    console.log(myObjet.e)
    console.log("Finaliza la ejecucion sin errores")
}catch(error){
    console.log("Se ha producido un error:", error.message)
}

// finally

try{
    console.log(myObjet)
    console.log("Finaliza la ejecucion sin errores")
}catch(error){
    console.log("Se ha producido un error:", error.message)
}finally{
    console.log("Este codigo se ejecuta siempre")
}

// throw

throw new Error("Se ha producido un error")
