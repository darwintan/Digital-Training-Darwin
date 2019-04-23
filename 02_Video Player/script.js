var vid = document.getElementById("player-video");
var playButton = document.getElementById("toggle-play");
var pauseButton = document.getElementById("toggle-pause");
var muteButton = document.getElementById("toggle-mute");
var unmuteButton = document.getElementById("toggle-unmute");
var replayButton = document.getElementById("toggle-replay");

function playVid() {
    vid.play();
    playButton.classList.remove("appear");
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    pauseButton.classList.add("appear");
}

function pauseVid() {
    vid.pause();
    playButton.classList.remove("hide");
    playButton.classList.add("appear");
    pauseButton.classList.remove("appear");
    pauseButton.classList.add("hide");
}


function muteVid() {
    vid.volume = 0;
    muteButton.classList.remove("appear");
    muteButton.classList.add("hide");
    unmuteButton.classList.remove("hide");
    unmuteButton.classList.add("appear");
}


function unmuteVid() {
    vid.volume = 1;
    muteButton.classList.remove("hide");
    muteButton.classList.add("appear");
    unmuteButton.classList.remove("appear");
    unmuteButton.classList.add("hide");
}


function replayVid() {
    vid.currentTime = 0;
    vid.play();
    playButton.classList.remove("appear");
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    pauseButton.classList.add("appear");
}
