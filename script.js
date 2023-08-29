const prices= document.querySelectorAll("#price")
const apply_btn = document.querySelector("#apply-cupon")
const cupon = document.querySelector("#cupon_code")


// reuseableFunction
function calculateProduct(item_price){
   let total_price = 0
   item_price.forEach(item=>{
    total_price+= parseFloat(item.innerText)
   })
   return total_price
}



// add to calculation entry
function addToCalculationEntry(cupon){
    let off_parcentage = ""
    if (cupon == "SELL200"){
        const cupon_parcentige = 20/100;
        off_parcentage= calculateProduct(prices) - (calculateProduct(prices)*cupon_parcentige)

    }
    return(off_parcentage)
}


apply_btn.addEventListener('click',()=>{
    if(cupon.value){
        let parcentige = addToCalculationEntry(cupon.value)
        console.log(parcentige)
        
    }
})