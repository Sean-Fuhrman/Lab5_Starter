// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let horn_select = document.getElementById('horn-select');
  horn_select.addEventListener('change', changeHorn);

  let volume_input = document.getElementById('volume');
  volume_input.addEventListener('input', changeVolume);

  let play_button = document.querySelector('button');
  play_button.addEventListener('click', playSound);
}

function changeHorn(){
  let horn_img = document.querySelector('img');
  let horn_audio = document.querySelector('audio');
  horn_img.src = 'assets/images/' + this.value + '.svg';
  horn_audio.src = 'assets/audio/' + this.value + '.mp3';
}

function changeVolume(){
  let volume_img = document.querySelector('div img');
  let volume = this.value;
  let horn_audio = document.querySelector('audio');
  if(volume == 0){
    volume_img.src = 'assets/icons/volume-level-0.svg';
  }
  else if(volume < 33){
    volume_img.src = 'assets/icons/volume-level-1.svg';
  }
  else if(volume < 67){
    volume_img.src = 'assets/icons/volume-level-2.svg';
  }
  else{
    volume_img.src = 'assets/icons/volume-level-3.svg';
  }
  horn_audio.volume = volume / 100;
}

function playSound(){
  let horn_audio = document.querySelector('audio');
  horn_audio.play();

  let horn_select = document.getElementById('horn-select');
  let volume_input = document.getElementById('volume');
  if(horn_select.value == 'party-horn' && volume_input.value != 0){
    let js_confetti = new JSConfetti();
    js_confetti.addConfetti();
  }
}