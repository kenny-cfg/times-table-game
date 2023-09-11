const firstNumberContainer = document.getElementById('firstNumber')
const secondNumberContainer = document.getElementById('secondNumber')
const submitButton = document.getElementById('submitAnswer')
const inputBox = document.getElementById('answerBox')
const answerResponseHolder = document.getElementById('answerResponse')

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
    answerResponseHolder.innerText = `Yes, ${firstRandomInteger} x ${secondRandomInteger} is indeed ${proposedAnswerAsInteger}`
  } else {
    answerResponseHolder.innerText = `No, ${firstRandomInteger} x ${secondRandomInteger} is not ${proposedAnswerAsInteger}, it's ${firstRandomInteger * secondRandomInteger}`
  }
}