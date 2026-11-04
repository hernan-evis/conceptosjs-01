/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/

const numero1 = parseInt(prompt('Ingresa el primer numero')
)
const numero2 = parseInt(prompt('Ingresa el segundo numero')
)

if (numero1 > numero2){
    console.log(numero1 +' Es el numero mayor')
}
else if(numero2 > numero1)
console.log(numero2 +' Es el numero mayor')