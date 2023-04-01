const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
const audioPlayer = document.querySelector("audio");

playPauseBtn.onclick = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
  }
};

stopBtn.onclick = () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  playPauseBtn.textContent = "Play";
};

rwdBtn.onclick = () => {
  audioPlayer.currentTime -= 3;
};

fwdBtn.onclick = () => {
  audioPlayer.currentTime += 3;
  if (audioPlayer.currentTime >= audioPlayer.duration || audioPlayer.paused) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseBtn.textContent = "Play";
  }
};

audioPlayer.ontimeupdate = () => {
  const minutes = Math.floor(audioPlayer.currentTime / 60);
  const seconds = Math.floor(audioPlayer.currentTime - minutes * 60);
  const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
  const secondValue = seconds < 10 ? `0${seconds}` : seconds;

  const mediaTime = `${minuteValue}:${secondValue}`;
  timeLabel.textContent = mediaTime;
};

const audio = document.getElementById('audio-player');
const volumeSlider = document.querySelector('.volume-slider');
const muteButton = document.querySelector('.mute');

// Set initial volume to 100%
audio.volume = 1;
volumeSlider.value = audio.volume;

// Add event listener to volume slider
volumeSlider.addEventListener('input', function(e) {
  audio.volume = e.target.value;
});

// Add event listener to mute button
muteButton.addEventListener('click', function() {
  if (audio.volume === 0) {
    audio.volume = volumeSlider.value;
    muteButton.textContent = 'Mute';
  } else {
    audio.volume = 0;
    muteButton.textContent = 'Unmute';
  }
});
