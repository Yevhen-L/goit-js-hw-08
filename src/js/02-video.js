import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerElement = document.getElementById('vimeo-player');

const player = new VimeoPlayer(playerElement);

const saveCurrentTime = throttle((time) => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000); 

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  saveCurrentTime(currentTime);
});

function restorePlaybackTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
}
player.ready().then(() => {
  restorePlaybackTime();
});