window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    // Clear and repopulate voice list
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  // Some browsers load voices asynchronously
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  populateVoices(); // Also try once immediately

  speakButton.addEventListener('click', () => {
    const selectedIndex = voiceSelect.value;

    if (selectedIndex === "select") return; // Prevent trying to speak without a voice

    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices[selectedIndex];
    synth.speak(utterance);
  });
}
