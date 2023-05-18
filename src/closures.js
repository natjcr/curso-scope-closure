//CLOSURES: funcion dentro de otra función
const myGlobal = 0;
function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}
myFunction();

//EJEMPLO 
function sumWithClosure(firstNum) {
    return function (secondNum) {
      if (secondNum) {
        return secondNum + firstNum;
      }
      return firstNum;
    };
  }

// PRACTICA funcion anidada
function greeting() {
    let userName = 'Natalia';

    function displayUserName() {
        return `hello ${userName}`;
    }
    return displayUserName;
}
const g = greeting();
console.log(g);//retornal la funcion displayUsername
console.log(g());//entrega el valor, recuerda el contexto

