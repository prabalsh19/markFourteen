const initialPrice = document.querySelector(".initialPrice")
const numOfStocks = document.querySelector(".numOfStocks")
const currentPrice = document.querySelector(".currentPrice")
const submitBtn = document.querySelector(".submitBtn")
const result = document.querySelector(".result")


const onSubmitHandler = ()=>{
    const initialValue = initialPrice.value*numOfStocks.value
    const difference =  currentPrice.value*numOfStocks.value - initialValue
    const percentage = difference/initialValue * 100
    console.log(difference);
    if(difference > 0){
        
        result.innerText = "Yay!! Your Profit is "+difference+ " and profit Percentage is "+percentage+ "🥳"
        result.style.color = "white"
    }else if(difference < 0){
        result.innerText ="Whoops!! Your loss is "+difference+ " and loss Percentage is "+percentage+":("
        result.style.color = "red"

    }else{
        result.innerText = "No pain No gain, and no gain no pain :)"
        result.style.color = "white"

    }
}

submitBtn.addEventListener("click",onSubmitHandler)