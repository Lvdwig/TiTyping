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
"with", "without", "could", "year", "month", "day", "these", "those", "say", "public", "follow", "get", "leave", "however", "change", "ask", "during",
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
var scoreDiv = document.createElement("p")
var dark = true
var limitWords = document.getElementById('amountWordsV')
var resetTest = document.createElement("p")
var textToReply = document.getElementById("textToReply")
var descendents = textToReply.getElementsByClassName("letter")

// when the user puts the amount of words that he wants, we delete the previous total chars
limitWords.addEventListener('focusout', (event) => {
  totalChars = 0
  wordstoType.innerHTML = ""
  scoreDiv.innerHTML = ""
  resetTest.innerHTML = ""
  getRandomWords(Number(event.target.value))
  mustEnter = true
});

// call the function to show the first bunch of words
getRandomWords(document.getElementById('amountWordsV').value)


// Get random words from the randomWords array
function getRandomWords(limitWords) {

  // we give a 0 to this variables for the case that the user modify the words twice
  counterScore = 0

  // to control the max of the words
  if (limitWords > 50) {
    limitWords = 50
    document.getElementById("amountWordsV").value = "50"
  }

  for (i = 1; i <= limitWords; i++) {

    // we call the function to pick a Word
    pickWords()

    if (allWords.includes(wordPicked)) {
      pickWords()
      console.log("the word is in the array " + wordPicked)
    } else {
      allWords.push(wordPicked)
      console.log(allWords)
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

// function to pick a words from the array
//
function pickWords() {
  // Generate Random number
  var random = Math.floor(Math.random() * randomWords.length)
  // Pick a random word of the array
  return wordPicked = randomWords[random]
}

wordsTyped.addEventListener('input', () => {
  
  //console.log("Char to type is: " + charTotype[counterChar])
  // Take the words that we typed
  var gettyped = wordsTyped.innerHTML
  // Take the last char we typed
  lastCharTyped = gettyped.charAt(gettyped.length -1)
  // Take the char we have to type
  organizingWords()

  // If we type a whitespace we gonna get " " i did it like that because i get the last char, and from &
  if (lastCharTyped == ';') {
    lastCharTyped = " "
  }
  if (lastCharTyped == charTotype.charAt(counterChar)) {
    //console.log("Correct: " + charTotype.charAt(counterChar) + " And you typed " + lastCharTyped)
    //console.log("Last char typed " + lastCharTyped)
    counterChar ++
    counterScore ++
    //document.getElementById("score").innerHTML = "Score " + counterScore 
    //wordsTyped.innerText.charAt(wordsTyped.length -1)
  } else {
    //console.log("Incorrect " + charTotype.charAt(counterChar) + " And you typed " + lastCharTyped)
    counterScore --
    //document.getElementById("score").innerHTML = "Score " + counterScore
  }
  results()
})

function organizingWords() {
  
  if (mustEnter) {
    for (var i = 0; i < descendents.length; i++) {
      charTotype += descendents[i].innerHTML
      //console.log(descendents[i].innerText)
    }
  }
  mustEnter = false
}


// When Tab is pressed, it empty the content
wordsTyped.addEventListener("keydown", function(event) {
  if (event.code === 'Tab') {
    event.preventDefault()
    scoreDiv.innerHTML = ""
    resetTest.innerHTML = ""
    totalChars = 0
    counterChar = 0
    counterScore = 0
    charTotype = ""
    wordstoType.innerHTML = ""
    wordsTyped.innerHTML = ""
    allWords.length = 0 
    getRandomWords(document.getElementById('amountWordsV').value)
    organizingWords()
    mustEnter = true
  }
});

// When backspace is pressed, it makes like nothing's happened
//
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
  //console.log(dark)
})

// Function to show the results
function results() {

  var wordConverted = wordsTyped.innerText
  var lastWordTyped = wordConverted.slice(wordConverted.lastIndexOf(" ") + 1);
  var lastWordtoType = wordPicked.slice(wordPicked.lastIndexOf(" ") + 1)
  if (lastWordTyped == lastWordtoType) {
    // We disable the div to don't allow to continue typing
    wordsTyped.innerHTML = ""
    wordstoType.innerHTML = ""
    if (dark) {
      darkMode()
    } else {
      lightMode()
    }

    // giving style to the result paragraph
    scoreDiv.innerHTML = "The score that you got was: " + counterScore + " / " + totalChars
    scoreDiv.style.fontSize = "2em"
    scoreDiv.style.position = "relative"
    scoreDiv.style.textAlign = "center"

    //giving style to the reset paragraph
    resetTest.innerHTML = "Press Tab to reset the test"
    resetTest.style.fontSize = "1em"
    resetTest.style.position = "absolute"
    resetTest.style.textAlign = "center"
    resetTest.style.top = "550px"

    // we put the elements on the body
    document.body.appendChild(scoreDiv)
    document.body.appendChild(resetTest)
  }
}

// Toggle light / dark mode
function toggleDarkMode() {
  var elementA = document.body
  elementA.classList.toggle("toggle-theme")
  if (dark) {
    scoreDiv.style.color = "#1D2021"
    resetTest.style.color = "#1D2021"
  } else {
    scoreDiv.style.color = "#d79921"
    resetTest.style.color = "#d79921"
  }
}

function darkMode() {
  scoreDiv.style.color = "#d79921"
  resetTest.style.color = "#d79921"
}

function lightMode() {
  scoreDiv.style.color = "#1D2021"
  resetTest.style.color = "#1D2021"
}

function changeIcon(icon) {
  icon.classList.toggle('fa-moon')
}
