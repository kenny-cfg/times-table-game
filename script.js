const firstNumberContainer = document.getElementById('firstNumber')
const secondNumberContainer = document.getElementById('secondNumber')
const submitButton = document.getElementById('submitAnswer')
const inputBox = document.getElementById('answerBox')

const firstRandomInteger = getRandomInteger()
const secondRandomInteger = getRandomInteger()

firstNumberContainer.innerText = firstRandomInteger
secondNumberContainer.innerText = secondRandomInteger

function getRandomInteger() {
  return Math.floor(Math.random() * 12) + 1
}

submitButton.onclick = () => {
  const proposedAnswer = inputBox.value
  const proposedAnswerAsInteger = parseInt(proposedAnswer)
  // TODO: Deal with NaN
  if (proposedAnswerAsInteger === firstRandomInteger * secondRandomInteger) {
    console.log('Correct')
  } else {
    console.log('Nah')
  }
}