// VARIAVEIS
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// EVENTOS
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// FUNÇÕES CALLBACK
function handleTryClick(event) {
  event.preventDefault() // NÃO FAÇA O PADRÃO

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScren()
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScren()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScren() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

