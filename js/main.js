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
    const limitWords = 5
    for (i = 0; i < limitWords; i++) {
        var random = Math.floor(Math.random() * randomWords.length)
        const wordPicked = randomWords[random]
        var word = document.createElement("div")
        wordstoType.appendChild(word)
        for (var i = 0; i < wordPicked.length; i++) {
          var letter = document.createElement("p")
          letter.innerHTML = wordPicked[i]
          console.log(letter.innerText)
          word.appendChild(letter)
          wordstoType.innerHTML = letter.innerText
        }
      if (i < limitWords -1) {
        word.innerHTML += " "
      }
    }
}

wordsTyped.addEventListener('input', () => {
    var gettypedChar = wordsTyped.value
    var lastCharTyped = gettypedChar.charAt(gettypedChar.length -1)
    var getWords = wordstoType.value
    var currentChar = getWords.charAt(counterChar)
    if (lastCharTyped == currentChar) {
        counterChar += 1
        counterScore += 1
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
    wordsTyped.value = ""
    getRandomWords()
  }
})

// When Tab is pressed, it empty the content of the textArea
wordsTyped.addEventListener("keydown", function(event) {
    if (event.code === 'Tab') {
        wordsTyped.value = ''
        wordstoType.innerHTML = ''
        event.preventDefault()
        getRandomWords()
        counterScore = 0
        counterChar = 0
        document.getElementById("score").innerHTML = "Score 0" 
    }
});

getRandomWords()
