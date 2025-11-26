/*

Escribe un programa que compare dos numeros y muestre en consola si son mayores, menores o iguales

*/

let numero1 = prompt("Ingrese el primer numero: ")
let numero2 = prompt("Ingrese el segundo numero: ")

if (numero1 > numero2) {
    console.log("El primer numero es mayor que el segundo.")
} else if (numero1 < numero2) {
    console.log("El primer numero es menor que el segundo.")
} else {
    console.log("Ambos numeros son iguales.")
}

