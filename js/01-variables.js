// Esto es un comentario simple

/* Esto es un comentario
de
multiples lineas*/

// Para Crear variables (let - const - var)
// Tipos de datos: Primitivos, referencia

//declarar/crear una variable
let numero = 10;
let decimalNumber = 10.5;

console.log('Este es un mensaje de prueba')
console.log(numero)

// Concatenar (texto entre comillas + variable)

console.log('El contenido de la variable es '+ numero)
console.log('El contenido de la variable es ', numero)
console.log(decimalNumber)

// Para saber que tipo de dato hay dentro de una variable se usa typeof

console.log(typeof(decimalNumber))

let nombre = 'Hernan '
console.log(typeof(nombre))
// tipo de dato string es igual a (Texto)

// Tipo de valor booleano es igual a (true, false)
let encendido = true
console.log(typeof(encendido))

// Para crear una variable/caja que por ahora no tendra contenio (Undefined)

let prueba
console.log (typeof(prueba))
console.log(prueba)

//Para crear una variable/caja que no contendra nada (null)
let vacio = null
console.log(typeof(vacio))
console.log(vacio)

//Cambio el contenido de una variable (nombro la variable y le asigno el valor sin poner let al inicio)
vacio = 'Prueba'
console.log(vacio)

//Variables tipo CONST (no puedo asignar otro valor a una variable creada con const)
const url = 'https://www.youtube.com/shorts/b0k5KQ-ampM'
console.log(url)
