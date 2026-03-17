// clases 

class Person{

    constructor(name, age, alias){
        this.name =name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person= new Person("Nicolas",17,"Pro")
let person2= new Person("Nicolas",17,"Pro")

console.log(person)
console.log(person2)

console.log(typeof person)

class DefaultPerson {

    constructor(name= "Sin nombre", age=0, alias ="Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Nicolas",17)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "El pro"

console.log(person3.alias)

// Funciones en clases

class PersonWhitMethod{

    constructor(name, age, alias){
        this.name =name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("La persona camina.")
    }
}

let person4 = new PersonWhitMethod("Nicolas",17,"El pro")
person4.walk()

// Propiedades privadas 

class PrivatePerson {

    #bank

    constructor(name, age, alias,bank){
        this.name =name
        this.age = age
        this.alias = alias
        this.bank = bank
    }

    pay(){
        this.#bank
    }
}

let person5 = new PrivatePerson("Nicolas",17,"El pro","11111223421")

// No puedo acceder a bank

// console.log(person5.bank)
// person5.bank= "New 12321132" 

console.log(person5)

// Getters y setters

class GetPerson{

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias,bank){
        this.#name =name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }
}

let person6 = new GetPerson("Nicolas",17,"El pro", "113143de")

console.log(person6.name)
person6.bank = "udwsbewdube"

// Herencia

class Animal{

    constructor(name){
        this.name =name
    }

    sound(){
        console.log("Emite un sonido generico")
    }
}

class Dog extends Animal{

    constructor(name,size){
        super(name)
        this.size = size
    }

    run(){
        console.log("El perro corre")
    }
}

let myDog = new Dog("Niño")
myDog.run()
myDog.sound()

// metodos estatico  

class MathOperations{

    static sum(a,b){
        return a+b
    }
}

console.log(MathOperations.sum(10,4))