addEventListener("click", function () {
  var el = document.documentElement,
    rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen;
  rfs.call(el);
});
//event listener for esc key
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    alert("Onze multimedia story is alleen te gebruiken in full screen modus");
  }
});

let currentDialogueIndex = 0;
let dialogues = [];
let information = [];
let audioUnlocked = 0;
let audio = null;
let datacounter = 0;

//let's - > apps
let box = document.getElementById("apps");
let box2 = document.querySelector(".scene");
let inbox = document.querySelector(".inbox");
let inboxImg = document.querySelector(".inboxImg");
let systemenImg = document.querySelector(".systemenImg");
let systemen = document.querySelector(".systemen");
let onderzoek = document.querySelector(".onderzoek");
let onderzoekImg = document.querySelector(".onderzoekImg");

let mail1Var = document.getElementById("mail1");
let mail2Var = document.getElementById("mail2");
let mail3Var = document.getElementById("mail3");
let mail4Var = document.getElementById("mail4");
let mail5Var = document.getElementById("mail5");

let mailExitCont1 = document.getElementById("mailExitCont1");
let mailExitCont2 = document.getElementById("mailExitCont2");
let mailExitCont3 = document.getElementById("mailExitCont3");
let mailExitCont4 = document.getElementById("mailExitCont4");
let mailExitCont5 = document.getElementById("mailExitCont5");

let zin1 = document.getElementById("zin1");
let zin2 = document.getElementById("zin2");
let zin3 = document.getElementById("zin3");
let zin4 = document.getElementById("zin4");
let zin5 = document.getElementById("zin5");

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
  dialogueTitleElement.style.opacity = 1;
  bruceElement.style.display = "none";
  novaElement.style.display = "none";
  let rightButton = document.querySelector(".rightButton");
  rightButton.style.display = " none";
  //wait for 5 seconds
  setTimeout(function () {
    rightButton.style.display = "block";
  }, 5000);
  if (currentDialogue.Gender == "null") {
    dialogueTitleElement.textContent = "SYSTEEM";
    dialogue.style.backgroundImage =
      "url('../assets/images/dialogueboxSystem.png')";
    //add code here
  } else {
    dialogue.style.backgroundImage = "url('../assets/images/dialoguebox.png')";
    dialogueTitleElement.style.opacity = 1;
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
  if (audioStatus == true) {
    console.log("Audio is set to true.");
    // Mock code for when audio is true
    audioUnlocked++;
    trueaudio();
  } else if (audioStatus == false) {
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

  switch (currentDialogue.eventID) {
    case 1:
      // Execute code specific to eventID 1
      console.log("Executing code for eventID == 1");
      // Example: Open audio overlay, play audio, etc.
      document.querySelector("#mail1").style.display = "block";
      document.querySelector("#mail1").style.filter = "brightness(1)";
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      inboxHint();
      document.querySelector("#shipStatus").textContent =
        "Er is een nieuwe interactie beschikbaar in het apps paneel.";

      break;
    case 2:
      // Execute code specific to eventID 2
      console.log("Executing code for eventID == 2");
      // Example: Trigger a specific animation, show a message, etc.
      document.querySelector("#mail2").style.display = "block";
      document.querySelector("#mail1").style.filter = "brightness(0.75)";

      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      inboxHint();
      document.querySelector("#shipStatus").textContent =
        "Er is een nieuwe interactie beschikbaar in het apps paneel.";
      break;
    case 3:
      // Execute code specific to eventID 3
      console.log("Executing code for eventID == 3");
      // Add more cases as needed
      document.querySelector("#mail3").style.display = "block";
      document.querySelector("#mail2").style.filter = "brightness(0.75)";
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      inboxHint();
      document.querySelector("#shipStatus").textContent =
        "Er is een nieuwe interactie beschikbaar in het apps paneel.";
      break;
    case 4:
      // Execute code specific to eventID 6
      console.log("Executing code for eventID == 6");
      // This could be the end of a sequence or triggering the final action
      document.querySelector("#mail4").style.display = "block";
      document.querySelector("#mail3").style.filter = "brightness(0.75)";
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      inboxHint();
      document.querySelector("#shipStatus").textContent =
        "Er is een nieuwe interactie beschikbaar in het apps paneel.";
      break;
    case 5:
      // Execute code specific to eventID 6
      console.log("Executing code for eventID == 6");
      // This could be the end of a sequence or triggering the final action
      document.querySelector("#mail5").style.display = "block";
      document.querySelector("#mail4").style.filter = "brightness(0.75)";
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      inboxHint();
      document.querySelector("#shipStatus").textContent =
        "Er is een nieuwe interactie beschikbaar in het apps paneel.";
      break;
    case 6:
      // Execute code specific to eventID 6
      console.log("Executing code for eventID == 6");
      // This could be the end of a sequence or triggering the final action
      document
        .querySelector(".end-button")
        .addEventListener("click", function () {
          window.location.href = "outro.html";
        });
      systemenHint();
      document.querySelector("#shipStatus").textContent =
        "Er is een nieuwe interactie beschikbaar in het apps paneel.";
      break;
    case 7:
      inboxHint();
      break;
    case 8:
      onderzoekHint();
      break;
    case 9:
      systemenHint();
      break;
    default:
      // No specific eventID or code to execute
      console.log("No specific eventID action required.");
      document.querySelector("#shipStatus").textContent = ".";
      break;
  }
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
    let speakerName = "";
    if (dialogues[previous].Gender == null) {
      speakerName = "SYSTEEM";
    } else if (dialogues[previous].Gender == "male") {
      speakerName = "BRUCE";
    } else if (dialogues[previous].Gender == "female") {
      speakerName = "NOVA";
    }

    document.querySelector(
      ".previousdialogue"
    ).innerHTML = `<span style="font-weight: 400;">${speakerName}</span><br> ${dialogues[previous].dialogue}`;
  } else {
    // Handle the case where there's no valid previous dialogue
    document.querySelector(".previousdialogue").textContent =
      "No previous dialogue available";
  }
}

