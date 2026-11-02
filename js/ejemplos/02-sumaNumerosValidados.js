// //Realizar una suma de dos numeros:  Crear un algoritmo que permita al usuario ingresar al menos dos numeros, realizar la suma de ambos y mostrar el resultado

//tip: la mayor cantidad de veces las variables se declaran con const (a menos que sepamos desde el inicio que luego vamos a cambiarle el valor)

const numero1 = parseInt(prompt('Ingresa el primer numero')
)
const numero2 = parseInt(prompt('Ingresa el segundo numero')
)

//El parseint + (Prompt + 'Msj' ) Javascript convierte el texto/string en numero entero para hacer la suma y no solo poner los valores uno a lado del otro

// isNaN (variable) = true si pongo un texto, false si pongo un numero
// una pregunta SI = if
/* if/SI + (condicion logica) {las lineas que quiero hacer si se cumple la condicion}
Sino/else {las lineas que quiero hacer si se cumple la condicion}*/

console.log(isNaN(numero1))
// operador logico NOT - !
// !true = false
// !false = true
/* Para preguntar si el contenido de la variable numero1 (Y) el contenido de la variable numero2 es un numero? */
if (!isNaN(numero1) && !isNaN(numero2)){
    const resultado = numero1 + numero2
console.log('El resultado es: ' + resultado)}

else{console.log('No ingresaste un numero valido')}


//