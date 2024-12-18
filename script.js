// Cotação da moeda do dia
const USD = 6.12
const EUR = 7.54
const GBP = 5.32

// Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input para receber somente números
// Garantir que o input só aceite números
amount.addEventListener("input", () =>{
  const hasCharacteresRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacteresRegex, "");
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) =>{
  event.preventDefault()

  // identificar qual a moeda
  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Para função converter moeda
function convertCurrency(amount, price, symbol){
  console.log(amount, price, symbol)
}

// Exibir o footer