function trueaudio() {
  switch (audioUnlocked) {
    case 1:
      audio = new Audio("./assets/audio/audio1.mp3");
      audio.playbackRate = 10;
      break;
    case 2:
      audio = new Audio("./assets/audio/audio2.mp3");
      audio.playbackRate = 10;
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

function inboxHint() {
  let count = 0;
  let interval;

  function adjustBrightness() {
    const inboxElements = document.querySelectorAll(".inbox");
    inboxElements.forEach(function (elem) {
      if (count % 2 === 0) {
        elem.style.filter = "brightness(1)";
      } else {
        elem.style.filter = "brightness(2.5)";
      }
    });
    count++;
  }

  adjustBrightness();
  interval = setInterval(adjustBrightness, 1000);

  // Stop the interval after 10 seconds
  setTimeout(() => {
    clearInterval(interval);
  }, 10000);

  document.addEventListener("click", function (event) {
    let target = event.target;
    if (target.matches(".inboxImg.expanding")) {
      clearInterval(interval);
      document.querySelectorAll(".inbox").forEach(function (elem) {
        elem.style.filter = "brightness(1)";
      });
    }
  });
}

function onderzoekHint() {
  let count = 0;
  let interval;

  function adjustBrightness() {
    const inboxElements = document.querySelectorAll(".onderzoek");
    inboxElements.forEach(function (elem) {
      if (count % 2 === 0) {
        elem.style.filter = "brightness(1)";
      } else {
        elem.style.filter = "brightness(2.5)";
      }
    });
    count++;
  }

  adjustBrightness();
  interval = setInterval(adjustBrightness, 1000);

  // Stop the interval after 10 seconds
  setTimeout(() => {
    clearInterval(interval);
  }, 10000);

  document.addEventListener("click", function (event) {
    let target = event.target;
    if (target.matches(".onderzoekImg.expanding")) {
      clearInterval(interval);
      document.querySelectorAll(".onderzoek").forEach(function (elem) {
        elem.style.filter = "brightness(1)";
      });
    }
  });
}

function systemenHint() {
  let count = 0;
  let interval;

  function adjustBrightness() {
    const inboxElements = document.querySelectorAll(".systemen");
    inboxElements.forEach(function (elem) {
      if (count % 2 === 0) {
        elem.style.filter = "brightness(1)";
      } else {
        elem.style.filter = "brightness(2.5)";
      }
    });
    count++;
  }

  adjustBrightness();
  interval = setInterval(adjustBrightness, 1000);

  // Stop the interval after 10 seconds
  setTimeout(() => {
    clearInterval(interval);
  }, 10000);

  document.addEventListener("click", function (event) {
    let target = event.target;
    if (target.matches(".systemenImg.expanding")) {
      clearInterval(interval);
      document.querySelectorAll(".systemen").forEach(function (elem) {
        elem.style.filter = "brightness(1)";
      });
    }
  });
}

// function setupAudioMailListeners() {
//   // Array of audio file paths for simplicity, assuming the order matches your #audioXmail elements
//   const audioFiles = [
//     "./assets/audio/audio1.mp3",
//     "./assets/audio/audio2.mp3",
//     "./assets/audio/audio3.mp3",
//     "./assets/audio/audio4.mp3",
//     "./assets/audio/audio5.mp3",
//   ];

//   audioFiles.forEach((filePath, index) => {
//     document
//       .querySelector(`#audio${index + 1}mail`)
//       .addEventListener("click", function () {
//         var audio = new Audio(filePath);
//         audio.play();
//         console.log("audio played");
//         document
//           .querySelector(".dialogue")
//           .addEventListener("click", loadNextDialogue);
//         fetchAndDisplayInformation(index);
//       });
//   });
// }
// function fetchAndDisplayInformation(tapeIndex) {
//   fetch("./json/information.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to load information data");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Ensure the JSON data is loaded properly
//       if (!data || !data.tapes) {
//         throw new Error("Invalid JSON format");
//       }

//       const tapeKey = `tape${tapeIndex + 1}`;
//       const tape = data.tapes[tapeKey];

//       if (!tape) {
//         console.error("No tape information found for tapeIndex: ", tapeIndex);
//         return; // Exit if no tape data is found for the current index
//       }

//       // Set tape name
//       document.querySelector("#tapeName").textContent = tape.name || "";

//       // Clear existing event listeners
//       ["zin1", "zin2", "zin3", "zin4", "zin5"].forEach((zin) => {
//         const sentenceElement = document.querySelector(`#${zin}`);
//         sentenceElement.removeEventListener("click", () => {});
//       });

//       // Create event listeners for each sentence
//       ["zin1", "zin2", "zin3", "zin4", "zin5"].forEach((zin) => {
//         const sentenceElement = document.createElement("div");
//         sentenceElement.id = zin;
//         sentenceElement.textContent = tape[zin] ? tape[zin].title : "";
//         sentenceElement.addEventListener("click", () => {
//           // Populate .conclusies and .conUitleg with the data from the selected sentence
//           const conclusionElement = document.querySelector(".conclusies");
//           const explanationElement = document.querySelector(".conUitleg");

//           if (tape[zin]) {
//             conclusionElement.textContent = tape[zin].text1 || "";
//             explanationElement.textContent = tape[zin].text2 || "";
//           } else {
//             conclusionElement.textContent = "";
//             explanationElement.textContent = "";
//           }
//         });
//         document.querySelector(".sentences").appendChild(sentenceElement);
//       });

//       // Optionally, update the background image or other elements based on the tape
//       const afbConElement = document.querySelector(".afbCon");
//       afbConElement.style.backgroundImage = `url('./assets/images/${tapeKey}_background.jpg')`;
//     })
//     .catch((error) => {
//       console.error("Error loading information data:", error);
//     });
// }

// // Initialize the audio mail listeners
// setupAudioMailListeners();
document.addEventListener("DOMContentLoaded", function () {
  setupAudioMailListeners();
});
function setupAudioMailListeners() {
  const audioFiles = [
    "./assets/audio/audio1.mp3",
    "./assets/audio/audio2.mp3",
    "./assets/audio/audio3.mp3",
    "./assets/audio/audio4.mp3",
    "./assets/audio/audio5.mp3",
  ];

  audioFiles.forEach((filePath, index) => {
    const sceneElement = document.querySelector(".scene");
    const bruceElement = document.querySelector(".bruce");
    const novaElement = document.querySelector(".nova");
    const dialogueElement = document.querySelector(".dialogue");
    const apps = document.querySelector("#apps");
    const scene = document.querySelector(".scene");
    const originalBackgroundImage =
      getComputedStyle(sceneElement).backgroundImage;

    document
      .querySelector(`#audio${index + 1}mail`)
      .addEventListener("click", function () {
        var audio = new Audio(filePath);
        audio.play();

        // Change background image while playing audio
        const newBackgroundImage = `url("../assets/images/tape${
          index + 1
        }_background.jpg")`;
        sceneElement.style.backgroundImage = newBackgroundImage;

        // Change opacity of .bruce and .nova to 0 while audio is playing
        bruceElement.style.opacity = 0;
        novaElement.style.opacity = 0;
        scene.style.position = "absolute";
        scene.style.height = "100vh";
        scene.style.width = "87.5vw";
        scene.style.top = "0";
        scene.style.left = "0";
        // Hide dialogue while audio is playing
        dialogueElement.style.display = "none";
        apps.style.opacity = 0;

        // Fetch and display information
        fetchAndDisplayInformation(index);

        // Revert background image, opacity, and show dialogue after audio finishes playing
        audio.addEventListener("ended", function () {
          currentDialogueIndex++;
          updateDialogue();
          sceneElement.style.backgroundImage = originalBackgroundImage;
          bruceElement.style.opacity = 1;
          novaElement.style.opacity = 1;
          dialogueElement.style.display = "block"; // Revert to original display
          apps.style.opacity = 1; // Revert to original display
          scene.style.position = "relative";
          scene.style.height = "100v%";
          scene.style.width = "";
          scene.style.top = "";
          scene.style.left = "";
        });
      });
  });
}

document.querySelector("#audio1mail").addEventListener("click", function () {
  // Adding event listener to the dialogue as per original snippet
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
  console.log("Audio 1 mail clicked");
});

document.querySelector("#audio2mail").addEventListener("click", function () {
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
  let rood = document.querySelector("#rood");
  rood.style.opacity = 1;
});

document.querySelector("#audio3mail").addEventListener("click", function () {
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
  let blauw = document.querySelector("#blauw");
  blauw.style.opacity = 1;
});

document.querySelector("#audio4mail").addEventListener("click", function () {
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
  let groen = document.querySelector("#groen");
  groen.style.opacity = 1;
});

document.querySelector("#audio5mail").addEventListener("click", function () {
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
  let geel = document.querySelector("#geel");
  geel.style.opacity = 1;
});

function fetchAndDisplayInformation(tapeIndex) {
  fetch("./json/information.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load information data");
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !data.tapes) {
        throw new Error("Invalid JSON format");
      }

      const tapeKey = `tape${tapeIndex + 1}`;
      const tape = data.tapes[tapeKey];
      if (!tape) {
        console.error("No tape information found for tapeIndex: ", tapeIndex);
        return; // Exit if no tape data is found for the current index
      }

      document.querySelector("#tapeName").textContent = tape.name || "";

      const sentences = ["zin1", "zin2", "zin3", "zin4", "zin5"];
      sentences.forEach((zin) => {
        const sentenceElement = document.querySelector(`#${zin}`);
        if (tape[zin]) {
          sentenceElement.textContent = tape[zin].title;
          sentenceElement.onclick = () => {
            document.querySelector("#conclusies").textContent =
              tape[zin].text1 || "";
            document.querySelector("#conUitleg").textContent =
              tape[zin].text2 || "";
          };
        } else {
          sentenceElement.textContent = ""; // Clear if no data
        }
      });

      document.querySelector(
        ".afbCon"
      ).style.backgroundImage = `url('./assets/images/${tapeKey}_info.jpg')`;
    })
    .catch((error) => {
      console.error("Error loading information data:", error);
    });
}

