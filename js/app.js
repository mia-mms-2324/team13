let currentDialogueIndex = 0;
let dialogues = [];
let audioUnlocked = 0;
let audio = null;

//let's - > apps
let box = document.getElementById("apps");
let box2 = document.querySelector(".scene");
let inbox = document.querySelector(".inbox");
let inboxImg = document.querySelector(".inboxImg");
let systemenImg = document.querySelector(".systemenImg");
let systemen = document.querySelector(".systemen");
let onderzoek = document.querySelector(".onderzoek");
let onderzoekImg = document.querySelector(".onderzoekImg");

function checkAudioStatus() {
  let currentDialogue = dialogues[currentDialogueIndex];
  return currentDialogue.audio;
}

function updateDialogue() {
  let currentDialogue = dialogues[currentDialogueIndex];
  let speakerName = currentDialogue.Gender === "male" ? "BRUCE" : "NOVA";
  let dialogueTitleElement = document.querySelector(".dialogueTitle");
  let bruceElement = document.querySelector(".bruce");
  let novaElement = document.querySelector(".nova");

  // Reset style properties for elements
  dialogueTitleElement.style.display = "block";
  bruceElement.style.display = "none";
  novaElement.style.display = "none";

  if (currentDialogue.Gender == "null") {
    dialogueTitleElement.style.display = "none";
  } else {
    dialogueTitleElement.style.display = "block";
    dialogueTitleElement.textContent = speakerName + "";
  }

  dialogueTitleElement.classList.toggle(
    "dialogueTitle",
    currentDialogue.Gender !== null
  );

  document.querySelector(".dialogueText").textContent =
    currentDialogue.dialogue;
  triggerAnimation();

  console.log(
    "ID: " +
      currentDialogue.ID +
      ", Gender: " +
      currentDialogue.Gender +
      ", SpriteID: " +
      currentDialogue.SpriteID
  );

  // Add animation to .bruce and .nova
  document.querySelector(".bruce").style.transform = "translateY(20vw)"; // Move down
  document.querySelector(".bruce").style.opacity = 0;
  document.querySelector(".nova").style.transform = "translateY(20vw)"; // Move down
  document.querySelector(".nova").style.opacity = 0;

  setTimeout(() => {
    // After a short delay, reset the transform to move them up
    document.querySelector(".bruce").style.transform = "translateY(-10vh)";
    document.querySelector(".bruce").style.opacity = 1;
    document.querySelector(".nova").style.transform = "translateY(-10vh)";
    document.querySelector(".nova").style.opacity = 1;
  }, 300); // 0.3s to match the transition duration

  let audioStatus = checkAudioStatus();
  if (audioStatus === true) {
    console.log("Audio is set to true.");
    // Mock code for when audio is true
    audioUnlocked++;
    trueaudio();
  } else if (audioStatus === false) {
    console.log("Audio is set to false.");
    // Mock code for when audio is false
    falseaudio();
  } else {
    console.log("Audio is set to null.");
    // Mock code for when audio is null
  }

  // Add debugging statements to check values
  console.log(
    "Gender: " +
      currentDialogue.Gender +
      ", SpriteID: " +
      currentDialogue.SpriteID
  );

  switch (currentDialogue.Gender) {
    case "male":
      // Set .bruce visible and .nova hidden
      document.querySelector(".bruce").style.display = "block";
      document.querySelector(".nova").style.display = "none";

      switch (currentDialogue.SpriteID) {
        case "1":
          // Set background image for .bruce based on SpriteID
          document.querySelector(".bruce").style.backgroundImage =
            "url('./assets/images/bruce1.png')";
          break;
        case "2":
          // Set background image for .bruce based on SpriteID
          document.querySelector(".bruce").style.backgroundImage =
            "url('./assets/images/bruce2.png')";
          break;
        case "3":
          // Set background image for .bruce based on SpriteID
          document.querySelector(".bruce").style.backgroundImage =
            "url('./assets/images/bruce3.png')";
          break;
        case "4":
          // Set background image for .bruce based on SpriteID
          document.querySelector(".bruce").style.backgroundImage =
            "url('./assets/images/bruce4.png')";
          break;
        case "5":
          // Set background image for .bruce based on SpriteID
          document.querySelector(".bruce").style.backgroundImage =
            "url('./assets/images/bruce5.png')";
          break;
        case "6":
          // Set background image for .bruce based on SpriteID
          document.querySelector(".bruce").style.backgroundImage =
            "url('./assets/images/bruce6.png')";
          break;
        default:
          break;
      }
      break;
    case "female":
      // Set .nova visible and .bruce hidden
      document.querySelector(".nova").style.display = "block";
      document.querySelector(".bruce").style.display = "none";

      switch (currentDialogue.SpriteID) {
        case "1":
          // Set background image for .nova based on SpriteID
          document.querySelector(".nova").style.backgroundImage =
            "url('./assets/images/nova1.png')";
          break;
        case "2":
          // Set background image for .nova based on SpriteID
          document.querySelector(".nova").style.backgroundImage =
            "url('./assets/images/nova2.png')";
          break;
        case "3":
          // Set background image for .nova based on SpriteID
          document.querySelector(".nova").style.backgroundImage =
            "url('./assets/images/nova3.png')";
          break;
        case "4":
          // Set background image for .nova based on SpriteID
          document.querySelector(".nova").style.backgroundImage =
            "url('./assets/images/nova4.png')";
          break;
        case "5":
          // Set background image for .nova based on SpriteID
          document.querySelector(".nova").style.backgroundImage =
            "url('./assets/images/nova5.png')";
          break;
        case "6":
          // Set background image for .nova based on SpriteID
          document.querySelector(".nova").style.backgroundImage =
            "url('./assets/images/nova6.png')";
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  loadPreviousDialogue();
}

function loadNextDialogue() {
  if (currentDialogueIndex < dialogues.length - 1) {
    currentDialogueIndex++;
    updateDialogue();
  }
}
function resetToFirstDialogue() {
  currentDialogueIndex = 0;
  updateDialogue();
}
function triggerAnimation() {
  let dialogueText = document.querySelector(".dialogueText");
  dialogueText.style.animation = "none"; // Remove the animation
  dialogueText.offsetHeight; // Trigger reflow
  dialogueText.style.animation = ""; // Reapply the animation
}

function loadPreviousDialogue() {
  let previous = currentDialogueIndex - 1;

  if (previous >= 0 && previous < dialogues.length) {
    document.querySelector(".previousdialogue").textContent =
      dialogues[previous].dialogue;
  } else {
    // Handle the case where there's no valid previous dialogue
    document.querySelector(".previousdialogue").textContent =
      "No previous dialogue available";
  }
}

function trueaudio() {
  let audioElement = document.querySelector(".audio");
  if (audioElement) {
    audioElement.style.display = "block";
  }
  switch (audioUnlocked) {
    case 1:
      audio = new Audio("./assets/audio/audio1.mp3");
      break;
    case 2:
      audio = new Audio("./assets/audio/audio2.mp3");
      break;
    case 3:
      audio = new Audio("./assets/audio/audio3.mp3");
      break;
    case 4:
      audio = new Audio("./assets/audio/audio4.mp3");
      break;
    case 5:
      audio = new Audio("./assets/audio/audio5.mp3");
      break;
  }
}

function falseaudio() {
  let audioElement = document.querySelector(".audio");
  if (audioElement) {
    audioElement.style.display = "none";
  }
}

// Fetching the JSON data
fetch("./json/dialogue.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dialogues = Object.values(data.dialogue);
    updateDialogue(); // Initialize with the first dialogue
  })
  .catch(function (error) {
    return console.error("Error loading dialogue data:", error);
  });
document.querySelector(".dialogue").addEventListener("click", loadNextDialogue);

document.addEventListener("keydown", function (event) {
  if (event.key === "r" || event.key === "R") {
    resetToFirstDialogue();
  }
});

document
  .getElementById("rightWindowButton")
  .addEventListener("click", function () {
    document.querySelector(".right-window").classList.toggle("show");
    console.log("right ejected");
  });

document
  .getElementById("leftWindowButton")
  .addEventListener("click", function () {
    document.querySelector(".left-window").classList.toggle("show");
    console.log("left ejected");
  });

document
  .querySelector(".leftButton")
  .addEventListener("click", loadPreviousDialogue);

document.querySelector(".audio").addEventListener("click", function () {
  audio.play();
  console.log("audio played ");
});

// CODE JOEY //

//titleGlow en desc

function handleInboxMouseOver() {
  //inbox
  document.getElementById("bloomInbox").classList.add("highlight");
  document.querySelector(".desc").classList.add("show");
  document.querySelector(".blue-bar").classList.add("grow");
  document.querySelector(".inboxImg").classList.add("noBlur");
}

function handleSystemenMouseOver() {
  //systemen
  document.getElementById("bloomSystemen").classList.add("highlight");
  document.querySelector(".desc2").classList.add("show");
  document.querySelector(".blue-bar-extra").classList.add("grow");
  document.querySelector(".systemenImg").classList.add("noBlur");
}

function handleOnderzoekMouseOver() {
  //onderzoek
  document.getElementById("bloomOnderzoek").classList.add("highlight");
  document.querySelector(".desc3").classList.add("show");
  document.querySelector(".blue-bar-extra2").classList.add("grow");
  document.querySelector(".onderzoekImg").classList.add("noBlur");
}

function handleInboxMouseLeave() {
  //inbox
  document.getElementById("bloomInbox").classList.remove("highlight");
  document.querySelector(".desc").classList.remove("show");
  document.querySelector(".blue-bar").classList.remove("grow");
  document.querySelector(".inboxImg").classList.remove("noBlur");
}

function handleSystemenMouseLeave() {
  //systemen
  document.getElementById("bloomSystemen").classList.remove("highlight");
  document.querySelector(".desc2").classList.remove("show");
  document.querySelector(".blue-bar-extra").classList.remove("grow");
  document.querySelector(".systemenImg").classList.remove("noBlur");
}

function handleOnderzoekMouseLeave() {
  //onderzoek
  document.getElementById("bloomOnderzoek").classList.remove("highlight");
  document.querySelector(".desc3").classList.remove("show");
  document.querySelector(".blue-bar-extra2").classList.remove("grow");
  document.querySelector(".onderzoekImg").classList.remove("noBlur");
}

// Function to open Inbox
function openInbox() {
  // Add the logic to open Inbox here
  document.querySelector(".inbox").classList.add("is1");
  document.querySelector(".desc").classList.add("is1");
  document.querySelector(".emails").classList.add("is1");
  document.querySelector(".systemen").classList.add("is1");
  document.querySelector(".onderzoek").classList.add("is1");
}

function closeInbox() {
  // Add the logic to open Inbox here
  document.querySelector(".inbox").classList.remove("is1");
  document.querySelector(".desc").classList.remove("is1");
  document.querySelector(".emails").classList.remove("is1");
  document.querySelector(".systemen").classList.remove("is1");
  document.querySelector(".onderzoek").classList.remove("is1");
}

// Function to open Systemen
function openSystemen() {
  // Add the logic to open Systemen here
  document.querySelector(".systemen").classList.add("ss1");
  document.querySelector(".desc2").classList.add("ss1");
  document.querySelector(".inbox").classList.add("ss1");
  document.querySelector(".onderzoek").classList.add("ss1");
}

function closeSystemen() {
  // Add the logic to open Systemen here
  document.querySelector(".systemen").classList.remove("ss1");
  document.querySelector(".desc").classList.remove("ss1");
  document.querySelector(".desc2").classList.remove("ss1");
  document.querySelector(".inbox").classList.remove("ss1");
  document.querySelector(".onderzoek").classList.remove("ss1");
}

// Function to open Systemen
function openOnderzoek() {
  // Add the logic to open Onderzoek here
  document.querySelector(".systemen").classList.add("os1");
  document.querySelector(".desc3").classList.add("os1");
  document.querySelector(".inbox").classList.add("os1");
  document.querySelector(".onderzoek").classList.add("os1");
}

function closeOnderzoek() {
  // Add the logic to open Onderzoek here
  document.querySelector(".systemen").classList.remove("os1");
  document.querySelector(".desc3").classList.remove("os1");
  document.querySelector(".inbox").classList.remove("os1");
  document.querySelector(".onderzoek").classList.remove("os1");
}

// Function hide blue bars
function blueHide() {
  // Add the logic to open Onderzoek here
  document.querySelector(".blue-bar").classList.remove("show");
  document.querySelector(".blue-bar-extra").classList.remove("show");
  document.querySelector(".blue-bar-extra2").classList.remove("show");
}

// Function show blue bars
function blueShow() {
  // Add the logic to open Onderzoek here
  document.querySelector(".blue-bar").classList.add("show");
  document.querySelector(".blue-bar-extra").classList.add("show");
  document.querySelector(".blue-bar-extra2").classList.add("show");
}

// Add event listeners when expanding
function addEventListeners() {
  inbox.addEventListener("mouseover", handleInboxMouseOver);
  inbox.addEventListener("mouseleave", handleInboxMouseLeave);

  systemen.addEventListener("mouseover", handleSystemenMouseOver);
  systemen.addEventListener("mouseleave", handleSystemenMouseLeave);

  onderzoek.addEventListener("mouseover", handleOnderzoekMouseOver);
  onderzoek.addEventListener("mouseleave", handleOnderzoekMouseLeave);

  // Check if #apps is expanding before adding click event
  if (box.classList.contains("expanding")) {
    inbox.addEventListener("click", openInbox);
    systemen.addEventListener("click", openSystemen);
    onderzoek.addEventListener("click", openOnderzoek);

    systemen.addEventListener("click", closeInbox);
    onderzoek.addEventListener("click", closeInbox);
    box2.addEventListener("click", closeInbox);

    inbox.addEventListener("click", closeSystemen);
    onderzoek.addEventListener("click", closeSystemen);
    box2.addEventListener("click", closeSystemen);

    systemen.addEventListener("click", closeOnderzoek);
    inbox.addEventListener("click", closeOnderzoek);
    box2.addEventListener("click", closeOnderzoek);

    box2.addEventListener("click", blueHide);
  }

  // Check if #apps is collapsing before adding click event
}

// Remove event listeners when collapsing
function removeEventListeners() {
  inbox.removeEventListener("mouseover", handleInboxMouseOver);
  inbox.removeEventListener("mouseleave", handleInboxMouseLeave);

  systemen.removeEventListener("mouseover", handleSystemenMouseOver);
  systemen.removeEventListener("mouseleave", handleSystemenMouseLeave);

  onderzoek.removeEventListener("mouseover", handleOnderzoekMouseOver);
  onderzoek.removeEventListener("mouseleave", handleOnderzoekMouseLeave);

  // Remove click event when collapsing
  inbox.removeEventListener("click", openInbox);
  systemen.removeEventListener("click", openSystemen);
  onderzoek.removeEventListener("click", openOnderzoek);
}

// Apps window die groter wordt //////////////////////////////////////////////////////////

function toggleBoxOn() {
  box.classList.remove("collapsing");
  box.classList.add("expanding");

  box2.classList.remove("collapsing");
  box2.classList.add("expanding");

  inboxImg.classList.remove("collapsing");
  inboxImg.classList.add("expanding");

  systemenImg.classList.remove("collapsing");
  systemenImg.classList.add("expanding");

  onderzoekImg.classList.remove("collapsing");
  onderzoekImg.classList.add("expanding");

  let titles = box.querySelectorAll(".h1-apps");
  titles.forEach(function (title) {
    title.style.opacity = "1";
  });

  // opacity appsBG
  let bgS = [".inbox", ".systemen", ".onderzoek"];

  bgS.forEach(function (className) {
    let elements = document.querySelectorAll(className);
    elements.forEach(function (element) {
      element.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    });
  });

  addEventListeners();
  blueShow();
}

//apps collapsed //////////////////////////////////////////////////////////////////

function toggleBoxOff() {
  if (box.classList.contains("expanding")) {
    box.classList.remove("expanding");
    box.classList.add("collapsing");

    box2.classList.remove("expanding");
    box2.classList.add("collapsing");

    inboxImg.classList.remove("expanding");
    inboxImg.classList.add("collapsing");

    systemenImg.classList.remove("expanding");
    systemenImg.classList.add("collapsing");

    onderzoekImg.classList.remove("expanding");
    onderzoekImg.classList.add("collapsing");
  }
  //titles

  let titles = box.querySelectorAll(".h1-apps");
  titles.forEach(function (title) {
    title.style.opacity = ".25";
  });

  removeEventListeners();
}

//bg video

// Get the video element
let video = document.getElementById("backgroundVideo");

// Add an event listener to detect when the video ends
video.addEventListener(
  "ended",
  function () {
    // Reset the video to the beginning and play it again
    this.currentTime = 0;
    this.play();
  },
  false
);
