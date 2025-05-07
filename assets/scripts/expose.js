// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const image = document.querySelector('#expose img');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    audio.src = `assets/audio/${horn}.mp3`;
    image.src = `assets/images/${horn}.svg`;
    image.alt = horn.replace('-', ' ') + ' image';
  });

  volumeSlider.addEventListener('input', () => {
    const volume = parseInt(volumeSlider.value);
    audio.volume = volume / 100;

    // Update volume icon
    let iconLevel;
    if (volume === 0) iconLevel = 0;
    else if (volume < 33) iconLevel = 1;
    else if (volume < 67) iconLevel = 2;
    else iconLevel = 3;

    volumeIcon.src = `assets/icons/volume-level-${iconLevel}.svg`;
    volumeIcon.alt = `Volume level ${iconLevel}`;
  });

  playButton.addEventListener('click', () => {
    if (audio.src) {
      audio.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });
}
