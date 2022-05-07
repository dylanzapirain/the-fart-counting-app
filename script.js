

// document.querySelector() allows us to change html elements!


// This works!!!

function play() {
        let audio = document.getElementById("audio");
        audio.play();
      }


document.getElementById('btn').addEventListener('click',count);

let counter = 0;

function count(){
  counter = counter+1;
  document.querySelector('h2').innerHTML = counter;
  
  if (counter % 10 === 0){
    alert(`Dayum you stinky today huh? ${counter} farts!`);
  }
}

