/**
 * Ejercicio 2: Escribe un bucle, parecido al del ejercicio 1,
 * que muestre por el terminal el mensaje "Yo también estoy en un bucle!" ; un total de 20 veces
 */

/**
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODc4MzU2M18yMjIwMzc5Ng
 */


/* Respuesta Gerard B */

// Este ejemplo lo podemos resolver tanto con un for como con un while

// El siguiente ejemplo lo hacemos con un for:
/*
let bucle = 20;

for (var i = 0; i < bucle; i++) {
  console.log("Yo también estoy en un bucle!");
}
*/

// El siguiente ejemplo lo haremos con un while:
let i = 0;

while (i < 20) {
    console.log("Yo también estoy en un bucle!");
    i++;
}