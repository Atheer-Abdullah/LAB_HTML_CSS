// ===============================
//  SEARCH CLICK
// ===============================
const search = document.querySelector(".search");
if (search) {
  search.addEventListener("click", () => {
    alert("Search feature coming soon");
  });
}

// ===============================
//  LANGUAGE TOGGLE
// ===============================
const langBtn = document.querySelector(".lang-toggle");

if (langBtn) {
  langBtn.addEventListener("click", () => {
    if (langBtn.textContent === "AR") {
      langBtn.textContent = "EN";
      document.body.style.direction = "rtl";
    } else {
      langBtn.textContent = "AR";
      document.body.style.direction = "ltr";
    }
  });
}

// ===============================
//  AUDIO BUTTON
// ===============================
const audioBtn = document.querySelector('[title="Play audio"]');

if (audioBtn) {
  audioBtn.addEventListener("click", () => {
    alert("Audio feature will be added later");
  });
}

// ===============================
//  FAVORITE BUTTON
// ===============================
const starBtn = document.querySelector(".fa-star");

if (starBtn && starBtn.parentElement) {
  starBtn.parentElement.addEventListener("click", () => {
    starBtn.classList.toggle("active");

    if (starBtn.classList.contains("active")) {
      starBtn.style.color = "#facc15";
    } else {
      starBtn.style.color = "white";
    }
  });
}

// ===============================
//  REFRESH BUTTON
// ===============================
const refreshBtn = document.querySelector(".fa-sync");

if (refreshBtn && refreshBtn.parentElement) {
  refreshBtn.parentElement.addEventListener("click", () => {
    location.reload();
  });
}

// ===============================
//  FILE BUTTON
// ===============================
const fileBtn = document.querySelector(".fa-file-alt");

if (fileBtn && fileBtn.parentElement) {
  fileBtn.parentElement.addEventListener("click", () => {
    alert("Opening full article...");
  });
}

// ===============================
//  PLUS BUTTON
// ===============================
const plusBtn = document.querySelector(".fa-plus");

if (plusBtn && plusBtn.parentElement) {
  plusBtn.parentElement.addEventListener("click", () => {
    alert("Feature coming soon");
  });
}

// ===============================
//  CARDS NAVIGATION
// ===============================
const cards = document.querySelectorAll(".cards .card");

if (cards.length > 0) {
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
}

// ===============================
//  SIDEBAR BUTTONS
// ===============================
const sidebarBtns = document.querySelectorAll(".sidebar button");

if (sidebarBtns.length > 0) {
  sidebarBtns.forEach((btn, i) => {
    const actions = ["Audio", "Copy link", "Settings", "Help"];

    btn.addEventListener("click", () => {
      alert(actions[i]);
    });
  });
}

// ===============================
//  FORM (Formspree FIX)
// ===============================
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      status.innerHTML = " Message sent successfully!";
      form.reset();
    } else {
      status.innerHTML = " Something went wrong.";
    }
  });
}

// ===============================
//  GITHUB SLIDER 
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  const username = "Atheer-Abdullah";
  const container = document.getElementById("projectsContainer");

  if (container) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => {

        data.slice(0,6).forEach(repo => {
          const card = document.createElement("div");
          card.className = "project-card";

          card.innerHTML = `
            <img src="https://opengraph.githubassets.com/1/${username}/${repo.name}">
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description"}</p>
            <a href="${repo.html_url}" target="_blank">View Project</a>
          `;

          container.appendChild(card);
        });

        
        container.innerHTML += container.innerHTML;

        startSlider();
      });
  }

  function startSlider() {
    function animate() {
      container.scrollLeft += 1;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

});