function handleMouseAction(action, highlightId, descClass, barClass, imgClass) {
  const method = action === "add" ? "add" : "remove";
  document.getElementById(highlightId).classList[method]("highlight");
  document.querySelector(descClass).classList[method]("show");
  document.querySelector(barClass).classList[method]("grow");
  document.querySelector(imgClass).classList[method]("noBlur");
}
//joey
function handleInboxMouseOver() {
  handleMouseAction("add", "bloomInbox", ".desc", ".blue-bar", ".inboxImg");
}

function handleSystemenMouseOver() {
  handleMouseAction(
    "add",
    "bloomSystemen",
    ".desc2",
    ".blue-bar-extra",
    ".systemenImg"
  );
}

function handleOnderzoekMouseOver() {
  handleMouseAction(
    "add",
    "bloomOnderzoek",
    ".desc3",
    ".blue-bar-extra2",
    ".onderzoekImg"
  );
}

function handleInboxMouseLeave() {
  handleMouseAction("remove", "bloomInbox", ".desc", ".blue-bar", ".inboxImg");
}

function handleSystemenMouseLeave() {
  handleMouseAction(
    "remove",
    "bloomSystemen",
    ".desc2",
    ".blue-bar-extra",
    ".systemenImg"
  );
}

function handleOnderzoekMouseLeave() {
  handleMouseAction(
    "remove",
    "bloomOnderzoek",
    ".desc3",
    ".blue-bar-extra2",
    ".onderzoekImg"
  );
}

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

