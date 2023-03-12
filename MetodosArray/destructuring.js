let car ={
    name: "Toledo",
    branch: "Seat",
    year: "2017",
    price:30000,
    presentation:()=>{console.log("Seat toledo por tan sólo 30000")}
}
/**si quisiera acceder a cada una de ellas con variables sería de la siguiente forma */
let names= car.name
let branch= car.branch
console.log(names, branch)
/**Pero podemos usar la deconstrucción */
let {name, year, price}=car
console.log(name, year, price)

/**De igual manera se aplica para los Arrays */
let numbers =["uno", "dos", "tres"]
let[primerItem, segundoItem]=numbers
console.log(primerItem,segundoItem)
/**Si sólo queremos trar sólo un item especifico, por ejemplo el tres, SÓLO APLICA EN ARRAYS*/
let[, , tercerItem]=numbers
console.log(tercerItem)
