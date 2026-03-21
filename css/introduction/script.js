// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

// GITHUB PROJECTS
const username = "Atheer-Abdullah";
const container = document.getElementById("projectsContainer");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {

    data.forEach(repo => {

      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <img class="project-img" src="images/Atheer-profile.jpg">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <a href="${repo.html_url}" target="_blank">View Project</a>
      `;

      const img = card.querySelector(".project-img");

      const testImg = new Image();
      testImg.src = `https://opengraph.githubassets.com/1/${username}/${repo.name}`;

      testImg.onload = () => {
        img.src = testImg.src;
      };

      container.appendChild(card);
    });

  });

// AUTO SCROLL
setInterval(() => {
  container.scrollLeft += 1;

  if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
    container.scrollLeft = 0;
  }
}, 20);