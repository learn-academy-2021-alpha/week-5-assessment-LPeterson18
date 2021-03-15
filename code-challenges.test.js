// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

describe("When encodeWord is called", () => {
  it("return string with 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. when a string is called",() => {
    //arrange
    const argument = secretCodeWord1
    //act
    const actualResult = encodeWord(argument)
    //assert
  expect(actualResult).toEqual("l4ck4d41s1c4l")
  })
  it("return string with 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. when a string is called",() => {
    //arrange
    const argument = secretCodeWord2
    //act
    const actualResult = encodeWord(argument)
    //assert
  expect(actualResult).toEqual("g0bbl3dyg00k")
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create a function that takes a string as an argument
//.split the word into array
//use .map to cycle through array of letters
//use if else to check if contains letters and then changes them

const encodeWord = (string) => {
  letterArray = string.toLowerCase().split("")
  return letterArray.map(letter => {
    if(letter === "a"){
    return 4
    } else if(letter === "e"){
    return 3
    } else if(letter === "i"){
    return 1
    } else if(letter === "o"){
    return 0
    }else{
    return letter
    }
  }).join("")
}


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: ["Apple" "Banana" "Peach"]

describe("When aWordReturner is called", () => {
  it("return array with all strings with letter a",() => {
    //arrange
    const argument = arrayOfWords
    //act
    const actualResult = aWordReturner(argument)
    //assert
  expect(actualResult).toEqual(["Apple", "Banana", "Peach"])
  })
})



// b) Create the function that makes the test pass.

//pseudocode
//create function that takes in array as argument
//.filter to cycle through elements in array and filter out words with letter a
//.split each item in array
//.includes to check if word contains the letter
//return final array

const aWordReturner = (array) => {
  return array.filter(string => {
    if(string.toLowerCase().split("").includes("a") === true){
      return string
    }
  })
}
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("When fullHouseChecker is called", () => {
  it("return true, when an array of numbers is a full house",() => {
    //arrange
    const argument = hand1
    //act
    const actualResult = fullHouseChecker(argument)
    //assert
  expect(actualResult).toEqual(true)
  })
  it("return false when an array of number is not a full house",() => {
    //arrange
    const argument = hand2
    //act
    const actualResult = fullHouseChecker(argument)
    //assert
  expect(actualResult).toEqual(false)
  })
  it("return false when an array of number is not a full house",() => {
    //arrange
    const argument = hand3
    //act
    const actualResult = fullHouseChecker(argument)
    //assert
  expect(actualResult).toEqual(false)
  })
})

// b) Create the function that makes the test pass.

//pseudocode
//create function that takes array as argument
//.sort array in order, to create only two win conditions: [a,a,a,b,b] and [a,a,b,b,b]
// use if else to check if meets either of these conditions
//return true or false accordingly

// const fullHouseChecker = (array) => {
//   let sortedArray = array.sort((a,b) => (a-b))
//   let [a,b,c,d,e] = sortedArray
//   if(a === c && d === e && a !== e){
//     return true
//   }else if(a === b && c === e && a !== e){
//     return true
//   }else{
//     return false
//   }
// }
//


//short method

const fullHouseChecker = (array) => {
  let sortedArray = array.sort((a,b) => (a-b))
  let [a,b,c,d,e] = sortedArray
  return ((a === c && d === e && a !== e) || (a === b && c === e && a !== e)) ? true:false
}

//
