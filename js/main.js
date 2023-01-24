var wordPicked = ""
var totalChars = ""
let wordsTyped = 0

amountWords.addEventListener('focusout', (event) => {
  totalChars = 0
  words.innerHTML = ""
  //scoreDiv.innerHTML = ""
  //resetTest.innerHTML = ""
  fillWords(Number(event.target.value))
  //mustEnter = true
  wordsTyped = 0
  amountTyped.innerHTML = ""
}); 

function fillWords(amountWordsV) {

  // To make visible the cursor 
  cursor.style.display = "block"

  if (amountWordsV > 50) {
    amountWordsV = 50
    document.getElementById("amountWordsV").value = "50"
  }
  
  for (let i = 0; i < amountWordsV; i++) {
    // we call the function to pick a Word
    pickWords()

    totalChars += wordPicked.length
    // create a div to put the word
    var word = document.createElement("div")
    // Put a class to the div
    word.classList.add("word")
    // We put the words inside of the div
    words.appendChild(word)
  
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

  addClass(document.querySelector('.word'), 'current')
  addClass(document.querySelector('.letter'), 'current')
}

fillWords(amountWordsV.value)

function pickWords() {
  // Generate Random number
  var random = Math.floor(Math.random() * wordList.length)
  // Pick a random word of the array
  return wordPicked = wordList[random]
}

function addClass(element, className) {
  element.className += ' '+className
}

function removeClass(element, className) {
  element.className = element.className.replace(className, '');
}

wordBox.addEventListener('keyup', (event) => {
  let typedChar = event.key
  let currentWord = document.querySelector('.word.current')
  let currentLetter = document.querySelector('.letter.current')

  // When you type a letter
  if (typedChar == 'Tab') {
  } else {
    if (typedChar != " " && typedChar != "Backspace") {

      if (currentLetter) {
        if (typedChar == currentLetter.innerHTML) {
          addClass(currentLetter, 'correct')
          removeClass(currentLetter, ' current')
          if (currentLetter.nextSibling) {
            addClass(currentLetter.nextSibling, 'current')
          } else {
            let lastWord = words.lastChild
            let lastLetterOfLastWord = lastWord.lastChild
            if (lastLetterOfLastWord.className == "letter correct"){
              getResults()
            }
          }
        } else {
          addClass(currentLetter, 'incorrect')
          removeClass(currentLetter, ' current')
          if (currentLetter.nextSibling) {
            addClass(currentLetter.nextSibling, 'current')
          }
        } 
      }
    }

    // when you press the Spacebar
    if (typedChar == " ") {
      if (currentLetter != currentWord.firstChild) {
      removeClass(currentWord, ' current')
      addClass(currentWord.nextSibling, 'current')
      if (currentLetter) {
        removeClass(currentLetter, ' current') 
      }
      addClass(currentWord.nextSibling.firstChild, 'current')   
      wordsTyped ++
      amountTyped.innerHTML = wordsTyped + " / " + amountWordsV.value 
      }
    }

    // when press Backspace
    if (typedChar == "Backspace") {

      if (currentLetter && currentLetter == currentWord.firstChild) {
        // make prev word current, last letter current
        if (!currentWord.previousSibling) {
        } else {
          wordsTyped --
          removeClass(currentWord, ' current')
          addClass(currentWord.previousSibling, 'current')
          removeClass(currentLetter, ' current')
          addClass(currentWord.previousSibling.lastChild, 'current')
          removeClass(currentWord.previousSibling.lastChild, ' incorrect')
          removeClass(currentWord.previousSibling.lastChild, ' correct')
        }
     } else if (currentLetter && currentLetter != currentWord.firstChild) {
        // move back one letter, invalidate letter
        removeClass(currentLetter, ' current')
        addClass(currentLetter.previousSibling, 'current')
        removeClass(currentLetter.previousSibling, ' incorrect')
        removeClass(currentLetter.previousSibling, ' correct')
      } else {
        addClass(currentWord.lastChild, 'current')
        removeClass(currentWord.lastChild, ' incorrect')
        removeClass(currentWord.lastChild, ' correct')
      }
    }
  }

  // move cursor
  let nextLetter = document.querySelector('.letter.current')
  let nextWord = document.querySelector('.word.current')
  let cursor = document.getElementById('cursor')
  cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 5 + 'px'
  cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px'

  // check if the test is finished

})

// when tab is pressed it will reload de game
wordBox.addEventListener("keydown", function(event) {
  if (event.code === 'Tab') {
    event.preventDefault()
    words.innerHTML = ""
    amountTyped.innerHTML = ""
    wordsTyped = 0
    fillWords(amountWordsV.value)
  }
});

function getResults() {
  amountTyped.innerHTML = ""
  words.innerHTML = ""
  cursor.style.display = "none"

  let elements = document.querySelector('.letter.correct')
  console.log(elements.length)
}
