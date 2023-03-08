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
