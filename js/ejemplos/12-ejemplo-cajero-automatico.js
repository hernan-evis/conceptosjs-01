// Cee un programa al estilo de un cajero automatico con las siguientes opciones:
// 1- Consultar el saldo
// 2- Ingresar dinero
// 3- Extraer dinero

/* Para ejecutar un programa con muchas opciones como es un Menu. 
//Lo mejor es usar la variable SWITCH que toma todos los diferentes casos de opciones y los agrupa como en un menu.
// Tambien se puede hacer anidando todas las variables pero es mucho mas extenso y propenso a errores.
// */
let saldo = 5000;

do {
  const opcion = prompt(
    "Ingresá una opcion: 1- Consultar el saldo, 2- Ingresar dinero, 3- Extraer dinero",
  );

  switch (opcion) {
    case "1":
      alert(" Tu saldo es: $" + saldo);
      break;

    case "2":
      const deposito = parseFloat(
        prompt("Ingrese el monto que desea depositar "),
      );
      saldo = saldo += deposito; // tambien puedo escribir - saldo += deposito
      alert("Ingresaste $" + deposito + ", tu salo actual es $" + saldo);
      // Tambien puedo concatenar sin usar el simbolo(+) y se hace con Template Literal (``)

      //alert(`Ingresaste $ ${deposito}, tu salo actual es $ ${saldo}`)
      break;
    case "3":
      const montoExtraer = parseFloat(
        prompt("Ingrese el monto que desea extraer "),
      );
      if (montoExtraer <= saldo) {
        saldo = saldo - montoExtraer;
        alert(`Retiraste $${montoExtraer}, tu saldo actual es: $${saldo}`);
      } else {
        alert("Fondos insuficientes");
      }
      break;
    default:
      alert("Opcion invalida");
  }
} while (confirm("Quieres realizar otra operacion? "));
