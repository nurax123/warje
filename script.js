const toggleButton = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('backgroundMusic');
const pages = {
  home: document.getElementById('home'),
  gallery: document.getElementById('gallery')
};

// Toggle navigasi muncul / hilang
toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Toggle halaman tampil / sembunyi
function togglePage(id) {
  const page = pages[id];
  page.style.display = page.style.display === 'block' ? 'none' : 'block';
}

// Musik play / pause
let isPlaying = false;
musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = '▶️';
  } else {
    music.play();
    musicBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});
