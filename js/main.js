// Define the random words, we pick the element where we have to type and where we put the words
var randomWords = ["hello", "how", "first", "second", "keyboard", "lvdwig", 
"futsal", "forward", "goalkeeper", "coding", "webpage", "css", "js",
"town", "before", "after", "below", "under", "counter", "videogames",
"mouse", "love", "cat", "dog", "friend", "brother", "family", "lights"] 
var wordstoType = document.getElementById('textToReply')
var wordsTyped = document.getElementById("inputW")

// Get random words from the randomWords array
function getRandomWords() {
    for (i = 0; i < 15; i++) {
        var random = Math.floor(Math.random() * randomWords.length)
        const word = randomWords[random]
        wordstoType.innerHTML += " " + word;
    }
}

wordsTyped.addEventListener('input', () => {
  const getSpan = wordstoType.querySelectorAll('span')
  const getValue = wordsTyped.value.split('')

  getSpan.forEach((characterSpan, index) => {
    const character = getValue[index]
    if (character == null) {
      console.log("null")
    }
    else if (character === characterSpan.innerText) {
      console.log("Correct")
    } else {
      console.log("Incorrect")
    }
  })
})


// When Tab is pressed, it empty the content of the textArea
document.addEventListener("keyup", function(event) {
    if (event.code === 'Tab') {
        wordsTyped.value = ''
        wordstoType.innerHTML = ''
        getRandomWords()
    }
});

getRandomWords()
