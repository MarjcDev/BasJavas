/*devolver un nuevo array con los nombres completos en un sólo string
let fullNames = [
    ["Charles", "Silva"],
    ["Naomi", "López"],
    ["Rose", "Ortega"]
]

const createNames = (namesArray)=>{
    let name=namesArray[0][1]
    let lastName=namesArray[0][2]
    console.log(name, lastName)
}

const result=createNames(fullNames) */

/**Crear una función que me diga número por número si el número es par o impar */
let numbers=[1,2,3,4,13,15,18]
numbers.forEach((item)=>{item%2===0 ? console.log(`El número ${item} es par`):console.log(`El número ${item} es impar`)})

/**Por cada canción, indicar  la cantidad de palabras y de caracteres que tiene el nombre de la canción */
let song  =[
    "afterlife",
    "Sumer is gone",
    "We stole the show"
]
song.forEach((item)=>{
let wordSong=item.length
let caracterSong=item.split(" ").length
console.log(`El número de caracteres ${wordSong} y palabras ${caracterSong} de ${item}` )
})

/**Isra */
const manu = (array) => {
    array.forEach((item) => {
      let charCount = item.length;
      let wordCount = item.split(" ").length;
      console.log(
        `El nombre de la canción ${item} tiene ${charCount} caracteres y ${wordCount} palabras`
      );
    });
  };
  manu(song);

/*Para cada puntuación, necesito saber si esta por debajo del promedio o si esta por encima del promedio, y a cuántos puntos de distancia esta del promedio*/
  let average = 15;
  let scores = [16, 7, 12, 18, 23, 12, 6, 15];
 
  /* numero>average ? Esta arriba: Esta abajo  | puntos=average-numero */

  const mar=(promedio,points)=>{
    points.forEach((item)=>{ 
        let puntosDes=0
        if(item>promedio){
            puntosDes=item-promedio
            console.log(`El numero ${item} Es Mayor que ${promedio} por ${puntosDes}`)
            return
        }
        else
        puntosDes=promedio-item
        console.log(`El numero ${item} Es menor que ${promedio} por ${puntosDes}`)
    })
}

mar(average, scores)

/**Ejemplo Isra */
const otherFunction = (array) => {
    array.forEach((item) => {
      let result = item - average;
      if (result !== 0 && result < 0) {
        console.log(`el número ${item} esta por debajo del promedio por ${Math.abs(result)} puntos`); /**valores absolutos */
      } else if (result !== 0 && result > 0) {
        console.log(`el número ${item} esta por encima del promedio por ${Math.abs(result)} puntos`);
      } else 
        console.log(`el número ${item} es igual al promedio`);
      })
    }
  otherFunction(scores);

  /*Ejemplo Javi*/
  const upDown=(array)=>{
    array.forEach(item=>{
        if(item===average){
            console.log(`El número  ${item} es igual al promedio ${average}`)
            return
        }
        item< average ? console.log(`El número ${item} es menor que ${average}`): console.log(`El número ${item} es mayor que ${average}`)
    })
  }
  upDown(scores)

  /*Necesito saber para cada producto, cúal será el precio final
"el ${producto} tiene un precio original de {precio} y un precio final de {preciofinal}"
*/
  let savings = 400;
  let products = [
    {
      name: "Producto 1",
      price: 600,
      discount: 20,
    },
    {
      name: "Producto 2",
      price: 300,
      discount: 15,
    },
    {
      name: "Producto 3",
      price: 785,
      discount: 10,
    },
  ];
  let descountMar=(array)=>{
    let totaldesc
    array.forEach((item)=>{
       totaldesc= item.price-((item.price * item.discount)/100)
       console.log(`El producto ${item.name} tiene un precio original de ${item.price} y un precio final de ${totaldesc}`)

    })
  }
  descountMar(products)

  const hector=(array)=>{
    array.forEach((product)=>{
    let{name, price, discount}=product;
    console.log(`El producto ${name} tiene un precio  de ${price} y un precio final de ${price-price*(discount/100)}`)
})
  }
  hector(products)

  /**Necesito saber si con mis ahorros me alcanza para cada producto, si me alcanza necesito saber
   * cuanto me sobraria, y sino necesito saber cuanto  me faltaría   1:24 01-03
   */

  let shopMar=(array)=>{
    let chancheCoins=0;
    array.forEach(element => {
      console.log(`El total es ${element.price} y pagas ${savings}`)
      chancheCoins=Math.abs(savings-element.price)
      if(element.price>savings){
        console.log(`No te alcanza, necesitas ${chancheCoins} para completar tu compra`)
      } else{
        console.log(`Gracias por tu compra, este es tu cambio ${chancheCoins}`)
      }
    });
  }
   //shopMar(products)

  let shopAntonioDestruct=(array)=>{
    array.forEach(item=>{
      let {price,name,discount} = item  //Destructuring, usamos los nombres de los atributos directos del array
      let finalPrice=price-(price*(discount/100))
      let result=savings-finalPrice
      result < 0 ? console.log(`No te alcanza para el ${name}, necesitas ${Math.abs(result)} para acompletar tu compra`) : console.log(`Haz comprado ${name} y te ha sobrado ${Math.abs(result)}`)
    })
  }
  shopAntonioDestruct(products)

/*Necesito saber para cada viaje, cuánto tiempo me tomaría realizarlo*/
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

let TravelMar=(array)=>{
  //Tiempo = distancia/velocidad
  array.forEach(item=>{
    let {averageSpeed,distance,tag}=item
    let totalTime=distance/averageSpeed
    console.log(`El tiempo que le toma a el ${tag} en llegar es ${totalTime}`)
  })
}
TravelMar(travels)

const iyari = (array) => {
  array.forEach((travel) => {
    let { averageSpeed, distance, tag } = travel;
    console.log(
      `El viaje ${tag} tomaría un tiempo de ${distance / averageSpeed} hrs`
    );
  });
};
iyari(travels);

/**NEcesitamos saber el promedio  de distancia y combustible consumido 
 * si realizamos todos los viajes
 */
const kim = (array)=>{
  let totalDistance=0
  let totalFuel=0
  array.forEach(item=>{
    let{distance,consumedFuel}=item
    totalDistance +=distance
    totalFuel+=consumedFuel
  })
  console.log(`La distancia promedio de todos los viajes  es de ${totalDistance/array.length} km. Y el consumo promedio del combustible  es de ${totalFuel/array.length} litros`)
}

kim(travels)

let phrases = [
  {
    phrase: "Yo solo sé que no sé nada.",
    author: "Sócrates",
  },
  {
    phrase: "Hagas lo que hagas, hazlo bien.",
    author: "Abraham Lincoln",
  },
  {
    phrase: "El arte de vencer se aprende en las derrotas.",
    author: "Simón Bolívar",
  },
];

let capitaliMar=(array)=>{
  array.forEach(item=>{
    let{phrase,author}=item
    console.log( `${phrase.charAt(0).toUpperCase()}`)

  })
}

capitaliMar(phrases)

// https://kampus.kodemia.com/clases?id=803330668&time=10123.186