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
    dialogueTitleElement.style.opacity = 0;
  } else {
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
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      break;
    case 2:
      // Execute code specific to eventID 2
      console.log("Executing code for eventID == 2");
      // Example: Trigger a specific animation, show a message, etc.
      document.querySelector("#mail2").style.display = "block";
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      break;
    case 3:
      // Execute code specific to eventID 3
      console.log("Executing code for eventID == 3");
      // Add more cases as needed
      document.querySelector("#mail3").style.display = "block";
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      break;
    case 4:
      // Execute code specific to eventID 6
      console.log("Executing code for eventID == 6");
      // This could be the end of a sequence or triggering the final action
      document.querySelector("#mail4").style.display = "block";
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      break;
    case 5:
      // Execute code specific to eventID 6
      console.log("Executing code for eventID == 6");
      // This could be the end of a sequence or triggering the final action
      document.querySelector("#mail5").style.display = "block";
      document
        .querySelector(".dialogue")
        .removeEventListener("click", loadNextDialogue);
      break;
    case 6:
      // Execute code specific to eventID 6
      console.log("Executing code for eventID == 6");
      // This could be the end of a sequence or triggering the final action
      window.location.href = "outro.html";
      break;
    default:
      // No specific eventID or code to execute
      console.log("No specific eventID action required.");
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
    let speakerName = dialogues[previous].Gender === "male" ? "BRUCE" : "NOVA";
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

// document.querySelector(".audio").addEventListener("click", function () {
//   audio.play();
//   console.log("audio played ");
// });

// document.querySelector(".mailAudio").addEventListener("click", function () {});

document.querySelector("#audio1mail").addEventListener("click", function () {
  audio = new Audio("./assets/audio/audio1.mp3");
  audio.play();
  console.log("audio played ");
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
});

document.querySelector("#audio2mail").addEventListener("click", function () {
  audio = new Audio("./assets/audio/audio2.mp3");
  audio.play();
  console.log("audio played ");
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
  fetch("./json/information.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      datacounter = 1;
      information = Object.values(data.tapes);
      let title = information[0].name; // Access the title here
      let zin1 = information[0].zin1.title;
      let zin2 = information[0].zin2.title;
      let zin3 = information[0].zin3.title;
      let zin4 = information[0].zin4.title;
      let zin5 = information[0].zin5.title;
      console.log(information[0].name);
      document.querySelector("#tapeName").textContent = title;
      document.querySelector("#zin1").textContent = zin1;
      document.querySelector("#zin2").textContent = zin2;
      document.querySelector("#zin3").textContent = zin3;
      document.querySelector("#zin4").textContent = zin4;
      document.querySelector("#zin5").textContent = zin5;
    })
    .catch(function (error) {
      return console.error("Error loading information data:", error);
    });
});

document.querySelector("#audio3mail").addEventListener("click", function () {
  audio = new Audio("./assets/audio/audio3.mp3");
  audio.play();
  console.log("audio played ");
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);

  fetch("./json/information.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      datacounter = 2;
      information = Object.values(data.tapes);
      let title = information[1].name; // Access the title here
      let zin1 = information[1].zin1.title;
      let zin2 = information[1].zin2.title;
      let zin3 = information[1].zin3.title;
      let zin4 = information[1].zin4.title;
      let zin5 = information[1].zin5.title;

      document.querySelector("#tapeName").textContent = title;
      document.querySelector("#zin1").textContent = zin1;
      document.querySelector("#zin2").textContent = zin2;
      document.querySelector("#zin3").textContent = zin3;
      document.querySelector("#zin4").textContent = zin4;
      document.querySelector("#zin5").textContent = zin5;
    })
    .catch(function (error) {
      return console.error("Error loading information data:", error);
    });
});

