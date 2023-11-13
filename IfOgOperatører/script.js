function bulbOff(){
    document.getElementById('lightbulb').style.backgroundColor = 'grey';
    document.getElementById('textbox').innerHTML = 'Lightbulb is off :(';
}
function bulbOn(){
    document.getElementById('lightbulb').style.backgroundColor = 'yellow';
    document.getElementById('textbox').innerHTML = 'Lightbulb is on!';
}