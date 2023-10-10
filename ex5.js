/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca.
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 *
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces.
 * ATENCIÓN: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

let veces = 10;

// PROHIBIDO modificar el código a partir de aquí

for (let i = 0; i < veces; i++) {
  console.log("No me voy a ejecutar...");
}

/* Respuesta Gerard B 

- Apartado 1 --> Tal y como se presenta el ejercicio no se ejecuta porque la variable veces = 5;  y la inicialización en el bucle for es 5 también (let i =5;). Para que ejecutara algo, tendriasmos por ejemplo que inicializar en el for a 0. --> let i = 0;
- Apartado 2 --> Los cambios realizados son: La variable veces cambiamos su valor a 10 --> let veces = 10;
 En el for inicializamos a 0 --> let i = 0;
 Noa imprimirá el mensaje 10 veces
 
*/

