function pushedLetter(htmlElement){
    let letterPressed = htmlElement.innerHTML
    document.getElementById('textbox').innerHTML += letterPressed;
}