document.querySelector("#audio4mail").addEventListener("click", function () {
  audio = new Audio("./assets/audio/audio4.mp3");
  audio.play();
  console.log("audio played ");
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
  fetch("./json/information.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      datacounter = 3;
      information = Object.values(data.tapes);
      let title = information[2].name; // Access the title here
      let zin1 = information[2].zin1.title;
      let zin2 = information[2].zin2.title;
      let zin3 = information[2].zin3.title;
      let zin4 = information[2].zin4.title;
      let zin5 = information[2].zin5.title;

      document.querySelector("#tapeName").textContent = title;
      document.querySelector("#zin1").textContent = zin1;
      document.querySelector("#zin2").textContent = zin2;
      document.querySelector("#zin3").textContent = zin3;
      document.querySelector("#zin4").textContent = zin4;
      document.querySelector("#zin5").textContent = zin5;
    })
    .catch(function (error) {
      return console.error("Error loading information data:", error);
    });
});

document.querySelector("#audio5mail").addEventListener("click", function () {
  audio = new Audio("./assets/audio/audio5.mp3");
  audio.play();
  console.log("audio played ");
  document
    .querySelector(".dialogue")
    .addEventListener("click", loadNextDialogue);
  fetch("./json/information.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      datacounter = 4;
      information = Object.values(data.tapes);
      let title = information[3].name; // Access the title here
      let zin1 = information[3].zin1.title;
      let zin2 = information[3].zin2.title;
      let zin3 = information[3].zin3.title;
      let zin4 = information[3].zin4.title;
      let zin5 = information[3].zin5.title;

      document.querySelector("#tapeName").textContent = title;
      document.querySelector("#zin1").textContent = zin1;
      document.querySelector("#zin2").textContent = zin2;
      document.querySelector("#zin3").textContent = zin3;
      document.querySelector("#zin4").textContent = zin4;
      document.querySelector("#zin5").textContent = zin5;
    })
    .catch(function (error) {
      return console.error("Error loading information data:", error);
    });
});

function fetchAndProcessInformation(zinType, tapeIndex) {
  fetch("./json/information.json")
    .then((response) => response.json())
    .then((data) => {
      const tapeKey = `tape${tapeIndex + 1}`; // Adjust tapeIndex to start from 1
      const info = data.tapes[tapeKey][zinType];
      if (!info) {
        console.error(`No information found for ${tapeKey} and ${zinType}`);
        return;
      }
      const title = info.title;
      const text1 = info.text1;
      document.querySelector("#conclusies").textContent = title;
      document.querySelector("#conUitleg").textContent = text1;

      // Update the background image of .afbCon based on tape index
      const afbConElement = document.querySelector(".afbCon");
      afbConElement.style.backgroundImage = `url('./assets/images/tape${
        tapeIndex + 1
      }_background.jpg')`; // Assuming you have background images named accordingly
    })
    .catch((error) => console.error("Error loading information data:", error));
}

// Attach click listeners for zin1 to zin5 elements
function attachClickListenersForZins() {
  ["zin1", "zin2", "zin3", "zin4", "zin5"].forEach((zinType) => {
    document
      .querySelector(`#${zinType}`)
      .addEventListener("click", function () {
        const tapeIndex = datacounter - 1; // Assuming datacounter ranges from 1 to the number of tapes
        fetchAndProcessInformation(zinType, tapeIndex);
      });
  });
}

// Call this function to set up the event listeners
attachClickListenersForZins();

// document.querySelector("#zin1").addEventListener("click", function () {
//   switch (datacounter) {
//     case 1:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[0].zin1.title; // Access the title here
//           let text1 = information[0].zin1.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         })
//         .catch(function (error) {
//           return console.error("Error loading information data:", error);
//         });
//       break;
//     case 2:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[1].zin1.title; // Access the title here
//           let text1 = information[1].zin1.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         })
//         .catch(function (error) {
//           return console.error("Error loading information data:", error);
//         });
//       break;
//     case 3:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[2].zin1.title; // Access the title here
//           let text1 = information[2].zin1.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         });
//       break;
//     case 4:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[3].zin1.title; // Access the title here
//           let text1 = information[3].zin1.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         });
//       break;
//     case 5:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[4].zin1.title; // Access the title here
//           let text1 = information[4].zin1.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         });
//       break;
//   }
// });

