document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video-entoto");
  
    // Play the video when clicked
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  