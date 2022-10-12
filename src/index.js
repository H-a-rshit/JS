import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>DRUM KIT!</h1>
<div class="key" data-key="65">
<kbd>A</kbd>
<span class="sound">CLAP</span>
  </div>
  <div class="key" data-key="83">
<kbd>S</kbd>
<span class="sound">CLAP</span>
  </div>
  <div class="key" data-key="68">
<kbd>D</kbd>
<span class="sound">CLAP</span>
  </div>
  <div class="key" data-key="70">
<kbd>F</kbd>
<span class="sound">CLAP</span>
  </div>
  <div class="key" data-key="71">
<kbd>G</kbd>
<span class="sound">CLAP</span>
  </div>
  <div class="key" data-key="72">
<kbd>H</kbd>
<span class="sound">CLAP</span>
  </div>
  <div class="key" data-key="74">
<kbd>J</kbd>
<span class="sound">CLAP</span>
  </div>
  <div class="key" data-key="75">
<kbd>K</kbd>
<span class="sound">CLAP</span>
  </div>
  <div class="key" data-key="76">
<kbd>L</kbd>
<span class="sound">CLAP</span>
  </div>
  <audio data-key="65" src="https://www.youtube.com/watch?v=JP6lOO14-K4"></audio>
  <audio data-key="83" src="sounds/clap.wav"></audio>
  <audio data-key="68" src="sounds/clap.wav"></audio>
  <audio data-key="70" src="sounds/clap.wav"></audio>
  <audio data-key="71" src="sounds/clap.wav"></audio>
  <audio data-key="72" src="sounds/clap.wav"></audio>
  <audio data-key="74" src="sounds/clap.wav"></audio>
  <audio data-key="75" src="sounds/clap.wav"></audio>
  <audio data-key="76" src="sounds/clap.wav"></audio>
`;
function play(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  console.log(e);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
function removeTransition(e) {
  console.log("abcdefgh");
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", play);
