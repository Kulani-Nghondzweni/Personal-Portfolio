
function showProject(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Typing Hero Name
const nameText = "Kulani Nghondzweni";
let index = 0;
const typedNameEl = document.getElementById("typed-name");

function typeName() {
  if (index < nameText.length) {
    typedNameEl.textContent += nameText[index];
    index++;
    setTimeout(typeName, 120); // typing speed
  }
}
document.addEventListener("DOMContentLoaded", typeName);

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(fader => observer.observe(fader));

// Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if(document.body.classList.contains("light-mode")){
    themeToggle.textContent = "🌞";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// Scroll to Top
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate Project Modals
function showProject(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'block';
  modal.classList.add('show');
}
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
}

