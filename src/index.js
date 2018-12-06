import Game from "./game"
import "./main.scss"
import src from './music.mp3'
window.onload = () => {
  audio.src = src;
  audio.setAttribute("autoplay", true);
  var url = window.location.href;
  if (url.indexOf('?') > -1) {
    if (url.indexOf('reloaded') < 0) {
      url = url + "&reloaded=true";
      window.location = url;
    }
  }

  new Game();
  document.onclick = () => {
    if (over.style.display === "block") {
      new Game();
      over.style.display = 'none';
    }
  }
}