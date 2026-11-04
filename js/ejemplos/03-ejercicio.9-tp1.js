    /*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

// hola

const frase = prompt ('Ingresa una frase de hasta 5 caracteres')

console.log(frase.length)
console.log(frase.charAt(0))

// A == B verifica los valores 1 == '1'
// A === B Verifica los valores como el tipo de dato sea igual 1 ==== '1'
// A ==/== B Verifica los valores como el tipo de dato sea igual 1 === '1'

if(frase.charAt(0) == 'a' || frase.charAt(0) == 'e' || frase.charAt(0) == 'i' || frase.charAt(0) == 'o' || frase.charAt(0) == 'u'){
    console.log(frase.charAt(0))
} 