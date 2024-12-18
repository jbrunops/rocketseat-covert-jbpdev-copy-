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

  console.log(currency.value)
}

// Deu certo!
//Agora obter a moeda selecionada



