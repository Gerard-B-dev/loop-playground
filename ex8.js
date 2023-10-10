/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal 
 * escriba 5 veces exactamente "Ejecuto!". Actualmente lo escribe 6 veces. Porque?
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 */

let veces = 5
let i = 0

while (i<veces) {
    console.log("Ejecuto!")
    i++
}

// Respuesta Gerard B --> El bucle inicialmente se nos ppresenta commo (i <= 5), lo inicializamos desde 0 se ejecuta 6 veces
// - Para que se ejecute 5 veces la condición ha de ser --> (i < 5)
