var red = document.querySelector('#red')
var green = document.querySelector('#green')
var blue = document.querySelector('#blue')
var div = document.querySelector('#div')

var redVal = document.querySelector('.redVal')
var greenVal = document.querySelector('.greenVal')
var blueVal = document.querySelector('.blueVal')


function colorGenerater() {
        div.style.backgroundColor = `rgb(${red.value}, ${green.value} , ${blue.value})`
        redVal.innerHTML = `RED :${red.value}`
        greenVal.innerHTML = `GREEN :${green.value}`
        blueVal.innerHTML = `BLUE :${blue.value}`
        red.value = " "
        green.value = " "
        blue.value = " "
    
    
    
}