// 1

class Cabra{

    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludo(){
        console.log("Hola me llamo "+ this.nombre +" y tengo "+ this.edad+ " años")
    }

    static sonido(){
        return "Meeee"
    }
}

// 2

let cabra1 = new Cabra("Goat",13)
cabra1.saludo()

// 3

console.log(cabra1.nombre)
console.log(cabra1.edad)
cabra1.saludo()

// 4

console.log(Cabra.sonido())

// 5


console.log(Cabra.sonido())

// 6

class Persona{

    constructor(name, age){
        this.name=name
        this.age=age
    }

    caminar(){
        console.log("Puedo caminar")
    }
}

class Corredor extends Persona {

    caminar(){
        console.log("Yo corro")
    }

    constructor(name, age,experiencia){
        super(name,age)
        this.experiencia = experiencia
    }
}

let corredor1 = new Corredor("Nicolas",17,"5 years")
corredor1.caminar()

// 7
// 8

class Cliente{

    #name
    #apellidos
    #edad
    #bank

    constructor(name, apellidos, edad, bank){
        this.#name=name
        this.#apellidos=apellidos
        this.#edad=edad
        this.#bank=bank
    }

    get nombre(){
        return this.#name
    }

    set bank(newBank){
        this.#bank=newBank
    }
}

// 9

let cliente1= new Cliente("Nicolas","Rodriguez",17,"dsqcsqvwus")
console.log(cliente1.nombre)
cliente1.bank="sjxbscbac"

// 10

corredor1.caminar()