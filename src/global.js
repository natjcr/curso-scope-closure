//VARIABLES

var a; //declaración
var b = 'b'; // declaracion + asignacion
b = 'bb'; // reasignar el valor
var a = 'aa'; // redeclaración

//GLOBAL SCOPE

var fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//EJEMPLO
function countries() {
    contry = 'Colombia'; // asignación global, se accede afuera
    console.log(contry);
}
countries();
console.log(contry);

//FUNCTION SCOPE

function greeting() {
    let userName = 'Natalia'; //el alcance solo es dentro de la función
    console.log(userName);

    if (userName === 'Natalia') {
        console.log(`Hello ${userName}!`);
    }
}
greeting();

//BLOCK SCOPE

function fruits() {
    if(true) { // dentro del bloque si se pueden usar, 
        var fruit1 = 'Apple';// function scope
        let fruit2 = 'Kiwi'; // block scope, no se accede
        const fruit3 = 'Mango'; // block scope, no se accede
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
   
}
fruits();

//REASIGNACION Y REDECLARACIÓN
var firstName; // variable con valor undefined (declarar)
firstName = 'Natalia'; // asignar valor
console.log(firstName); // mostrar

var lastName = 'Rojas'; // declarar, asignar
lastName = 'Camila'; // reasignar
console.log(lastName); 

var secondName = 'Judith'; // declarando y asignando
var secondName = 'Camila'; // reasignando
console.log(secondName);

// let
let fruit = 'Apple'; // declarar asignar
fruit = 'kiwi'; //reasginar

let fruit = 'Mango'; //no se puede redeclarar 

//const 
const animal = 'dog'; // se declara y asugna
animal = 'cat'; //reasignando no se puede
console.log(animal);

const vehicles = [];
vehicles.push("🚗") // sirve para reasignar con const
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

//STRICT
'use strict';
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}
console.log(myFunction);