// document.querySelector("#zin2").addEventListener("click", function () {
//   switch (datacounter) {
//     case 1:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[0].zin2.title; // Access the title here
//           let text1 = information[0].zin2.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         })
//         .catch(function (error) {
//           return console.error("Error loading information data:", error);
//         });
//       break;
//     case 2:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[1].zin2.title; // Access the title here
//           let text1 = information[1].zin2.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         })
//         .catch(function (error) {
//           return console.error("Error loading information data:", error);
//         });
//       break;
//     case 3:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[2].zin2.title; // Access the title here
//           let text1 = information[2].zin2.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         });
//       break;
//     case 4:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[3].zin2.title; // Access the title here
//           let text1 = information[3].zin2.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         });
//       break;
//     case 5:
//       fetch("./json/information.json")
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           let title = information[4].zin2.title; // Access the title here
//           let text1 = information[4].zin2.text1;
//           document.querySelector("#conclusies").textContent = title;
//           document.querySelector("#conUitleg").textContent = text1;
//         });
//       break;
//   }
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// Function to open Systemen
function openOnderzoek() {
  // Add the logic to open Onderzoek here
  document.querySelector(".systemen").classList.add("os1");
  document.querySelector(".desc3").classList.add("os1");
  document.querySelector(".inbox").classList.add("os1");
  document.querySelector(".onderzoek").classList.add("os1");
  document.querySelector(".zinnen").classList.add("os1");
  document.querySelector(".titel-zinnen").classList.add("os1");
}

function closeOnderzoek() {
  // Add the logic to open Onderzoek here
  document.querySelector(".systemen").classList.remove("os1");
  document.querySelector(".desc3").classList.remove("os1");
  document.querySelector(".inbox").classList.remove("os1");
  document.querySelector(".onderzoek").classList.remove("os1");
  document.querySelector(".titel-zinnen").classList.remove("os1");

  document.querySelector(".zinnen").classList.remove("os1");
}

// EMAILS /////////////////////////////////////////////////////////////////////////////////

function mail1() {
  document.getElementById("mail1").classList.add("read");
  document.querySelector("#mail1 .mail-content").classList.add("read");
  document.querySelector(".inbox").classList.add("read");
  mailExitCont1.classList.add("read");
  document.querySelector(".mail-thumbnail").classList.add("read");

  document.getElementById("mail2").classList.add("hide");
  document.getElementById("mail3").classList.add("hide");
  document.getElementById("mail4").classList.add("hide");
  document.getElementById("mail5").classList.add("hide");
}

function mail1Exit() {
  document.getElementById("mail1").classList.remove("read");
  document.querySelector("#mail1 .mail-content").classList.remove("read");
  document.querySelector(".inbox").classList.remove("read");
  mailExitCont1.classList.remove("read");
  document.querySelector(".mail-thumbnail").classList.remove("read");

  document.getElementById("mail2").classList.remove("hide");
  document.getElementById("mail3").classList.remove("hide");
  document.getElementById("mail4").classList.remove("hide");
  document.getElementById("mail5").classList.remove("hide");
}

function mail2() {
  document.getElementById("mail2").classList.add("read");
  document.querySelector("#mail2 .mail-content").classList.add("read");
  document.querySelector(".inbox").classList.add("read");
  mailExitCont2.classList.add("read");
  document.querySelector("#mail2 .mail-thumbnail").classList.add("read");

  document.getElementById("mail1").classList.add("hide");
  document.getElementById("mail3").classList.add("hide");
  document.getElementById("mail4").classList.add("hide");
  document.getElementById("mail5").classList.add("hide");
}

