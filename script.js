// Contact Information
const contactInfo = {
  email: "snigdhasingh335@gmail.com",
  linkedin: "https://www.linkedin.com/in/snigdha-singh-985609290",
  github: "https://github.com/snigdhasingh335-afk"
};

// Set contact links dynamically
document.getElementById("email-link").href = `mailto:${contactInfo.email}`;
document.getElementById("email-link").textContent = contactInfo.email;

document.getElementById("linkedin-link").href = contactInfo.linkedin;
document.getElementById("linkedin-link").textContent = "linkedin.com/in/snigdha-singh-985609290";

document.getElementById("github-link").href = contactInfo.github;
document.getElementById("github-link").textContent = "github.com/snigdhasingh335-afk";

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Typewriter Effect
const typewriterText = "Snigdha Singh";
const typewriterElement = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
  if (i < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}

window.onload = typeWriter;
