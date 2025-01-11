'use strict'

function onAsk(ev) {
    ev.preventDefault()
    checkInput()    
}

function checkInput() {
    const userInput = document.querySelector('.user-question').value
    console.log('user input:', userInput)
    
    if (userInput.length < 3 || userInput.slice(-1) !== '?') {
        showUserMsg()
        return
    }
}

function showUserMsg() {
    document.querySelector('.user-msg').hidden = false
}

function hideUserMsg() {
    document.querySelector('.user-msg').hidden = true
}