// Define the random words, we pick the element where we have to type and where we put the words
var randomWords = ["hello", "how", "first", "second", "keyboard", "lvdwig", "futsal", "forward", "goalkeeper", "coding", "webpage", "css", "js",
"town", "before", "after", "below", "under", "counter", "videogames", "mouse", "love", "cat", "dog", "friend", "brother", "family", "lights", "house",
"pencil", "scream", "camera", "hand", "microphone", "helmet", "ball", "man", "soap", "swap", "bmw", "golf", "gold", "point", "face", "melody", "gibi",
"position", "black", "white", "keep", "interest", "about", "because", "program", "little", "own", "if", "much", "world", "war", "finger", "general",
"should", "lead", "conduct", "she", "he", "they", "we", "it", "govern", "plan", "become", "high", "large", "present", "consider", "place", "park",
"short", "flash", "flashlight", "mobile", "factory", "car", "bike", "friend", "monitor", "headsets", "baloon", "earth", "marth", "invention",
"depressed", "green", "blue", "red", "white", "yellow", "cyan", "magenta", "orange", "prank", "drift", "assetto", "corsa", "wings", "turkey", "donut",
"ancient", "mirage", "simulator", "box", "knife", "gloves", "code", "username", "password", "character", "down", "up", "above", "near", "neither",
"drop", "location", "session", "profile", "road", "street", "singer", "sign", "maintenance", "dark", "security", "bottle", "headphones", "case",
"plastic", "curly", "tail", "nose", "mouth", "eyes", "eyebrows", "rainbow", "close", "open", "direction", "station", "gun", "freckles", "breakfast",
"lunch", "dine", "launch", "rocket", "moon", "planet", "kettle", "glass", "grass", "fork", "push", "pull", "develop", "problem", "big", "around",
"with", "without", "could", "year", "month", "day", " these", "those", "say", "public", "follow", "get", "leave", "however", "change", "ask", "during",
"well", "course", "call", "write", "take", "very", "thing", "which", "child", "son", "daughter", "just", "do", "it", "still", "already", "yet",
"increase", "possible", "impossible", "maybe", "probably", "give", "person", "come", "fact", "same", "show", "movie", "film", "old", "while"]

var wordstoType = document.getElementById('textToReply')
var wordsTyped = document.getElementById("inputW")
var wordPicked = ""
var counterChar = 0
var counterScore = 0
var totalChars = 0
var mustEnter = true
var seconds = 0
var typedChars = 0
let startTyping = true
var descendents = ""
var allWords = []
var charTotype = ""
var lastCharTyped = ""
var scoreDiv = document.createElement("div")
var dark = true

// Declare the limit of the words that we want to typed

var limitWords = document.getElementById('amountWordsV').innerHTML
// Get random words from the randomWords array
function getRandomWords() {

  console.log("the color of the background is: " + document.body.style.backgroundColor)

  for (i = 1; i <= limitWords; i++) {

    // we call the function to pick a Word
    pickWords()

    //console.log(wordPicked)
    for (var cw = 0; cw < allWords.length; cw++) {
      if (wordPicked == allWords[cw] ) {
        wordPicked = ""
        wordPicked = pickWords()
      } else {
        allWords.push(wordPicked)
      }
    }
    if (i < limitWords){
      wordPicked += " "
    }
    totalChars += wordPicked.length
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
  }
}

function pickWords() {
  // Generate Random number
  var random = Math.floor(Math.random() * randomWords.length)
  // Pick a random word of the array
  return wordPicked = randomWords[random]
}

// Declare variable to use in the future

wordsTyped.addEventListener('input', () => {

  // we put the value to true
  startTyping = true
  // Take the words that we typed
  var gettyped = wordsTyped.innerHTML
  // Take the last char we typed
  lastCharTyped = gettyped.charAt(gettyped.length -1)
  // Take the char we have to type
  var ancestor = document.getElementById("textToReply")
  descendents = ancestor.getElementsByClassName("letter")
  
  if (mustEnter) {
    for (var i = 0; i < descendents.length; i++) {
      charTotype += descendents[i].innerHTML
    }
  }
  mustEnter = false
  //console.log(charTotype)
  
  // If we type a whitespace we gonna get " " i did it like that because i get the last char, and from &
  if (lastCharTyped == ';') {
    lastCharTyped = " "
  }
  if (lastCharTyped == charTotype.charAt(counterChar)) {
    //console.log("Char to type: " + charTotype.charAt(counterChar))
    //console.log("Last char typed " + lastCharTyped)
    counterChar ++
    counterScore ++
    //document.getElementById("score").innerHTML = "Score " + counterScore 
    wordsTyped.innerText.charAt(wordsTyped.length -1)
  } else {
    //console.log("Incorrect " + charTotype.charAt(counterChar) + " And you typed " + lastCharTyped)
    counterScore --
    //document.getElementById("score").innerHTML = "Score " + counterScore
  }
  console.log("Char to type is: " + charTotype[counterChar])
  results()
})


// When Tab is pressed, it empty the content
wordsTyped.addEventListener("keydown", function(event) {
  if (event.which === 9) {
    event.preventDefault()
    counterChar = 0
    counterScore = 0
    wordstoType = ""
    wordsTyped = ""
    getRandomWords()
  }
});

// When backspace is pressed, it makes like nothing's happened
wordsTyped.addEventListener(("keydown"), function(event) {
  if (event.code === 'Backspace') {
    lastCharTyped.slice(0, -1)
    if (!counterScore == 0) {
      counterScore ++
    }
  }
});

var switchTheme = document.getElementById('toggleIcon')
switchTheme.addEventListener("click", function handleClick() {
  dark = !dark
  console.log(dark)
})

// Function to show the results
function results() {

  var wordConverted = wordsTyped.innerText
  var lastWordTyped = wordConverted.slice(wordConverted.lastIndexOf(" ") + 1);
  var lastWordtoType = wordPicked.slice(wordPicked.lastIndexOf(" ") + 1)
  if (lastWordTyped == lastWordtoType) {
    // We disable the div to don't allow to continue typing
    wordsTyped.remove()
    wordstoType.remove()
    if (dark) {
      darkMode()
    } else {
      lightMode()
    }
    scoreDiv.innerHTML = "The score that you got was: " + counterScore + " / " + totalChars
    scoreDiv.style.fontSize = "2em"
    scoreDiv.style.position = "relative"
    scoreDiv.style.textAlign = "center"
    console.log(scoreDiv.innerText)
    document.body.appendChild(scoreDiv)
  }
  console.log(totalChars)
}

// Toggle light / dark mode
function toggleDarkMode() {
  var elementA = document.body
  elementA.classList.toggle("toggle-theme")
}

function darkMode() {
  scoreDiv.style.color = "#d79921"
}

function lightMode() {
  scoreDiv.style.color = "#1D2021"
}

function changeIcon(icon) {
  icon.classList.toggle('fa-moon')
}

getRandomWords()
