// Arrays

// 1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
const numeros = [1, 2, 3, 4, 5];

// Agregar un número al final del arreglo
numeros.push(6);

function sumaArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

console.log(numeros); // [1, 2, 3, 4, 5, 6]
console.log(sumaArray(numeros)); // 21

// Eliminar el último elemento del arreglo
numeros.pop();

console.log(numeros); // [1, 2, 3, 4, 5]

// 2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedioArray(numeros) {
  const suma = sumaArray(numeros); // Usamos la función sumaArray que ya creamos
  return suma / numeros.length;
}

console.log(promedioArray(numeros)); // 3

// 3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
const cadenas = ["prueba", "ejemplo", "codigo"];

// Agregar un string al final del arreglo
cadenas.push("javascript");

function convertirMayusculasArray(cadenas) {
  let nuevoArray = [];
  for (let i = 0; i < cadenas.length; i++) {
    nuevoArray.push(cadenas[i].toUpperCase());
  }
  return nuevoArray;
}

console.log(cadenas); // ["prueba", "ejemplo", "codigo", "javascript"]
console.log(convertirMayusculasArray(cadenas)); // ["PRUEBA", "EJEMPLO", "CODIGO", "JAVASCRIPT"]

// 4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
const numerosPares = [1, 2, 3, 4, 5, 6];

// Eliminar el último número del arreglo
numerosPares.pop();

function numerosParesArray(numeros) {
  let nuevoArray = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      nuevoArray.push(numeros[i]);
    }
  }
  return nuevoArray;
}

console.log(numerosPares); // [1, 2, 3, 4, 5]
console.log(numerosParesArray(numerosPares)); // [2, 4]
