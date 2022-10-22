// Pega o ID do audio
var podcastAudio = document.getElementById('Fabio');

var music_for_pass = document.getElementById('piruka');

var playBtn = document.querySelector('.play').addEventListener('click', playShow);

var pauseBtn = document.querySelector('.pause').addEventListener('click', pauseShow);

music_for_pass.addEventListener('timeupdate', barra)
//LIST OF MUSIC
var list_of_music = {
  name: "Piruka - Fé",
  arquivo: "../Music/Piruka - Fé (64 kbps).mp3",
  image: "../Image/Piruka - fe.jpg",
}
//button pass
function pass_new_music(){
  podcastAudio.play();
  document.querySelector('.button_right').style.display = 'block'
  document.querySelector('.pause').style.display = 'block'
  document.querySelector('.play').style.display = 'none'
}
// Play audio & mostra pause btn
function playShow() {
  music_for_pass.play();
  document.querySelector('.pause').style.display = 'block'
  document.querySelector('.play').style.display = 'none'
};

// Pause audio & mostra play btn
function pauseShow () {
  
  music_for_pass.pause();
  document.querySelector('.play').style.display = 'block'
  document.querySelector('.pause').style.display = 'none'
};
//BARRA CONTA A MUSICA
function barra(){
  let atualizarbarra = document.querySelector('progress');
  atualizarbarra.style.width = Math.floor((music_for_pass.currentTime / music_for_pass.duration) * 100) + '%';
  var tiempo = document.querySelector('.init');
  tiempo.textContent = Math.floor(music_for_pass.currentTime)
};