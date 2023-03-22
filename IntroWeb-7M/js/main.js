/**Métodos para crear elementos en Javascript */

let var1=document.createElement("p")
let var2=document.createElement("div")
let var3=document.createElement("h1")

console.log(var1, var2,var3)

/**Método para crear un Nodo de Texto */

let paragraphContent = document.createTextNode("Hola Koders")
console.log(paragraphContent)

/**Método appendChild() agregar un hijo a otro elemento 
 * Sintaxis: parentNode.appendchild(child)  - Cómo el push en arrays
*/

var1.appendChild(paragraphContent)
console.log(var1)
/**Pintarlo en la página */
document.body.appendChild(var1)

 