// Define the random words, we pick the element where we have to type and where we put the words
var randomWords = ["hello", "how", "first", "second", "keyboard", "lvdwig", 
"futsal", "forward", "goalkeeper", "coding", "webpage", "css", "js",
"town", "before", "after", "below", "under", "counter", "videogames",
"mouse", "love", "cat", "dog", "friend", "brother", "family", "lights"]
var wordstoType = document.getElementById('textToReply')
var wordsTyped = document.getElementById("inputW")
var counterChar = 0
var counterScore = 0

// Get random words from the randomWords array
function getRandomWords() {
    const limitWords = 20
    for (i = 1; i <= limitWords; i++) {
      // Generate Random number
      var random = Math.floor(Math.random() * randomWords.length)
      // Pick a random word of the array
      var wordPicked = randomWords[random]
      // create a div to put the word
      var word = document.createElement("div")
      // Put a class to the div
      word.classList.add("word")
      // We put the words inside of the the div
      wordstoType.appendChild(word)
      for (l = 0; l < wordPicked.length; l++) {
        // Create a element span to put the letters
        var letter = document.createElement("span")
        // Put class to the spans
        letter.classList.add("letter")
        // We put the letters inside the div of the words
        word.appendChild(letter)
        // We put the value of the letter into the span
        letter.innerHTML = wordPicked[l]
      }
      if (l < wordPicked -1) {
        letter.innerHTML += " "
        console.log("hello")
      } 
    }
}

wordsTyped.addEventListener('input', () => {
  var gettypedChar = wordsTyped.innerHTML
  var lastCharTyped = gettypedChar.charAt(gettypedChar.length -1)
  var getWords = document.getElementsByClassName("letter").innerHTML
  var currentChar = getWords.charAt(counterChar)
  console.log("Last typed Char was: " + lastCharTyped)
  console.log("Current char you have to type is: " + currentChar)
  console.log("The value of the word to type is: " + getWords)
  if (lastCharTyped == currentChar) {
      counterChar += 1
      counterScore += 1
      console.log(counterChar)
    if (counterScore <= 0) {
        document.getElementById("score").innerHTML = "Score 0"
    } else {
        document.getElementById("score").innerHTML = "Score " + counterScore
    }
  } else {
      counterScore -= 1
    if (counterScore <= 0) {
        document.getElementById("score").innerHTML = "Score 0"
    } else {
        document.getElementById("score").innerHTML = "Score " + counterScore
        
    }
  }
  if (gettypedChar == getWords) {
    wordstoType.innerHTML = ""
    wordsTyped.innerHTML = ""
    getRandomWords()
  }
})

// When Tab is pressed, it empty the content of the textArea
wordsTyped.addEventListener("keydown", function(event) {
    if (event.code === 'Tab') {
        wordsTyped.innerHTML = ''
        wordstoType.innerHTML = ''
        event.preventDefault()
        getRandomWords()
        counterScore = 0
        counterChar = 0
        document.getElementById("score").innerHTML = "Score 0" 
    }
});

getRandomWords()
