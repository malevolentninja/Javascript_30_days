function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function running all together

    key.classList.add('playing');
    audio.currentTime = 0; // rewind the audio to the start if hit in current secession
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key')); //listen to transition end on each key
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);