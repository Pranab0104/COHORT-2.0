// document.addEventListener('keydown', e => {
//   console.log(e.key, e.code);
// });

//for keyboard-press only! 
const h2 = document.querySelector('h2')

let piano = document.addEventListener('keydown', (e) => {
  const sounds = {

    //black keys sound
    KeyZ: './assets/piano-mp3_A0.mp3',
    KeyX: './assets/piano-mp3_A1.mp3',
    KeyC: './assets/piano-mp3_A2.mp3',
    KeyV: './assets/piano-mp3_A3.mp3',
    KeyB: './assets/piano-mp3_A4.mp3',
    KeyN: './assets/piano-mp3_A5.mp3',
    KeyM: './assets/piano-mp3_A6.mp3',
    BracketLeft: './assets/piano-mp3_Ab1.mp3',
    BracketRight: './assets/piano-mp3_Ab2.mp3',

    //white keys sound
    KeyQ: './assets/piano-mp3_Ab3.mp3',
    KeyW: './assets/piano-mp3_Ab4.mp3',
    KeyE: './assets/piano-mp3_Ab5.mp3',
    KeyR: './assets/piano-mp3_Ab6.mp3',
    KeyT: './assets/piano-mp3_Ab7.mp3',
    KeyY: './assets/piano-mp3_B0.mp3',
    KeyU: './assets/piano-mp3_B1.mp3',
    KeyI: './assets/piano-mp3_B2.mp3',
    KeyO: './assets/piano-mp3_B3.mp3',
    KeyP: './assets/piano-mp3_B4.mp3',
    KeyA: './assets/piano-mp3_B5.mp3',
    KeyS: './assets/piano-mp3_B6.mp3',
    KeyD: './assets/piano-mp3_B7.mp3',
    KeyF: './assets/piano-mp3_C1.mp3',
    KeyG: './assets/piano-mp3_C2.mp3',
    KeyH: './assets/piano-mp3_C3.mp3',
    KeyJ: './assets/piano-mp3_C4.mp3',
    KeyK: './assets/piano-mp3_C5.mp3',
    KeyL: './assets/piano-mp3_C6.mp3',
    Slash: './assets/sounds_28.mp3',

  };

  if (sounds[e.code]) {
    let audio = new Audio(sounds[e.code]);
    audio.play();
    // console.log(audio.code);
    h2.innerHTML = 'Please Enter the keys shown on the piano only.'
  }
  else {
    h2.innerHTML = 'Please enetr the valid keys to make your own sound!'
  }
});

//for mouse-click only! 
