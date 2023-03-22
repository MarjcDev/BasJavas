//MAP
/**Quiero un nuevo array que contenga cada uno de los números del array original multiplicado por sí mismo */
let numbers=[1,2,3,4,5]

const getResult=(originalArray)=>{
    let result=originalArray.map(item=>item*item)
    return result
}
console.log(getResult(numbers))

//FILTER
/**Quiero un nuevo array que contenga únicamente los números pares */

const getResultFilter=(originalArray)=>{
    let result=originalArray.filter(item=>item%2===0)
        return result
}

console.log(getResultFilter(numbers))

//REDUCE
/**Quiero la sumatoria  de todos los números contenidos en el array original */
const getTotal = (originalArray) => {
let result = originalArray.reduce((accum, current)=>accum+current,0)
return result
}
console.log(getTotal(numbers))

//FIND
//Quiero encontrar el primer número que sea divisible entre 5

const getFirst = (originalArray) =>{
    let result=originalArray.find(item => item%5===0)
    return result;
}
console.log(getFirst(numbers))


let travels = [
    {
      averageSpeed: 100 /*km/h*/,
      distance: 62139 /*km*/,
      consumedFuel: 857 /*l*/,
      tag: "Viaje 1",
    },
    {
      averageSpeed: 84,
      distance: 45485,
      consumedFuel: 1400,
      tag: "Viaje 2",
    },
    {
      averageSpeed: 75,
      distance: 94887,
      consumedFuel: 986,
      tag: "Viaje 3",
    },
  ];

  const getDistance=(array)=>{
    let result= array.reduce((accum,current)=>accum+current.distance, 0)/array.length
    return result
  }
  console.log(getDistance(travels))

  