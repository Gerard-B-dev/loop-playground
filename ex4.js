/**
 * Parametrizar un bucle
 *
 * Es común que las veces que tiene que ejecutarse un bucle venga dado por el valor de una variable. Cambia el código que tienes a continuación para que el bucle se ejecute siempre el número de veces que almacena el valor de la variable 'numeroVeces'.
 *
 * Es decir, si numeroVeces = 5; deberíamos ver por el terminal 5 veces el texto "Ejecuto!"
 * Si numeroVeces = 1; deberíamos ver por el terminal 1 sola vez el texto "Ejecuto!"
 *
 *
 * Piensa bien que debes cambiar. Solo has de hacer una modificación para conseguirlo.
 * Es OBLIGATORIO usar la variable 'numeroVeces' en el bucle!
 */

let numeroVeces = 5;

for (let i = 0; i < numeroVeces; i++) {
  console.log("Ejecuto!");
}

// Cambios Gerard B--> Hemos suprimido el número 10 del for y hemos añadido el nombre de la variable numeroVeces dentro del for, ahora cuando declaremos la variable número de veces y introduzcamos el valor deseado, ese es el valor que dependerá el numero de veces que se repita el bucle hasta finalizar.
/**
 * Resultado esperado cuando numeroVeces=5: https://oscarm.tinytake.com/msc/ODc4MzYxMV8yMjIwMzg0NQ
 */