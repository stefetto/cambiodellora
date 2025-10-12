document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggle || !navMenu) {
    console.warn("Elemento menu-toggle o nav-menu non trovato");
    return;
  }

  // Chiudi il menu all'avvio
  navMenu.classList.remove('active');
  toggle.classList.remove('open');

  // Apri/chiudi al clic sul bottone
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggle.classList.toggle('open');
  });

  // Chiudi al clic su un link del menu
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggle.classList.remove('open');
    });
  });
});
function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("2025-10-26T03:00:00");

  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "✅ Il cambio dell’ora è avvenuto!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.textContent = `${days}g ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
