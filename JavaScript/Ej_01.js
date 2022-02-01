"use strict"

console.log("Hola ejercicio 1")

const num = 100
let contrasena = Math.round(Math.random(0,100) *num);
console.log(contrasena)


for (let i=0; i<=4; i++){

const num_usuario = prompt("Dime un numero del 1 al 100")

    if (parseInt(num_usuario) === contrasena) {
     alert("Has ganado");
     break;
    }
    else if ( i === 4) {
        alert("Has perdido");
        break;
    }    
    
    else if (parseInt(num_usuario) < contrasena) {
        alert("El numero que buscas es mayor")
    }
    else if (parseInt(num_usuario) > contrasena) {
        alert("El numero que buscas es menor")
    }
    
}

