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
  player.setCurrentTime(JSON.parse(localStorage.getItem(localStorageKey)));
  //4
  player.on('timeupdate', throttle(onPlay, 1000));
  console.log('Everything is fine!');
} catch (error) {
  console.log('Sorry, try later!');
}

//1 Dpodawanie zmiennych
//2 Dodanie key i value do local storage
//3 Odtwarzanie po przeładowaniu strony od ostatniego czasu
//4 Aktualizacja czasu w local storage