function openSystemen() {
  // Add the logic to open Systemen here
  document.querySelector(".systemen").classList.add("ss1");
  document.querySelector(".desc2").classList.add("ss1");
  document.querySelector(".inbox").classList.add("ss1");
  document.querySelector(".onderzoek").classList.add("ss1");

  document.querySelector(".sysBtns").classList.add("enable");
}

function closeSystemen() {
  // Add the logic to open Systemen here
  document.querySelector(".systemen").classList.remove("ss1");
  document.querySelector(".desc").classList.remove("ss1");
  document.querySelector(".desc2").classList.remove("ss1");
  document.querySelector(".inbox").classList.remove("ss1");
  document.querySelector(".onderzoek").classList.remove("ss1");

  document.querySelector(".sysBtns").classList.remove("enable");
}

function openInv() {
  // Add the logic to open Inv here

  document.querySelector(".inv").classList.add("open");
  document.querySelector(".end").classList.add("hide");
  document.querySelector(".inv-cont").classList.add("open");

  document.getElementById("invExitCont").classList.add("read");
}

function closeInv() {
  document.querySelector(".inv").classList.remove("open");
  document.querySelector(".end").classList.remove("hide");
  document.querySelector(".inv-cont").classList.remove("open");

  document.getElementById("invExitCont").classList.remove("read");
}

