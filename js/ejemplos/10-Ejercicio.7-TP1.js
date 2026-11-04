/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/


const numero1 = parseInt(prompt('Ingresá el primer número'));
const numero2 = parseInt(prompt('Ingresá el segundo número'));
const numero3 = parseInt(prompt('Ingresá el tercer número'));

if (numero1 > numero2 && numero1 > numero3){
    console.log ('El ' + numero1 + ' es el número más grande' );
}
    else if (numero2 > numero1 && numero2 > numero3){
    console.log ('El ' + numero2 + ' es el número más grande' );
    }
else {
        console.log ('El ' + numero3 + ' es el número más grande' );

}