const firstRandomInteger = getRandomInteger()
const secondRandomInteger = getRandomInteger()

function getRandomInteger() {
  return Math.floor(Math.random() * 12) + 1
}