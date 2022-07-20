var randomWords = ["hello", "how", "first", "second", "keyboard", "lvdwig", 
"futsal", "forward", "goalkeeper", "coding", "webpage", "css", "js"] 
var wordstoType = document.getElementById('textToReply')

function fillRandomWords() {
    return fetch(randomWords)
}

async function getRandomWords() {
    var words = randomWords.forEach(putRandomWords)
    console.log(words)
}

function putRandomWords() {
    
}

getRandomWords()
