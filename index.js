
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(let i = 0; i< numberOfDrumButtons; i+=1){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        currentAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    currentAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function currentAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


