const firstNumberContainer = document.getElementById('firstNumber')
const secondNumberContainer = document.getElementById('secondNumber')
const submitButton = document.getElementById('submitAnswer')
const inputBox = document.getElementById('answerBox')
const answerResponseHolder = document.getElementById('answerResponse')
const scoreContainer = document.getElementById('scoreContainer')
let correctAnswers = 0
let incorrectAnswers = 0

let firstRandomInteger
let secondRandomInteger
refreshQuestion()

function getRandomInteger() {
  return Math.floor(Math.random() * 12) + 1
}

function refreshQuestion() {
  firstRandomInteger = getRandomInteger()
  secondRandomInteger = getRandomInteger()
  inputBox.value = ''
  firstNumberContainer.innerText = firstRandomInteger
  secondNumberContainer.innerText = secondRandomInteger
  scoreContainer.innerText = `You've got ${correctAnswers} correct and ${incorrectAnswers} incorrect`
}

submitButton.onclick = () => {
  const proposedAnswer = inputBox.value
  const proposedAnswerAsInteger = parseInt(proposedAnswer)
  // TODO: Deal with NaN
  if (proposedAnswerAsInteger === firstRandomInteger * secondRandomInteger) {
    correctAnswers++
    answerResponseHolder.innerText = `Yes, ${firstRandomInteger} x ${secondRandomInteger} is indeed ${proposedAnswerAsInteger}`
  } else {
    incorrectAnswers++
    answerResponseHolder.innerText = `No, ${firstRandomInteger} x ${secondRandomInteger} is not ${proposedAnswerAsInteger}, it's ${firstRandomInteger * secondRandomInteger}`
  }
  refreshQuestion()
}