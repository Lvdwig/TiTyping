// Define the random words, we pick the element where we have to type and where we put the words
var randomWords = ["hello", "how", "first", "second", "keyboard", "lvdwig", 
"futsal", "forward", "goalkeeper", "coding", "webpage", "css", "js",
"town", "before", "after", "below", "under", "counter", "videogames",
"mouse", "love", "cat", "dog", "friend", "brother", "family", "lights"] 
var wordstoType = document.getElementById('textToReply')
var wordsTyped = document.getElementById("inputW")
var counter = 0

// Get random words from the randomWords array
function getRandomWords() {
    const limitWords = 20
    for (i = 0; i < limitWords; i++) {
        var random = Math.floor(Math.random() * randomWords.length)
        const word = randomWords[random]
        wordstoType.innerHTML += " " + word;
    }
}

wordsTyped.addEventListener('input', () => {
    var gettypedChar = wordsTyped.value
    var lastCharTyped = gettypedChar.charAt(gettypedChar.length -1)
    var getWords = wordstoType.innerText
    var currentChar = getWords.charAt(counter)
    
    //console.log("This is the last char typed:" + lastCharTyped)
    //console.log("This is the char that you have to type:" + currentChar)

    if (lastCharTyped == currentChar) {
        console.log("Correct!")
        counter += 1
    } else {
        console.log("Incorrect")
    }

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
