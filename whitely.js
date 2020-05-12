// JavaScript Document

var video = document.getElementById("short");
video.oncanplaythrough = function() {
    video.muted = true;
    video.play();
}