function openEnd() {
  // Add the logic to open End here
  document.querySelector(".inv").classList.add("hide");
  document.querySelector(".end").classList.add("open");
  document.querySelector(".end-button").classList.add("open");

  document.getElementById("endExitCont").classList.add("read");
}

function closeEnd() {
  // Add the logic to close End here

  document.querySelector(".inv").classList.remove("hide");
  document.querySelector(".end").classList.remove("open");
  document.querySelector(".end-button").classList.remove("open");
  document.getElementById("endExitCont").classList.remove("read");
}

function openOnderzoek() {
  // Add the logic to open Onderzoek here
  document.querySelector(".systemen").classList.add("os1");
  document.querySelector(".desc3").classList.add("os1");
  document.querySelector(".inbox").classList.add("os1");
  document.querySelector(".onderzoek").classList.add("os1");
  document.querySelector(".zinnen").classList.add("os1");
  document.querySelector(".titel-zinnen").classList.add("os1");
  document.querySelector(".exitCon").classList.add("os1");
  if (tape) {
    let infoImage = document.querySelector(".infoImage");
    infoImage.style.backgroundImage = `url('./assets/images/${tapeKey}_info.jpg')`;
    infoImage.style.display = "block";
  }
}

function closeOnderzoek() {
  // Add the logic to open Onderzoek here
  document.querySelector(".systemen").classList.remove("os1");
  document.querySelector(".desc3").classList.remove("os1");
  document.querySelector(".inbox").classList.remove("os1");
  document.querySelector(".onderzoek").classList.remove("os1");
  document.querySelector(".titel-zinnen").classList.remove("os1");
  document.querySelector(".zinnen").classList.remove("os1");
  let infoImage = document.querySelector(".infoImage");
  infoImage.style.display = "none";
}
function handleMail(mailId, exitId) {
  const mailElement = document.getElementById(mailId);
  const contentElement = document.querySelector(`#${mailId} .mail-content`);
  const thumbnailElement = document.querySelector(`#${mailId} .mail-thumbnail`);
  const inboxElement = document.querySelector(".inbox");
  const exitContElement = document.getElementById(exitId);

  mailElement.classList.add("read");
  contentElement.classList.add("read");
  inboxElement.classList.add("read");
  exitContElement.classList.add("read");
  thumbnailElement.classList.add("read");

  const allMailElements = document.querySelectorAll(".mail");
  allMailElements.forEach((element) => {
    if (element.id !== mailId) {
      element.classList.add("hide");
    }
  });
}

