// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //get available voices
  window.speechSynthesis.addEventListener("voiceschanged",loadVoice);

  //play voice
  let play_button = document.querySelector('button');
  play_button.addEventListener('click', playVoice);
}

function loadVoice() {
  const synth = window.speechSynthesis;

  let voice_select = document.getElementById('voice-select');
  let voices = synth.getVoices();

  console.log(synth.getVoices())

  console.log(voices);

  for(let i = 0; i < voices.length; i++){
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    option.value = voices[i].name;
    voice_select.appendChild(option);
  }
}

function playVoice(){
  let voice_select = document.getElementById('voice-select');
  let curr_voice = voice_select.value;

  let utterance = new SpeechSynthesisUtterance();
  utterance.text = document.getElementById('text-to-speak').value;
  utterance.voice = speechSynthesis.getVoices().find((voice) => voice.name === curr_voice);
  window.speechSynthesis.speak(utterance);
}