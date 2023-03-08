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

var edad=19;
if(edad==18){
    console.log("Congratulation, you first vote")
}else if(edad>18){
    console.log("Your vote is important, Welcome")
}
else{
console.log("Sory, you can't vote yet")
}


function playrol(chooseThing){

    if(chooseThing=="Paper"){
        console.log("Rock, You Lost");
    } else if(chooseThing=="Rock"){
        console.log("Rock, CROSH! We are TIE");
    } else if(chooseThing=="Scissors"){
        console.log("Paper, Omaigaaa, You Win this time =D");
    }
    else{
    console.log("Enter a valid parameter")
    }
}
playrol("Paper")
playrol("Rock")
playrol("Scissors")
playrol("IDK")

var n=3;

switch(n){
    case 2:
        console.log("Es un dos")
    break;
    case 3:
    console.log("Es un tres")
    break;
    case 4:
    console.log("Es un cuatro")
    break;
    default:
        console.log("No es nada")
}

var frutas = ["Manzana", "Platano","Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[3])
var masFrutas = frutas.push("Uvas")
frutas
var ultimoFrutas = frutas.pop("Uvas")
frutas
var primeras = frutas.unshift("Uvas")
frutas
/*var borrarFruta=fruas.shift("Uvas")
var posicion = frutas.indexOf("Cereza")*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var i = 0; i<=estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

let fullNames = [
    ["Israel", "Salinas"],
    ["Charles", "Silva"],
    ["David", "Moranchel"],
    ["Naomi", "López"],
    ["Rose", "Ortega"]
]
function nameInitials(fullNames){
    for(let i=0; i < fullNames.length; i++)
    {
        console.log(fullNames[i]);
    }

    console.log(nameInitials)

}
 /*Crear una función que reciba un array de números y devuelva la suma total de todos los números del array*/
/* let numbers=[45,12,3,9]
let total=0;
for(let i=0; i<numbers.length; i++){

 total+=numbers[i]
}
console.log(total) */

let numbersT= [34,6,10,7]
let resTotal=0
function sumaTotal(numbersT){
   for( let i=0; i<numbersT.length; i++){
        resTotal+=numbersT[i]
    } 
    return resTotal
 }
console.log(sumaTotal(numbersT))


 /*Crear una función que reciba un array de strings y devuelva un nuevo array con los strings ordenados alfabéticamente*/
let namesMain=['Fabi', 'Shahi', 'Shakti', 'Teki', 'Alma']
/* const sortArray = (namesMain) => namesMain.sort()
let sortedArray=(sortArray(namesMain));
console.log(sortedArray) */

 function alphaOrder(namesMain){
    let newNamesMain=namesMain
    return newNamesMain.sort()
}
console.log(alphaOrder(namesMain))
 


 /*Crear una función que reciba un array de strings y devuelva un nuevo array con los strings invertidos*/
 let orderString=['Bak', 'Rozh', 'Ani', 'Nassim']
 function invertString (orderString){
    let newInver=orderString
    return newInver.reverse()
 }
 console.log(invertString(orderString))

 const createRevertedString = (orderString) =>{
    let finalArray = []
    for(let i=0; i<orderString.length; i++){
        let originalWord=orderString[i]
        let revertedWord=originalWord.split("").reverse().join("")
        finalArray.push(revertedWord)
    }
    return finalArray
 }
 console.log(createRevertedString(orderString))




 /*Crear una función que reciba un string y me devuelva la cantidad de palabras que existen en ese string*/
 let stringLength='Me quiero morir, hay mucho camino que recorrer y muchas metas que cumplir'
 function lengthStri(stringLength){
    return stringLength.split(" ").length
 }
console.log(lengthStri(stringLength))
/*Otra opcion */
const countWordsByBlock = (stringLength) => stringLength.split (" ").length
console.log(countWordsByBlock(stringLength))
/*Otra opcion */
const countWordsBySpaces = (stringLength) =>{
    let spaceCount =0
    for(let i=0; i>stringLength.length; i++){
        let currentChar =stringLength[i]
        currentChar === " " ? spaceCount++ : null
    }
    return spaceCount + 1
}
console.log (countWordsBySpaces(stringLength))

 /*Crear una función que reciba una matriz de nombres y apellidos y me devuelva un nuevo araay con las iniciles de esos nombres*/
    var fullNamess= [
        ["Mar", "Jara"],
        ["Sonua", "Rodri"],
        ["Karla", "Ortega"],
        ["Ale", "Demi"],
        ["Mensi", "Bakos"]
    ]
const getAbbreviations=(fullNamess)=>{
    let resultArray =[]
    for(let i=0; i<fullNamess.length; i++){
        let firstName=fullNamess[i][0]
        let lastName=fullNamess[i][1]
        let nameInitial =`${firstName.charAt(0)}.`  /* M. */
        let lastInitial =`${lastName.charAt(0)}.`  /* J. */
        let finalString =`${nameInitial} ${lastInitial}`
        resultArray.push(finalString)
    }
    return resultArray
}
console.log (getAbbreviations(fullNamess))

/*1.-Crear una función que recibe un string y retorna true si la palabra dada es un palíndromo y false si no lo es*/

let wordOne="ana"
let wordTwo ="perico"
let wordThree ="radar"

const palindromo=(word) =>{
    separarCadena=word.split("").reverse().join("") /* Split:separa la cadena en un array, Reverse: invierte los caracteres, Join: une los elementos en una cadena */
    return separarCadena==word ? true : false /*If ternario */
}
console.log(palindromo("wordOne"))

/*2.-Crear una función que recibe un string con varias palabras y cambia a mayúscula la primer letra de cada palabra*/
let phraseOne="hola, cuando la motivación acaba, la disciplina renace"
let pharseTwo="vamonos a la playa"

function stringUp (pharse){
let newPharse=pharse.split(" ")
for(i=0; i<newPharse.length; i++){
    newPharse[i]=newPharse[i][0].toUpperCase()+newPharse[i].substring(1)
}
return newPharse.join(" ")
} 
console.log(stringUp(phraseOne))
console.log(stringUp(pharseTwo))

/*  MIS INTENTOS
let newPharse=pharseTwo.split(" ")
 for(let i=0; i<newPharse.length; i++){
    newPharse[i]=newPharse[i][0].toUpperCase() + newPharse[i].substring(1) 
    newPharse.join(" ")

}
console.log(newPharse)*/


/*3.- Crear una función que recibe un string con multiples palabras y regresa únicamente la palabra mas larga en la oración*/
let stringOne="Quiero mi work permit"
let stringTwoo="Quiero viajar a Australia a estudiar Inglés"

function moreThan (stringComplete){
    let separateString = stringComplete.split(" ")
    let count=" "
    for(let i=0; i<separateString.length; i++){
        if(count.length < separateString[i].length){
            count=separateString[i]
        }
    }
   return count
}

console.log(moreThan(stringOne))
console.log(moreThan(stringTwoo))
/**Ejemplo Con Isra */
let text="este es un texto con muchas palabras de mucha longitudd"
const getLongestWord = (textToEvaluate) => {
let textToArray = textToEvaluate.split(" ")
let longestWord = ""
let arrayWord=[]
for(let i=0; i<textToArray.length; i++){  /**Recorremos el array hasta conseguir la palabra con mayor caracteres */
if(textToArray[i].length>longestWord.length){
    longestWord=textToArray[i] 
    }
console.log(longestWord)
}

for(let i=0; i<textToArray.length; i++){ /**Una vez teniendo la palabra con mayor caracteres, recorremos de nuebo el array para encontrar otra  */
    textToArray[i].length===longestWord.length ? arrayWord.push(textToArray[i]): null;
}
return arrayWord.length > 1 ? `Las palabras más largas de este texto son ${arrayWord.join()}` : `La palabra más larga de este texto es ${arrayWord[0]}`;
}
console.log(getLongestWord(text))

/*4.-Crear una función que recibe 2 argumentos una cadena de texto y un carácter, la función regresa un número que representa el número de veces que se repite el carácter en la cadena dada */

/**Callbacks */

let signatures = ["MAtemáticas", "Español", " Historia", "Química"]  /** Array */
wheelCallback =(signature) => `Te voy a hacer una pregunta de ${signature}`  /** Función que se invocara en en la siguiente función */
const rollTheWheell = (signatures, wheelCallback) =>{  /** Función que invoca el callback*/
    let selectedSignature= signatures[Math.floor(Math.random()*4)+1]  /** Seleccionamos un elemento random del array*/
    console.log(selectedSignature);
    return wheelCallback(selectedSignature)     /**Invocamos callback con el argumento seleccionado random y lo retornamos */

}
let result1=rollTheWheell(signatures, wheelCallback);
let result2=rollTheWheell(signatures, wheelCallback);

console.log(result1,result2)

/**Receta para gelatina 
 * 
 * 1-El agua esta hirviendo
 * 2-El sobre esta vertido
 * 3-La mezcla esta enfriándose
 * 4-Ya puedes comer tu gelatina!

*/
 setTimeout(stepOne=() => {console.log("El agua esta hirviendo")},3000)
 setTimeout(stepTwoo=() => {console.log("El sobre esta vertido")},4000)
 setTimeout(stepThree=() => {console.log("La mezcla esta enfriándose")},6000)
 setTimeout(steFour=() => {console.log("Ya puedes comer tu gelatina!")},7000)
 makeGelatina=(stepOne, stepTwo, stepThree,stepFour) => {
}



let resultOnes=makeGelatina (stepOne,stepTwoo,stepThree,steFour)

console.log(resultOnes)

/**
 * Crear una funcion que envie un saludo o despedida dependiendo de día o de noche a una persona con callback
 */
 
let momentoOne="Dia"
let momentoTwo= "Noche"
let nombres=["Arturito", "Karla", "Sofía", "Carlos", "Shanin"]

const saludar=(persona)=> console.log(`Hola ${persona}`)
const despedir=(persona)=> console.log(`Adiós ${persona}`)

let principal=(momento,callBackSaludar, callBackDespedir, nombre)=>{
    let azarnombre=nombre[Math.floor(Math.random()*4)+1]
    /**console.log(azarnombre)*/
    momento=="Dia" ? callBackSaludar(azarnombre):callBackDespedir(azarnombre)

}

console.log(principal(momentoOne,saludar,despedir,nombres))
console.log(principal(momentoTwo,saludar,despedir,nombres))


/** Construir una casa
 * 1.- Poner cimientos
 * 2.- Poner loza
 * 3.- Pintarla
 * 4.- Open House
 */

const openHouse=(pintar,loza,cimientos)=>  {
    cimientos()
    loza()
    pintar()
    setTimeout(console.log("Revisa la Casa"),6000)
}
const pintarla = (loza)=> {
   setTimeout(function(){loza()},5000) 
   console.log("La casa ya está pintada")    
}
const putLoza=(pintarla)=> {
    console.log("La loza esta ready?")
    setTimeout(function(){pintarla()},5000) 
    

}
const putCimientos=(loza)=>{
    console.log("Los cimientos están listos")
    setTimeout(function(){loza()},3000) 
  
} 

openHouse(putCimientos, putLoza, pintarla)
