const musicButton = document.getElementById('music-button');
const startButton = document.getElementById('start-button');
const nameInput = document.getElementById('name-input');
let musicPlaying = false;
let audio = null; // 스코프 문제 해결을 위해 전역에서 선언

// Toggle music playback
musicButton.addEventListener('click', () => {
    if (!musicPlaying) {
        audio = new Audio('music.mp3'); // 음악 파일 로드
        audio.loop = true;
        audio.play();
        musicButton.innerText = "Pause";
        musicPlaying = true;
    } else if (audio) {
        audio.pause();
        musicButton.innerText = "Music";
        musicPlaying = false;
    }
});

// Start button functionality
startButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        window.location.href = `webcam.html?name=${encodeURIComponent(name)}`;
    } else {
        alert('Please enter your name.');
    }
});
