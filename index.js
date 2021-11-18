// api key 8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ
// "https://api.stockdata.org/v1/data/quote?symbols=AAPL%2C&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ"

// fetch("https://api.stockdata.org/v1/data/quote?symbols=AAPL%2C&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ")
.then(res => res.json())
.then(quote => renderQuote(quote.data))

function renderQuote(stockAPI){
    const quoteTitle = document.querySelector(".company-name")
    const quoteTicker = document.querySelector(".company-ticker")
    const quotePrice = document.querySelector(".quote-price")

    quoteTitle.innerText = stockAPI[0].name
    quoteTicker.innerText = stockAPI[0].ticker
    quotePrice.innerText = stockAPI[0].price
}






// fetch("https://api.stockdata.org/v1/entity/profile?symbols=AAPL&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ")
.then(res => res.json())
.then(companyProfile => renderProfile(companyProfile.data))

function renderProfile(profile.data) {
    
}