function handleMailExit(mailId, exitId) {
  const mailElement = document.getElementById(mailId);
  const contentElement = document.querySelector(`#${mailId} .mail-content`);
  const thumbnailElement = document.querySelector(`#${mailId} .mail-thumbnail`);
  const inboxElement = document.querySelector(".inbox");
  const exitContElement = document.getElementById(exitId);

  mailElement.classList.remove("read");
  contentElement.classList.remove("read");
  inboxElement.classList.remove("read");
  exitContElement.classList.remove("read");
  thumbnailElement.classList.remove("read");

  const allMailElements = document.querySelectorAll(".mail");
  allMailElements.forEach((element) => {
    element.classList.remove("hide");
  });
}

// Function for mail1
function mail1() {
  handleMail("mail1", "mailExitCont1");
}

function mail1Exit() {
  handleMailExit("mail1", "mailExitCont1");
}

// Function for mail2
function mail2() {
  handleMail("mail2", "mailExitCont2");
}

function mail2Exit() {
  handleMailExit("mail2", "mailExitCont2");
}

// Function for mail3
function mail3() {
  handleMail("mail3", "mailExitCont3");
}

function mail3Exit() {
  handleMailExit("mail3", "mailExitCont3");
}

// Function for mail4
function mail4() {
  handleMail("mail4", "mailExitCont4");
}

function mail4Exit() {
  handleMailExit("mail4", "mailExitCont4");
}

// Function for mail5
function mail5() {
  handleMail("mail5", "mailExitCont5");
}

function mail5Exit() {
  handleMailExit("mail5", "mailExitCont5");
}

function zin1Exp() {
  document.querySelector(".zinnen").classList.add("hide");
  document.querySelector(".conclusies").classList.add("exp");
  onderzoek.classList.add("exp");
  document.querySelector(".exitCon").classList.add("leave");

  document.querySelector(".titel-zinnen").classList.add("exp");
}

function zin1Exit() {
  document.querySelector(".zinnen").classList.remove("hide");
  document.querySelector(".conclusies").classList.remove("exp");
  onderzoek.classList.remove("exp");
  document.querySelector(".exitCon").classList.remove("leave");

  document.querySelector(".titel-zinnen").classList.remove("exp");
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

    mail1Var.addEventListener("click", mail1);
    mailExitCont1.addEventListener("click", mail1Exit);
    mail2Var.addEventListener("click", mail2);
    mailExitCont2.addEventListener("click", mail2Exit);
    mail3Var.addEventListener("click", mail3);
    mailExitCont3.addEventListener("click", mail3Exit);
    mail4Var.addEventListener("click", mail4);
    mailExitCont4.addEventListener("click", mail4Exit);
    mail5Var.addEventListener("click", mail5);
    mailExitCont5.addEventListener("click", mail5Exit);

    document.querySelector(".inv").addEventListener("click", openInv);
    document.querySelector(".end").addEventListener("click", openEnd);

    document.getElementById("invExitCont").addEventListener("click", closeInv);
    document.getElementById("endExitCont").addEventListener("click", closeEnd);
    zin1.addEventListener("click", zin1Exp);
    zin2.addEventListener("click", zin1Exp);
    zin3.addEventListener("click", zin1Exp);
    zin4.addEventListener("click", zin1Exp);
    zin5.addEventListener("click", zin1Exp);

    document.querySelector(".exitCon").addEventListener("click", zin1Exit);
    inbox.addEventListener("click", zin1Exit);
    systemen.addEventListener("click", zin1Exit);
    box2.addEventListener("click", zin1Exit);
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
