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