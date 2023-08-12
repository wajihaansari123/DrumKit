//Detecting button press
var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handlClick);//added event listener to specific button
}
function handlClick() {
    var buttonInnerHTML = this.innerHTML;//which key from inner html have been selected
    makeSound(buttonInnerHTML);

    ButtunAnimation(buttonInnerHTML);
}

//Detecting keyboard press
document.addEventListener("keypress",pressed)//added event listener to entire document
  function pressed(){
        makeSound(event.key);

        ButtunAnimation(event.key)
    }

    function makeSound(key){
        switch (key) {
            case 'w':
            // addEventListener("click",(this.style.color) = "white")
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        
            case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
                
            case 's':
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
                
            case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
                
            case 'j':
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
                
            case 'k':
            var kickbass = new Audio("sounds/kick-bass.mp3")
            kickbass.play();
            break;
                
            case 'l':
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;   
        }
        
    }

function ButtunAnimation(currentkey)
{
    var activebutton = document.querySelector("." + currentkey)

    activebutton.classList.add("pressed");

  //  document.querySelector("." + currentkey).classList.add("pressed")

    setTimeout(function(){
        activebutton.classList.remove("pressed")},100)
    }
//settimeout take two parameters 1st = fucntion on which it is being applied and 2nd is time interval


    // setTimeout(removeab,100,)
    // function removeab(){
    //     activebutton.classList.remove("pressed")
    // }

//random word generator 
function generaterandomwords(length,letter){
    var randomword = '';
    for (var i = 0 ;i<length; i++)
    {
        randomword += letter[Math.floor(Math.random()*letter.length)]
    }
    return randomword;
}
const specifiedletter = 'wasdjkl'
const randomword2 = generaterandomwords(7,specifiedletter)

const randomWordElement = document.querySelector('.random-word');
randomWordElement.textContent = randomword2;