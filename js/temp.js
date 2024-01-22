//modal buttons and opening and closing modals
// clicking button 1 opens modal 1
document
  .querySelector('[data-modal-id="modal1"]')
  .addEventListener("click", function () {
    document.getElementById("modal1").classList.add("open");
  });

// clicking button 2 opens modal 2
document
  .querySelector('[data-modal-id="modal2"]')
  .addEventListener("click", function () {
    document.getElementById("modal2").classList.add("open");
  });

// clicking button 3 opens modal 3
document
  .querySelector('[data-modal-id="modal3"]')
  .addEventListener("click", function () {
    document.getElementById("modal3").classList.add("open");
  });

// clicking button 4 opens modal 4
document
  .querySelector('[data-modal-id="modal4"]')
  .addEventListener("click", function () {
    document.getElementById("modal4").classList.add("open");
  });

// clicking book me button opens book modal and fills in date and time
document
  .querySelector('[data-modal-id="book-modal"]')
  .addEventListener("click", function () {
    document.getElementById("book-modal").classList.add("open");
    document.querySelector(".chosen-date").textContent =
      document.querySelector(".book-date input").value;
    document.querySelector(".chosen-time").textContent =
      document.querySelector(".book-time input").value;
  });

// clicking close button closes modal
document.querySelectorAll(".modal-close-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest(".modal").classList.remove("open");
  });
});

//dark mode toggle
const toggle = document.querySelector(".light-dark-toggle");
const body = document.querySelector("body");
const span = document.querySelector(".light-dark-toggle span");
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    span.textContent = "lights on";
  } else {
    span.textContent = "lights off";
  }
});

//auto type script
var typed = new Typed(".auto-type", {
  strings: [
    "Yannick,",
    "een fotograaf,",
    "een developer,",
    "een designer,",
    "een student,",
    "Yannick,",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  loop: false,
  startDelay: 1000,
});

//video controls
const video = document.querySelector("video");
const playpauseBtn = document.querySelector(".playpause-btn");
const ffwBtn = document.querySelector(".ffw-btn");

playpauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playpauseBtn.innerHTML = '<img src="assets/pause.svg" alt="pause" />';
  } else {
    video.pause();
    playpauseBtn.innerHTML = '<img src="assets/play.svg" alt="play" />';
  }
});

video.addEventListener("ended", () => {
  video.pause();
  playpauseBtn.innerHTML = '<img src="assets/play.svg" alt="play" />';
});

ffwBtn.addEventListener("click", () => {
  video.currentTime += 10;
});

//darken video when video ends
video.addEventListener("ended", () => {
  video.classList.add("darken");
});

//remove darken when video plays again
video.addEventListener("play", () => {
  video.classList.remove("darken");
});

//current video changes when video selector is clicked
document.querySelector(".video-1").addEventListener("click", function () {
  document.querySelector(".current-video").src =
    "https://player.vimeo.com/progressive_redirect/playback/839101289/rendition/1080p/file.mp4?loc=external&signature=4259aa10fe20ff0d7eea7630f28ef7b4e22009c7187b25267082f3d9f1edd520";
});

document.querySelector(".video-2").addEventListener("click", function () {
  document.querySelector(".current-video").src =
    "https://player.vimeo.com/progressive_redirect/playback/838984157/rendition/720p/file.mp4?loc=external&signature=aee192fd91f813202d0c193e970f9cb034d9b2b90eb1037d1541bce45073516a";
});

document.querySelector(".video-3").addEventListener("click", function () {
  document.querySelector(".current-video").src =
    "https://player.vimeo.com/progressive_redirect/playback/839105112/rendition/1080p/file.mp4?loc=external&signature=810530ca323b5095f9f525a8a6322a7cb95574e86d29d2fea4b1034f1bd24322";
});

document.querySelector(".video-4").addEventListener("click", function () {
  document.querySelector(".current-video").src =
    "https://player.vimeo.com/progressive_redirect/playback/838986078/rendition/720p/file.mp4?loc=external&signature=685edfba0eca88af821101f10cc91a91303259e465d11a1b6c4f08c8071e4aa3";
});

document.querySelector(".video-5").addEventListener("click", function () {
  document.querySelector(".current-video").src =
    "https://player.vimeo.com/progressive_redirect/playback/838986219/rendition/720p/file.mp4?loc=external&signature=5fa63fe205da67c0e82fd7f7f4441c3291f0bd9e81f3296877e7b2879a59ba07";
});

//give the current active video selector span a class of active
document.querySelectorAll(".video-selector span").forEach(function (span) {
  span.addEventListener("click", function () {
    document.querySelectorAll(".video-selector span").forEach(function (span) {
      span.classList.remove("active");
    });
    span.classList.add("active");
  });
});

//selecting a video autoplays the video
document.querySelectorAll(".video-selector span").forEach(function (span) {
  span.addEventListener("click", function () {
    document.querySelector(".current-video").play();
    document.querySelector(".playpause-btn").innerHTML =
      '<img src="assets/pause.svg" alt="pause" />';
  });
});
