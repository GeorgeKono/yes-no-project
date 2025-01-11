'use strict'

function onAsk(ev) {
    ev.preventDefault()
    checkUserInput()
    
    getAns(renderAns)
}

function renderAns(msg) {
    document.querySelector('.ans-container h2').innerHTML = msg.answer
    document.querySelector('.ans-container img').src = msg.image
}

function checkUserInput() {
    const userInput = document.querySelector('.user-question').value
    console.log('user input:', userInput)
    
    if (userInput.length < 3 || userInput.slice(-1) !== '?') {
        showUserMsg()
        return
    } else {
        showLoader()
    }
}

function showUserMsg() {
    document.querySelector('.user-msg').hidden = false
}

function hideUserMsg() {
    document.querySelector('.user-msg').hidden = true
}

function showAns() {
    document.querySelector('.ans-container').hidden = false
    document.querySelector('.loader-container').hidden = true
}

function showLoader() {
    document.querySelector('.ans-container').hidden = true
    document.querySelector('.loader-container').hidden = false
}