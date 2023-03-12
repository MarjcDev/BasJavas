 let descountMar=(array)=>{
    let totaldesc
    array.forEach((item)=>{
       totaldesc= item.price-((item.price * item.discount)/100)
       console.log(`El producto ${array.name} tiene un precio original de ${array.price} y un precio final de ${totaldesc}`)

    })
  }

  descountMar(products)