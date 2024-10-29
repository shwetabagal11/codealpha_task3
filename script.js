const songs = [
    { title: "Song 1", src: "song1.mp3" },
    { title: "Song 2", src: "song2.mp3" },
    { title: "Song 3", src: "song3.mp3" }
];

let currentIndex = 0;
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const trackTitle = document.getElementById('track-title');
const playPauseBtn = document.getElementById('playPauseBtn');

function updateTrack() {
    audioSource.src = songs[currentIndex].src;
    trackTitle.textContent = `Track: ${songs[currentIndex].title}`;
    audio.load();
}

function changeSong(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = songs.length - 1; // Loop to last song
    } else if (currentIndex >= songs.length) {
        currentIndex = 0; // Loop to first song
    }
    updateTrack();
    audio.play();
    playPauseBtn.textContent = "Pause";
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
}

// Initialize the player with the first song
updateTrack();
