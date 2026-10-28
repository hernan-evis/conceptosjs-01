// //Realizar una suma de dos numeros:  Crear un algoritmo que permita al usuario ingresar al menos dos numeros, realizar la suma de ambos y mostrar el resultado

//tip: la mayor cantidad de veces las variables se declaran con const (a menos que sepamos desde el inicio que luego vamos a cambiarle el valor)

const numero1 = parseInt(prompt('Ingresa el primer numero')
)
const numero2 = parseInt(prompt('Ingresa el segundo numero')
)

//El parseint + (Prompt + 'Msj' ) Javascript convierte el texto/string en numero entero para hacer la suma y no solo poner los valores uno a lado del otro

const resultado = numero1 + numero2
console.log('El resultadoes: ' + resultado)

//