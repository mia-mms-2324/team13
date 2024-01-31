addEventListener("click", function () {
  var el = document.documentElement,
    rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen;
  rfs.call(el);
});

// Function to navigate to another page with an optional URL parameter
function navigateToAnotherPage(url) {
  // Navigate to the specified page or use a default URL
  window.location.href = url || "multimediastory.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // Use 'let' for variable declarations
  let backgroundVideo = document.getElementById("backgroundVideo");
  let myButton = document.getElementById("doorgaanButton");

  // Set a timeout to play the video after 11 seconds (11000ms)
  setTimeout(function () {
    if (backgroundVideo) {
      // Play the background video

      backgroundVideo.play();

      // Set an event listener to pause the video when it ends
      backgroundVideo.addEventListener("ended", function () {
        backgroundVideo.pause();
        backgroundVideo.currentTime = backgroundVideo.duration; // Set to the last frame

        // Show the button 65px above the viewport's bottom
        if (myButton) {
          myButton.style.opacity = 1;
          myButton.style.bottom = "65px";
          myButton.disabled = false; // Enable the button
        }
      });
    }
  }, 11000); // Adjusted timeout duration as per your requirement
});

function myButtonClick() {
  // Call the function to navigate to the specified page
  navigateToAnotherPage("multimediastory.html");
}
