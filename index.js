const button = document.querySelectorAll("button");

  button.forEach((button) => {
    button.addEventListener("click", function(){
        const letter = this.innerHTML;
        makeSound(letter);
        addAnimationButton(letter);

    });
  })

  //adding keydown event I can also listen to the event on the doucument object

  window.addEventListener("keydown", function(event) {
    makeSound(event.key);
    addAnimationButton(event.key);
  });




function makeSound(key){

  switch(key){
    case "w":
    const tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    const tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    const tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    const tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    const crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "k":
    const kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
    break;

    case "l":
    const snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    default: console.log("none in the switch stament");
  }


}

//addign animation

function addAnimationButton(currenButton) {
    const activeButton = document.querySelector("." + currenButton);
    activeButton.classList.toggle("pressed");
    //add setTimeout to remove the presses class after 3 seconds
}