function mail2Exit() {
  document.getElementById("mail2").classList.remove("read");
  document.querySelector("#mail2 .mail-content").classList.remove("read");
  document.querySelector(".inbox").classList.remove("read");
  mailExitCont2.classList.remove("read");
  document.querySelector("#mail2 .mail-thumbnail").classList.remove("read");

  document.getElementById("mail1").classList.remove("hide");
  document.getElementById("mail3").classList.remove("hide");
  document.getElementById("mail4").classList.remove("hide");
  document.getElementById("mail5").classList.remove("hide");
}

// Function for mail3
function mail3() {
  document.getElementById("mail3").classList.add("read");
  document.querySelector("#mail3 .mail-content").classList.add("read");
  document.querySelector(".inbox").classList.add("read");
  mailExitCont3.classList.add("read");
  document.querySelector("#mail3 .mail-thumbnail").classList.add("read");

  document.getElementById("mail1").classList.add("hide");
  document.getElementById("mail2").classList.add("hide");
  document.getElementById("mail4").classList.add("hide");
  document.getElementById("mail5").classList.add("hide");
}

function mail3Exit() {
  document.getElementById("mail3").classList.remove("read");
  document.querySelector("#mail3 .mail-content").classList.remove("read");
  document.querySelector(".inbox").classList.remove("read");
  mailExitCont3.classList.remove("read");
  document.querySelector("#mail3 .mail-thumbnail").classList.remove("read");

  document.getElementById("mail1").classList.remove("hide");
  document.getElementById("mail2").classList.remove("hide");
  document.getElementById("mail4").classList.remove("hide");
  document.getElementById("mail5").classList.remove("hide");
}

// Function for mail4
function mail4() {
  document.getElementById("mail4").classList.add("read");
  document.querySelector("#mail4 .mail-content").classList.add("read");
  document.querySelector(".inbox").classList.add("read");
  mailExitCont4.classList.add("read");
  document.querySelector("#mail4 .mail-thumbnail").classList.add("read");

  document.getElementById("mail1").classList.add("hide");
  document.getElementById("mail2").classList.add("hide");
  document.getElementById("mail3").classList.add("hide");
  document.getElementById("mail5").classList.add("hide");
}

function mail4Exit() {
  document.getElementById("mail4").classList.remove("read");
  document.querySelector("#mail4 .mail-content").classList.remove("read");
  document.querySelector(".inbox").classList.remove("read");
  mailExitCont4.classList.remove("read");
  document.querySelector("#mail4 .mail-thumbnail").classList.remove("read");

  document.getElementById("mail1").classList.remove("hide");
  document.getElementById("mail2").classList.remove("hide");
  document.getElementById("mail3").classList.remove("hide");
  document.getElementById("mail5").classList.remove("hide");
}

// Function for mail5
function mail5() {
  document.getElementById("mail5").classList.add("read");
  document.querySelector("#mail5 .mail-content").classList.add("read");
  document.querySelector(".inbox").classList.add("read");
  mailExitCont5.classList.add("read");
  document.querySelector("#mail5 .mail-thumbnail").classList.add("read");

  document.getElementById("mail1").classList.add("hide");
  document.getElementById("mail2").classList.add("hide");
  document.getElementById("mail3").classList.add("hide");
  document.getElementById("mail4").classList.add("hide");
}

function mail5Exit() {
  document.getElementById("mail5").classList.remove("read");
  document.querySelector("#mail5 .mail-content").classList.remove("read");
  document.querySelector(".inbox").classList.remove("read");
  mailExitCont5.classList.remove("read");
  document.querySelector("#mail5 .mail-thumbnail").classList.remove("read");

  document.getElementById("mail1").classList.remove("hide");
  document.getElementById("mail2").classList.remove("hide");
  document.getElementById("mail3").classList.remove("hide");
  document.getElementById("mail4").classList.remove("hide");
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
