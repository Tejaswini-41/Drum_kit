var totalDrumButtons = document.querySelectorAll(".drum").length; //len of buttons
for (var i = 0; i < totalDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () { //selectorAll otherwise it dont get clicked and[i] for the position
        //alert("I got clicked");

        console.log(this.style.color = "black"); //will change color of alpabet after get clicked
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}


    document.addEventListener("keydown", function (event){
    makeSound(event.key);
    });



function makeSound(key) {
    
    switch (key) {
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

            break;
        
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
              
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
}