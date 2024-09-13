// Objetos

// Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como
// nombre, edad y género. Luego, muestra la información de esa persona por la consola.

const persona = {
    nombre: "Javier",
    edad: 30,
    genero: "Masculino"
  };
  
  console.log(persona); // {nombre: 'Javier', edad: 30, genero: 'Masculino'}
  console.log(persona.nombre); // Javier
  console.log(persona.edad); // 30
  console.log(persona.genero); // Masculino
  console.log(typeof persona); // object
  console.log(typeof persona.nombre); // string
  console.log(typeof persona.edad); // number
  console.log(typeof persona.genero); // string
  
  // 2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y 
  // indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, 
  // imprimir cada propiedad del objeto y el tipo de dato que es.

  const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: 3,
    enBuenEstado: true
  };
  
  console.log(caja); // {cuadernos: 5, lapices: 10, papel: 100, fotografias: 3, enBuenEstado: true}
  console.log(caja.cuadernos); // 5
  console.log(caja.lapices); // 10
  console.log(caja.papel); // 100
  console.log(caja.fotografias); // 3
  console.log(caja.enBuenEstado); // true
  console.log(typeof caja); // object
  console.log(typeof caja.cuadernos); // number
  console.log(typeof caja.lapices); // number
  console.log(typeof caja.papel); // number
  console.log(typeof caja.fotografias); // number
  console.log(typeof caja.enBuenEstado); // boolean
  
  