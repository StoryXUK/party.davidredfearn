document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('video');
    const soundMessage = document.getElementById('soundMessage');

    // Toggle mute without pausing the video
    video.addEventListener('click', function(event) {
        video.muted = !video.muted; // Toggle mute
        if (!video.muted) {
            soundMessage.style.display = 'none'; // Hide the message when sound is on
        }
    });

    // Optional: Hide the message automatically after a few seconds
    setTimeout(() => {
        soundMessage.style.display = 'none';
    }, 5000); // Message hides after 5 seconds
});