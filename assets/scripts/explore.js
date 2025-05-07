// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const image = document.querySelector('#explore img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  populateVoices();

  speakButton.addEventListener('click', () => {
    const selectedIndex = voiceSelect.value;

    if (selectedIndex === "select") return;

    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices[selectedIndex];

    utterance.onstart = () => {
      image.src = 'assets/images/smiling-open.png';
      image.alt = 'Smiling face with open mouth';
    };

    utterance.onend = () => {
      image.src = 'assets/images/smiling.png';
      image.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}
