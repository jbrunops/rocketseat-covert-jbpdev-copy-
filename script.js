// Cotação da moeda do dia
const USD = 6.12
const EUR = 7.54
const GBP = 5.32

// Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

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
  
  try{

    // interpolação de strings!
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

    let total = amount * price;
    total = formatCurrencyBRL(total).replace("R$", "")

    // exibir o resultado total
    result.textContent = `${total} Reais`

    // Está exibindo e aplica a class e exibe o footer
    footer.classList.add("show-result")

  } catch(error){
    // remove a class do footer da tela
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter!")
  }

}

// FOrmata a moeda em real brasileiro
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  })
}



