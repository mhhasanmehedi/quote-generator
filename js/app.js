// Write Here
let newQuoteBtn = document.querySelector(".newQuoteBtn");
let quoteText = document.querySelector(".quoteText");
let authorName = document.querySelector(".authorName");

window.onload = getQuote();
newQuoteBtn.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNumber = Math.floor(Math.random() * data.length);
      quoteText.textContent = data[randomNumber].text;
      authorName.textContent = data[randomNumber].author;
    })
    .catch((error) => {
      console.log(error);
    });
}
