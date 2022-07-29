// Define the random words, we pick the element where we have to type and where we put the words
var randomWords = ["hello", "how", "first", "second", "keyboard", "lvdwig", 
"futsal", "forward", "goalkeeper", "coding", "webpage", "css", "js",
"town", "before", "after", "below", "under", "counter", "videogames",
"mouse", "love", "cat", "dog", "friend", "brother", "family", "lights", "house",
"pencil", "scream", "camera", "hand", "microphone", "helmet", "ball", "man",
"soap", "swap", "bmw", "golf", "gold", "point", "face", "melody", "gibi", "position",
"black", "white", "keep", "interest", "about", "because", "program", "little", "own",
"if", "much", "world", "war", "finger", "general", "should", "lead", "conduct", "she",
"he", "they", "we", "it", "govern", "plan", "become", "high", "large", "present",
"consider", "place", "park", "short", "flash", "flashlight", "mobile", "factory",
"car", "bike", "friend", "monitor", "headsets", "baloon", "earth", "marth", "invention",
"depressed", "green", "blue", "red", "white", "yellow", "cyan", "magenta", "orange"]
var wordstoType = document.getElementById('textToReply')
var wordsTyped = document.getElementById("inputW")
var counterChar = 0
var counterScore = 0

// Get random words from the randomWords array
function getRandomWords() {

  // Declare the limit of the words that we want to type
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
    console.log(wordPicked)
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
    // Create the space
    var space = document.createElement("span")
    word.appendChild(space)
    space.classList.add("letter")
    space.innerHTML = " "
  }
}

// Declare variable to use in the future
var lastCharTyped = ""
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
  // If we type a whitespace we gonna get " " i did it like that because i get the last char, and from &
  if (lastCharTyped == ';') {
    lastCharTyped = " "
  }
  if (lastCharTyped == charTotype.charAt(counterChar)) {
    //console.log("Correct ")
    counterChar ++
    counterScore ++
    document.getElementById("score").innerHTML = "Score " + counterScore 
    wordsTyped.innerText.charAt(wordsTyped.length -1)
  } else {
    //console.log("Incorrect " + charTotype.charAt(counterChar) + " And you typed " + lastCharTyped)
    counterScore --
    document.getElementById("score").innerHTML = "Score " + counterScore
  }

})
// When Tab is pressed, it empty the content
wordsTyped.addEventListener("keydown", function(event) {
  if (event.code === 'Tab') {
    wordsTyped.innerHTML = ''
    wordstoType.innerHTML = ''
    lastCharTyped.innerHTML = ''
    event.preventDefault()
    getRandomWords()
    counterScore = 0
    console.log(counterScore)
    counterChar = 0
    document.getElementById("score").innerHTML = "Score 0" 
  }
});

// When backspace is pressed, it makes like nothing's happened
wordsTyped.addEventListener(("keydown"), function(event) {
  if (event.code === 'Backspace') {
    lastCharTyped.slice(0, -1)
    counterScore ++
  }
})

getRandomWords()
