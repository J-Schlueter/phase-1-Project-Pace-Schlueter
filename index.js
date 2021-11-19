const imgBar = document.querySelector("#stock-menu") // target the stock icons
imgBar.addEventListener("click", (e) => clickImg(e)) // when an element is clicked in the stock menu run clickImg on it

const companyBio = document.querySelector("#company-bio") //target company bio paragraph
function clickImg(e) {
    //create a fetch dynamically using the ticker of the stock that was clicked
    fetch(`https://api.stockdata.org/v1/data/quote?symbols=${e.target.dataset.symbol}%2C&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ`)
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
    quoteIcon.src = e.target.src

    //seperate GET request to populate profile section
    fetch(`https://api.stockdata.org/v1/entity/profile?symbols=${e.target.dataset.symbol}&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ`)
    .then(res => res.json())
    .then(companyProfile => renderProfile(companyProfile.data))

    function renderProfile(profile) {
        const companyDescription = document.querySelector(".company-description")
        companyDescription.innerText = profile[0].description //replace the inner text of the bio paragraph with the description from the API return data
    }
}

const likeBttn = document.querySelector("#like-button")
likeBttn.addEventListener("click", () => renderLike())
function renderLike() {
    window.alert("The price is right!")
}

const profileBttn = document.querySelector(".profile-button")
profileBttn.addEventListener("click", () => unhideBio())
function unhideBio(){
    if (companyBio.style.display === "none") {
        companyBio.style.display = "block";
      } else {
        companyBio.style.display = "none";
      }
}