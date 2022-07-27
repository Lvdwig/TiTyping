// Define the random words, we pick the element where we have to type and where we put the words
var randomWords = ["hello", "how", "first", "second", "keyboard", "lvdwig", 
"futsal", "forward", "goalkeeper", "coding", "webpage", "css", "js",
"town", "before", "after", "below", "under", "counter", "videogames",
"mouse", "love", "cat", "dog", "friend", "brother", "family", "lights", "house",
"pencil", "scream", "camera", "hand", "microphone", "helmet", "ball", "man",
"soap", "swap", "bmw", "golf", "golf"]
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
      var space = document.createElement("span")
      word.appendChild(space)
      space.classList.add("letter")
      space.innerHTML = " "
    }
}

var charTotype = ""

wordsTyped.addEventListener('input', () => {
  // Take the words that we typed
  var gettyped = wordsTyped.innerHTML
  // Take the last char we typed
  var lastCharTyped = gettyped.charAt(gettyped.length -1)
  // Take the char we have to type
  var ancestor = document.getElementById("textToReply")
  var descendents = ancestor.getElementsByClassName("letter")
  for (var i = 0; i < descendents.length; i++) {
    charTotype += descendents[i].innerHTML
  }

  if (lastCharTyped == charTotype.charAt(counterChar)) {
    console.log("Correct ")
    counterChar ++
    counterScore ++
    document.getElementById("score").innerHTML = "Score " + counterScore
  } else {
    console.log("Incorrect " + charTotype.charAt(counterChar) + " And you typed " + lastCharTyped)
    counterChar ++
    counterScore --
    document.getElementById("score").innerHTML = "Score " + counterScore
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
