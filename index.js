const button = document.querySelectorAll("button");

  button.forEach((button) => {
    button.addEventListener("click", clicked);
  })

function clicked(){
//this.style.color = "white";


console.log(this);
}

  //const audio = new Audio("sounds/tom-1.mp3");
  //audio.play();
