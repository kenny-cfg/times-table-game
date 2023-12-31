const firstNumberContainer = document.getElementById('firstNumber')
const secondNumberContainer = document.getElementById('secondNumber')
const submitButton = document.getElementById('submitAnswer')
const inputBox = document.getElementById('answerBox')
const answerResponseHolder = document.getElementById('answerResponse')
const scoreContainer = document.getElementById('scoreContainer')
const countdownContainer = document.getElementById('countdownContainer')
let correctAnswers = parseInt(localStorage.getItem('correctAnswers'))
if (isNaN(correctAnswers)) {
  correctAnswers = 0
}
let incorrectAnswers = parseInt(localStorage.getItem('incorrectAnswers')) 
if (isNaN(incorrectAnswers)) {
  incorrectAnswers = 0
}

let firstRandomInteger
let secondRandomInteger
let countdown
refreshQuestion()

setInterval(() => {
  countdown--
  if (countdown <= 0) {
    answerResponseHolder.innerText = 'OUT OF TIME'
    answerIsIncorrect()
    refreshQuestion()
  }
  refreshCountdownDisplay()
}, 1000)

function answerIsCorrect() {
  correctAnswers++
  localStorage.setItem('correctAnswers', correctAnswers)
}

function answerIsIncorrect() {
  incorrectAnswers++
  localStorage.setItem('incorrectAnswers', incorrectAnswers)
}

function refreshCountdownDisplay() {
  countdownContainer.innerText = `You have ${countdown} seconds to answer`
}

function getRandomInteger() {
  return Math.floor(Math.random() * 12) + 1
}

function refreshQuestion() {
  firstRandomInteger = getRandomInteger()
  secondRandomInteger = getRandomInteger()
  inputBox.value = ''
  countdown = 10
  firstNumberContainer.innerText = firstRandomInteger
  secondNumberContainer.innerText = secondRandomInteger
  scoreContainer.innerText = `You've got ${correctAnswers} correct and ${incorrectAnswers} incorrect`
  refreshCountdownDisplay()
}

submitButton.onclick = () => {
  const proposedAnswer = inputBox.value
  const proposedAnswerAsInteger = parseInt(proposedAnswer)
  // TODO: Deal with NaN
  if (proposedAnswerAsInteger === firstRandomInteger * secondRandomInteger) {
    answerIsCorrect()
    answerResponseHolder.innerText = `Yes, ${firstRandomInteger} x ${secondRandomInteger} is indeed ${proposedAnswerAsInteger}`
  } else {
    answerIsIncorrect()
    answerResponseHolder.innerText = `No, ${firstRandomInteger} x ${secondRandomInteger} is not ${proposedAnswerAsInteger}, it's ${firstRandomInteger * secondRandomInteger}`
  }
  refreshQuestion()
}