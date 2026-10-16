
const PORTFOLIO = {
  name: "Collidion",
  initial: "C",
  squidGameUrl: "https://www.roblox.com/games/73228331807416/The-Final-Game",
  trainingCenterUrl: "https://www.roblox.com/games/97957280054599/Staff-Training-Center",
  contactUrl: ""
};

document.querySelectorAll("[data-name]").forEach(el => el.textContent = PORTFOLIO.name);
document.querySelectorAll(".brand-mark").forEach(el => el.textContent = PORTFOLIO.initial);

document.querySelectorAll("[data-link='squid']").forEach(link => {
  if (PORTFOLIO.squidGameUrl) link.href = PORTFOLIO.squidGameUrl;
  else {
    link.href = "#contact";
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Add your Squid Game Roleplay Roblox link in script.js first.");
    });
  }
});
document.querySelectorAll("[data-link='training']").forEach(link => {
  if (PORTFOLIO.trainingCenterUrl) link.href = PORTFOLIO.trainingCenterUrl;
  else {
    link.href = "#contact";
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Add your Staff Training Center Roblox link in script.js first.");
    });
  }
});
document.querySelectorAll("[data-contact]").forEach(link => {
  if (PORTFOLIO.contactUrl) link.href = PORTFOLIO.contactUrl;
  else {
    link.href = "#contact";
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Add your Discord or preferred contact link in script.js first.");
    });
  }
});

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
