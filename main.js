var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
]

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
]

// querySelectors
var affirmationRadioBtn = document.querySelector("#affirmation-radio")
var mantraRadioBtn = document.querySelector("#mantra-radio")
var receiveMessageBtn = document.querySelector(".receive-message-btn")
var displayedMessage = document.querySelector(".random-result-message")
var meditationIcon = document.querySelector(".meditation-icon")
var removeMessageBtn = document.querySelector(".remove-message-btn")

// event listeners
receiveMessageBtn.addEventListener("click", function () {
  getRandomMessage()
  displayMessage()
  hideElement(meditationIcon)
  showElement(removeMessageBtn)
  checkIfMessageAvailable()
})

removeMessageBtn.addEventListener("click", function(){
  removeMessageFromList()
  renderRemovedMessage()
  checkIfMessageAvailable()
})

// functions
function getRandomMessage() {
  var randAffirmationIndex = getRandomIndex(affirmations)
  var randMantraIndex = getRandomIndex(mantras)
  if (affirmationRadioBtn.checked) { 
    return affirmations[randAffirmationIndex]
  } else if (mantraRadioBtn.checked) {
    return mantras[randMantraIndex]
  }
}

function checkIfMessageAvailable() {
  if (affirmationRadioBtn.checked && affirmations.length === 0) {
    alert("Please refresh the page to receive a new affirmation message.")
    return
  } else if (mantraRadioBtn.checked && mantras.length === 0) {
    alert("Please refresh the page to receive a new mantra message.")
    return
  }
}

function displayMessage() {
  var randMessage = getRandomMessage()
  displayedMessage.innerHTML = randMessage
  console.log(randMessage)
}

function hideElement(element) {
element.classList.add("hidden")
}

function showElement(element) {
  element.classList.remove("hidden")
}

function removeMessageFromList(message) { 
  var indexOfAffirmation = affirmations.indexOf(message)
  var indexOfMantra = mantras.indexOf(message)
  if (indexOfAffirmation !== -1) {
    affirmations.splice(indexOfAffirmation, 1)
  }
  if (indexOfMantra !== -1) {
    mantras.splice(indexOfMantra, 1)
  }
}

function renderRemovedMessage() {
  var messageToRemove = displayedMessage.innerHTML
  removeMessageFromList(messageToRemove)
  displayMessage()
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}