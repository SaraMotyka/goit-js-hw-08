import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

try {
  //1
  const localStorageKey = 'videoplayer-current-time';
  const iframe = document.querySelector('#vimeo-player');
  const player = new Vimeo(iframe);
  //2
  const onPlay = function (data) {
    localStorage.setItem(localStorageKey, data.seconds);
  };
  //3
  player.on('loaded', () => {
    const setTime = localStorage.getItem(localStorageKey) || 0;
    player.setCurrentTime(setTime);
  });
  //4
  player.on('timeupdate', throttle(onPlay, 1000));
} catch (error) {
  console.log('Sorry, try later!');
}

//1 Dpodawanie zmiennych
//2 Dodanie key i value do local storage
//3 Odtwarzanie po przeładowaniu strony od ostatniego czasu
//4 Aktualizacja czasu w local storage
