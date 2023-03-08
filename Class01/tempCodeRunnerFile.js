const openHouse=(cimientos,loza,pintar)=>  {
   /*  cimientos()
    loza()
    pintar() */
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
