// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Demo video
const playBtn = document.getElementById('play-Video');
const video = document.getElementById('gameplay-video');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    document.getElementById('gameplay-slot').scrollIntoView({behavior:'smooth',block:'center'});
    video.play().catch(()=>{});
  });
}

// === User System ===
let currentUser = localStorage.getItem('currentUser') || null;
const users = JSON.parse(localStorage.getItem('users') || '[]');

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('usernameInput');
const loginMsg = document.getElementById('loginMessage');
const currentUserDisplay = document.getElementById('currentUser');

