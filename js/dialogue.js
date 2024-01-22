let currentDialogueIndex = 0;
let dialogues = [];
let audioUnlocked = 0;
let audio = null;

function checkAudioStatus() {
  let currentDialogue = dialogues[currentDialogueIndex];
  return currentDialogue.audio;
}

function updateDialogue() {
  let currentDialogue = dialogues[currentDialogueIndex];
  let speakerName = currentDialogue.Gender === "male" ? "Bruce" : "Nova";
  let dialogueTitleElement = document.querySelector(".dialogueTitle");
  let bruceElement = document.querySelector(".bruce");
  let novaElement = document.querySelector(".nova");

  // Reset style properties for elements
  dialogueTitleElement.style.display = "block";
  bruceElement.style.display = "none";
  novaElement.style.display = "none";

  if (currentDialogue.Gender == null) {
    dialogueTitleElement.style.display = "none";
  } else {
    dialogueTitleElement.textContent = speakerName + ":";
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
document
  .querySelector(".rightButton")
  .addEventListener("click", loadNextDialogue);

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
