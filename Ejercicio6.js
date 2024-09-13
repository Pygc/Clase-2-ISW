// Funciones

// 1. Crea una función que reciba un string y retorne el string en mayúsculas.
function aMayusculas(cadena) {
    return cadena.toUpperCase();
  }
  
  const resultado1 = aMayusculas("prueba");
  console.log(resultado1); // "PRUEBA"
  
  // 2. Crea una función que reciba un string y retorne el string en minúsculas.
  function aMinusculas(cadena) {
    return cadena.toLowerCase();
  }
  
  const resultado2 = aMinusculas("PRUEBA");
  console.log(resultado2); // "prueba"
  
  // 3. Crear una función que reciba como parámetro 2 números y los reste.
  function restar(numero1, numero2) {
    return numero1 - numero2;
  }
  
  const resultado3 = restar(20, 10);
  console.log(resultado3); // 10
  
  // 4. Crear una función que reciba como parámetro 2 números y los divida.
  function dividir(numero1, numero2) {
    if (numero2 === 0) {
      return "No se puede dividir por cero";
    }
    return numero1 / numero2;
  }
  
  const resultado4 = dividir(20, 4);
  console.log(resultado4); // 5
  
  // 5. Crear una función que reciba como parámetro 2 números y los multiplique.
  function multiplicar(numero1, numero2) {
    return numero1 * numero2;
  }
  
  const resultado5 = multiplicar(10, 5);
  console.log(resultado5); // 50
  
  // 6. Crear una función que reciba un string y devuelva la longitud del string.
  function longitudCadena(cadena) {
    return cadena.length;
  }
  
  const resultado6 = longitudCadena("prueba");
  console.log(resultado6); // 6
  
  