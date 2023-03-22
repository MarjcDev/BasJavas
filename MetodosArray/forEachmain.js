/**For Each
 * Método Iterativo de array que recorre cada uno de los elementos de un array y ejecuta un callback por cada elemento. 
 */

let numbers=["uno", "dos", "tres", "cuatro", "cinco"]

 /* Función Anonima con Callback */
 numbers.forEach((item, index, array) => {  
    console.log(`Index: ${index}, Item: ${item}`)
    
}) 

/**Función declarativa-Callback */
const printContent=(item, index, array) => {
    console.log(`Index: ${index}, Item: ${item}`)
}
numbers.forEach(printContent);

/** forEach no me devuelve nada, almenos que se encapsule en una función que ejecute algo*/
let scores=[5,6,7,8,2,1]

const addScores=(scoresArray)=>{   /** Función addScore s (Función flecha) tiene un argumento y regresa la suma de cada item con la ayuda del forEach  */
    let total=0
    scoresArray.forEach((item) => total += item)
    return total
}

let result=addScores(scores)
console.log(result)


