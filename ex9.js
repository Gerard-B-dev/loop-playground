/**
 * El bucle infinito
 *
 * El siguiente bucle 'while', no acaba nunca. ¿Por qué?
 * 
 * Arreglalo para que la palabra "Ejecutar!" se muestre 10 veces por el terminal
 */

let n=10;
let i=0;

while(i<n) {
    console.log("Ejecutar!")
    i++;

}

// Respuesta Gerard B --> Por defecto nos daba un bucle infinito porque en el código del while no teníamos el incremento i++
// - Hemos añadido el incremento i++; y por tanto el bucle se ejecuta 10 veces

