var randomWords = ["hello", "how", "first", "second", "keyboard", "lvdwig", 
"futsal", "forward", "goalkeeper", "coding", "webpage", "css", "js"] 
var wordstoType = document.getElementById('textToReply')

function getRandomWords() {
    for (i = 0; i < randomWords.length; i++) {
        wordstoType.innerHTML += " " + randomWords[i];
        console.log(randomWords[i])
    }
}

getRandomWords()
