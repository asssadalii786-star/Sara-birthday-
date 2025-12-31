const heart = document.getElementById('heart-trigger');
const content = document.getElementById('content');
const music = document.getElementById('bg-music');

heart.addEventListener('click', () => {
  heart.style.display = 'none';
  content.style.display = 'block';
  music.play();
});
