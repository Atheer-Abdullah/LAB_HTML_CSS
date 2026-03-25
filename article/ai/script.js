// ===============================
//  SEARCH CLICK
// ===============================
document.querySelector(".search").addEventListener("click", () => {
  alert("Search feature coming soon");
});

// ===============================
//  LANGUAGE TOGGLE
// ===============================
const langBtn = document.querySelector(".lang-toggle");

langBtn.addEventListener("click", () => {
  if (langBtn.textContent === "AR") {
    langBtn.textContent = "EN";
    document.body.style.direction = "rtl";
  } else {
    langBtn.textContent = "AR";
    document.body.style.direction = "ltr";
  }
});

// ===============================
//  AUDIO BUTTON
// ===============================
const audioBtn = document.querySelector('[title="Play audio"]');

audioBtn.addEventListener("click", () => {
  alert("Audio feature will be added later");
});

// ===============================
//  FAVORITE BUTTON
// ===============================
const starBtn = document.querySelector(".fa-star");

starBtn.parentElement.addEventListener("click", () => {
  starBtn.classList.toggle("active");

  if (starBtn.classList.contains("active")) {
    starBtn.style.color = "#facc15"; 
  } else {
    starBtn.style.color = "white";
  }
});

// ===============================
//  REFRESH BUTTON
// ===============================
const refreshBtn = document.querySelector(".fa-sync");

refreshBtn.parentElement.addEventListener("click", () => {
  location.reload();
});

// ===============================
//  FILE BUTTON
// ===============================
const fileBtn = document.querySelector(".fa-file-alt");

fileBtn.parentElement.addEventListener("click", () => {
  alert("Opening full article...");
});

// ===============================
//  PLUS BUTTON
// ===============================
const plusBtn = document.querySelector(".fa-plus");

plusBtn.parentElement.addEventListener("click", () => {
  alert("Feature coming soon");
});

// ===============================
//  CARDS NAVIGATION
// ===============================
const cards = document.querySelectorAll(".cards .card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const sections = document.querySelectorAll("main section");

    if (sections[index]) {
      sections[index].scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===============================
//  SIDEBAR BUTTONS
// ===============================
const sidebarBtns = document.querySelectorAll(".sidebar button");

sidebarBtns.forEach((btn, i) => {
  const actions = [
    "Audio",
    "Copy link",
    "Settings",
    "Help"
  ];

  btn.addEventListener("click", () => {
    alert(actions[i]);
  });
});