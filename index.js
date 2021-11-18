//target icons and add listeners to run click function with respective 
const Meta = document.querySelector("#Meta-Logo")
Meta.addEventListener("click",clickImg("FB"))

const Apple = document.querySelector("#Apple-Logo")
Apple.addEventListener("click",clickImg("AAPL"))

const Amazon = document.querySelector("#Amazon-Logo")
Amazon.addEventListener("click",clickImg("AMZN"))

const Netflix = document.querySelector("#Netflix-Logo")
Netflix.addEventListener("click",clickImg("NFLX"))

const Alphabet = document.querySelector("#Google-Logo")
Alphabet.addEventListener("click",clickImg("GOOG"))

function clickImg(ticker) {
    //create a fetch dynamically using the ticker of the stock that was clicked
    fetch(`https://api.stockdata.org/v1/data/quote?symbols=${ticker}%2C&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ`)
    .then(res => res.json())
    .then(quote => renderQuote(quote.data))

    //takes API return object and updates page elements with quoted stock info
    function renderQuote(stockAPI){
        const quoteTitle = document.querySelector(".company-name")
        const quoteTicker = document.querySelector(".company-ticker")
        const quotePrice = document.querySelector(".quote-price")
        

        quoteTitle.innerText = stockAPI[0].name
        quoteTicker.innerText = stockAPI[0].ticker
        quotePrice.innerText = stockAPI[0].price
    }

    //Updates placeholder img with the logo of the stock being quoted
    const quoteIcon = document.querySelector(".quote-image")
    //this is how I think the img would be updated but need to work out targeting the proper image
    // quoteIcon.src = ticker.src
}



// const profileBttn = document.querySelector(".profile-button")
// profileBttn.addEventListener("click", renderProfile)



// function renderProfile(profile) {

//     // fetch("https://api.stockdata.org/v1/entity/profile?symbols=AAPL&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ")
//     // .then(res => res.json())
//     // .then(companyProfile => populate(companyProfile.data))

//     const companyBio = document.querySelector(".company-bio")
//     companyBio.innerText = profile.description
// }