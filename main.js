const initialPrice = document.querySelector(".initialPrice")
const numOfStocks = document.querySelector(".numOfStocks")
const currentPrice = document.querySelector(".currentPrice")
const submitBtn = document.querySelector(".submitBtn")
const result = document.querySelector(".result")
const err = document.querySelector(".err")

const onSubmitHandler = ()=>{
    const initialValue = initialPrice.value*numOfStocks.value
    const difference =  currentPrice.value*numOfStocks.value - initialValue
    const percentage = difference/initialValue * 100
    console.log(difference);
    if(initialValue<0||numOfStocks<0||currentPrice.value<0){
        err.innerText="Input values cannot be negative!"
        err.style.color='red'
        
    }else if(initialValue===''||numOfStocks.value===''||currentPrice.value===''){
        err.innerText="Input values cannot be empty!"
        err.style.color='red'

    }
    else if(difference > 0){
        err.innerText=''
        result.innerText = "Yay!! Your Profit is "+difference+ " and profit Percentage is "+percentage.toFixed(2)+ " 🥳"
        result.style.color = "white"
    }else if(difference < 0){
        err.innerText=''

        result.innerText ="Whoops!! Your loss is "+difference+ " and loss Percentage is "+percentage.toFixed(2)+" :("
        result.style.color = "red"

    }else{
        err.innerText=''

        result.innerText = "No pain No gain, and no gain no pain :)"
        result.style.color = "white"

    }
}

submitBtn.addEventListener("click",onSubmitHandler)