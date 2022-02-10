// Cards

// Elements
const allTabsButtons = document.querySelectorAll(".tab-btn");

// Times Element Texts
let {
  timeTextOrange,
  timeTextBlue,
  timeTextRed,
  timeTextGreen,
  timeTextPurple,
  timeTextYellow,
} = timesTexts();

function timesTexts() {
  let timeTextOrange = document.querySelector(".time-orange");
  let timeTextBlue = document.querySelector(".time-blue");
  let timeTextRed = document.querySelector(".time-red");
  let timeTextGreen = document.querySelector(".time-green");
  let timeTextPurple = document.querySelector(".time-purple");
  let timeTextYellow = document.querySelector(".time-yellow");
  return {
    timeTextOrange,
    timeTextBlue,
    timeTextRed,
    timeTextGreen,
    timeTextPurple,
    timeTextYellow,
  };
}

// Previous Texts Elemnts
let {
  timeTextOrangePrevious,
  timeTextBluePrevious,
  timeTextRedPrevious,
  timeTextGreenPrevious,
  timeTextPurplePrevious,
  timeTextYeloowPrevious,
} = preTextElements();

function preTextElements() {
  let timeTextOrangePrevious = document.querySelector(".orange-pre");
  let timeTextBluePrevious = document.querySelector(".blue-pre");
  let timeTextRedPrevious = document.querySelector(".red-pre");
  let timeTextGreenPrevious = document.querySelector(".green-pre");
  let timeTextPurplePrevious = document.querySelector(".purple-pre");
  let timeTextYeloowPrevious = document.querySelector(".yellow-pre");
  return {
    timeTextOrangePrevious,
    timeTextBluePrevious,
    timeTextRedPrevious,
    timeTextGreenPrevious,
    timeTextPurplePrevious,
    timeTextYeloowPrevious,
  };
}

// WebSite Mood
let mood;

// Day Fun
function isMoodDay(theMood) {
  if (theMood == "daily") {
    // chenge Texts Contnets
    timeTextOrange.textContent = "5hrs";
    timeTextBlue.textContent = "1hrs";
    timeTextRed.textContent = "0hrs";
    timeTextGreen.textContent = "1hrs";
    timeTextPurple.textContent = "1hrs";
    timeTextYellow.textContent = "0hrs";

    // Change Previous Texts Contents
  }
  timeTextOrangePrevious.textContent = "Last Day - 7hrs";
  timeTextBluePrevious.textContent = "Last Day - 2hrs";
  timeTextRedPrevious.textContent = "Last Day - 1hrs";
  timeTextGreenPrevious.textContent = "Last Day - 1hrs";
  timeTextPurplePrevious.textContent = "Last Day - 3hrs";
  timeTextYeloowPrevious.textContent = "Last Day - 1hrs";
}

// Week Fun
function isMoodWeek(theMood) {
  if (theMood == "weekly") {
    // chenge Texts Contnets
    timeTextOrange.textContent = "32hrs";
    timeTextBlue.textContent = "10hrs";
    timeTextRed.textContent = "4hrs";
    timeTextGreen.textContent = "4hrs";
    timeTextPurple.textContent = "5hrs";
    timeTextYellow.textContent = "7hrs";

    // Change Previous Texts Contents

    timeTextOrangePrevious.textContent = "Last Week - 36hrs";
    timeTextBluePrevious.textContent = "Last Week - 8hrs";
    timeTextRedPrevious.textContent = "Last Week - 7hrs";
    timeTextGreenPrevious.textContent = "Last Week - 5hrs";
    timeTextPurplePrevious.textContent = "Last Week - 10hrs";
    timeTextYeloowPrevious.textContent = "Last Week - 11hrs";
  }
}

function isMoodMonth(theMood) {
  if (theMood == "monthly") {
    // chenge Texts Contnets
    timeTextOrange.textContent = "103hrs";
    timeTextBlue.textContent = "23hrs";
    timeTextRed.textContent = "13hrs";
    timeTextGreen.textContent = "11hrs";
    timeTextPurple.textContent = "21hrs";
    timeTextYellow.textContent = "7hrs";

    // Change Previous Texts Contents
  }
  timeTextOrangePrevious.textContent = "Last Month - 128hrs";
  timeTextBluePrevious.textContent = "Last Month - 29hrs";
  timeTextRedPrevious.textContent = "Last Month - 19hrs";
  timeTextGreenPrevious.textContent = "Last Month - 18hrs";
  timeTextPurplePrevious.textContent = "Last Month - 23hrs";
  timeTextYeloowPrevious.textContent = "Last Month - 11hrs";
}

allTabsButtons.forEach((tabButton) => {
  let dataSetAtt = tabButton.getAttribute("data-tab");
  tabButton.addEventListener("click", (e) => {
    allTabsButtons.forEach((tabButton) => {
      tabButton.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let cardsContainer = document.querySelector(".cards");
    if (cardsContainer.classList.contains("n-animate")) {
      cardsContainer.classList.remove("n-animate");
      cardsContainer.classList.add("r-animate");
    } else {
      cardsContainer.classList.remove("r-animate");
      cardsContainer.classList.add("n-animate");
    }
    if (dataSetAtt == "daily") {
      mood = "daily";
      isMoodDay(mood);
    } else if (dataSetAtt == "weekly") {
      mood = "weekly";
      isMoodWeek(mood);
    } else {
      mood = "monthly";
      isMoodMonth(mood);
    }
  });
});

// Drop Down Menu
let openMenuButtons = document.querySelectorAll(".button");

openMenuButtons.forEach((menuButton) => {
  menuButton.addEventListener("click", () => {
    menuButton.nextElementSibling.classList.toggle("show");
  });
});
