/**Función Convencional */
const capitalize =(textToCapitalize)=> { /**nombre */
let firstLetter=textToCapitalize.charAt(0) /*Me regresa en una variable el el elemento en la posición () */
let rest = textToCapitalize.substring(1) /** Me regresa lo subsiguiente */
let result=firstLetter.toUpperCase()+rest/*Damaris*/
return result
}
/** Funciones Flecha */
const capitalizeUn = textToCapitalize =>(textToCapitalize.charAt(0).toUpperCase()+textToCapitalize.substring(1))
const funcionFlecha=capitalizeUn("marlen")
console.log(funcionFlecha)

/* Crear una funcion que reciba un nombre y nos entregue un nuevo string con la letra inicial y la letra final de ese nombre
    input => Israel
    output => Il */

    const firstAndLast = (nameProfile) =>{
        return nameProfile.charAt(0)+nameProfile.slice(-1)
    }
    let names= firstAndLast("Moi")
    console.log(names)
/*crear una función que me devuelva el resultado de la suma de 2 números*/

const addition = (firstNumber, secondNumber) =>{

    return firstNumber + secondNumber
}

let result=addition(6,7)
console.log(result)

/* crear una función que me devuelva el resultado de la resta de 2 números */
 
const rest = (firstNumber, secondNumber) =>{

    return firstNumber - secondNumber
}

let resultrest=rest(4,8)
console.log(resultrest)

/*crear una función que me devuelva el resultado de la multiplicación de 2 números*/
const multiplacation = (firstNumber, secondNumber) => firstNumber*secondNumber;
let resultmulti=multiplacation(5,5)
console.log(resultmulti)

/*5.- crear una función que me devuelva el resultado de la división de 2 números */
const divition = (firstNumber, secondNumber) => firstNumber/secondNumber;
let resultDivi=divition(10,5)
console.log(resultDivi)

/* Crear una fución que reciba el nombre de alguna operación aritmética, y 2 números, debe devolver el resultado de la operación aritmética indicada, entre los dos números recibidos
   input => 'suma', 2, 3
   output => 5
   input => 'resta', 8, 2
   output => 6
*/

const operator = (nombreOper, firstNumber, secondNumber) =>{
let result=(2,3)
    switch(nombreOper) {
        case addition:
        result= firstNumber+secondNumber
        break;
        
        case rest:
            result=firstNumber-secondNumber
        break;

    }
    return result
}
let additionResult=operator("addition", 2,3) 
console.log(result)

/**Función que me permita saber si puedo votar o no */
var edad=19;
if(edad==18){
    console.log("Congratulation, you first vote")
}else if(edad>18){
    console.log("Your vote is important, Welcome")
}
else{
console.log("Sory, you can't vote yet")
}
