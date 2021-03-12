// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// split the string into an array
// map through the array
// check for the particular vowels and reassign
// check for uppercase/lowercase
// join the array back to a string

const lettersToNumbers = (string) => {
  return string.split("")
  .map(value => value === "a" ? 4 : value === "e" ? 3 : value === "i" ? 1 : value === "o" ? 0 : value)
  .join("")
}
console.log(lettersToNumbers(secretCodeWord1))
console.log(lettersToNumbers(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// create a function
// iterate through the array with a for loop
// create an empty array to hold the new values
// create an empty array to hold the lowercase value
// lowercase each values
// push lowercase values into empty array
// add a conditional to include lowercase letter a
// push into the other empty array

const onlyA = (array) => {
  // let smallArr = []
  // for(var i=0; i<array.length; i++){
  //   smallArr.push(array[i].toLowerCase())
  // }
  return newArray = array.filter(value => {
    return value.includes("a") || value.includes("A")
  })
}
console.log(onlyA(arrayOfWords))


const onlyAWithRegex = (array) => {
  return array.filter(value => {
    return value.match(/a/i)
  })
}
console.log(onlyAWithRegex(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// empty array called answer
// map over the argument to push a single instance to answer of each rank
// if - the answer array.length is not 2, return false
// else if - filter arugment array, if value in argument array is found in the answer array exactly two or three times return true
// else return false

const isFullHouse = (argumentArray) => {
  let answerArray = []
  argumentArray.map(value => answerArray.includes(value) ? "" : answerArray.push(value))
  if(answerArray.length !== 2){
    return false
  } else if(argumentArray.filter(value => value === answerArray[0]).length == 2 || argumentArray.filter(value => value === answerArray[0]).length == 3){
    return true
  } else {
    return false
  }
}
console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
console.log(isFullHouse(hand3))



const fullHouse2 = (array) => {
  let count = {}
  array.forEach(value => count[value] = (count[value] || 0) + 1)
  let triple = Object.keys(count).filter(key => count[key] === 3).length === 1
  let pair = Object.keys(count).filter(key => count[key] === 2).length === 1
  return triple && pair
}
console.log(fullHouse2(hand1))
console.log(fullHouse2(hand2))
console.log(fullHouse2(hand3))

const fullHouse3 = (cards) => {
  for(let i=0; i<cards.length; i++){
    if (cards[0] === cards[1] &&
      cards[1] === cards[2] &&
      cards[3] === cards[4] ||
      cards[0] === cards[1] &&
      cards[2] === cards[3] &&
      cards[3] === cards[4]
    ){
      return true
    } else {
      return false
    }
  }
}


// set up temp boolean values for 2 or 3 instances
// mapped through the array and looked for the number of occurances for each number
// filter through the array and created a new array
// length of that array was 2 or 3 set the boolean variables
// checked boolean variables, if there was 2/3 of a kind return true
