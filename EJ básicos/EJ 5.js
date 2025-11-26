/*

Crea un script que pida al usuario su nombre y edad (puedes usar prompt() si estás en un navegador). 
Verifique si es mayor o menor de edad. Muestre un mensaje concatenando texto y variables.

*/

let nombre = prompt("Ingresa tu nombre")
let edad = prompt("Ingresa tu edad")

if (edad > 18){
  console.log(`${nombre} es mayor de edad, su edad es ${edad}`)
} else {
  console.log(`${nombre} no es mayor de edad, su edad es ${edad}`)
}