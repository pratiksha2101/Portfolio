// ====== Portfolio Script ======
console.log("Portfolio Loaded");

// 🌙 Dark Mode Toggle with Local Storage Memory
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('dark-mode');
}

// Toggle theme and save preference
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});

// ====== Smooth Scroll for Navigation ======
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
