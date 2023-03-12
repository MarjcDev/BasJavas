   let carsArray =[
    {
      name: "Toledo",
      branch: "Seat",
      year: "2017",
      hp: 125,
      price: 300000,
      presentation: () => {
      console.log("Seat Toledo por tan sólo $300,000 MXN!!!");
      },
    },
    {
        name: "Tesla",
        branch: "X",
        year: "2017",
        hp: 125,
        price: 5000,
        presentation: () => {
          console.log("Tesla X por tan sólo DLLS 5000!!!");
        },
      },
      {
        name: "Mustang",
        branch: "X",
        year: "2019",
        hp: 125,
        price: 2000,
        presentation: () => {
          console.log("Mustang X por tan sólo DLLS 2000!!!");
        },
      }

  ] ;
    /*  1.- ejecutar la presentación de cada auto en el array*/
  carsArray.forEach((item)=>{
    console.log(`${item.presentation()}`)
  })
  /**Ejemplo con Isra, Primer ejercicio */
  carsArray.forEach((item)=>item.presentation())

/* 2.- Crear una función que me permita saber el pago mensual para cada carro ( debe permitirnos indicar los meses a pagar) */
     let payMonth=(meses,priceArray)=>{
        let total=0
        priceArray.forEach((item)=>{total=item.price/meses
        console.log(total)
    })
     }
     let result=payMonth(2, carsArray)
     console.log(result)

     /**Ejemplo Isra, ultimo ejercicio */
      const getMonthlyPayments =(months) =>{
        carsArray.forEach((car)=>console.log(`Los pagos mensuales de ${car.branch} ${car.name} serían de ${car.price / months}`))
      }

      getMonthlyPayments(6); 

      /**Destructuring 28Feb 2:47*/   
      const getMonthlyPaymentsDes =(months) =>{
        carsArray.forEach(({name,branch,price})=>console.log(`Los pagos mensuales de ${branch} ${name} serían de ${price / months}`))
      }

      getMonthlyPaymentsDes(6);