const targetDate = new Date("2025-10-26T03:00:00");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    countdown.innerText = "È arrivato il cambio dell'ora!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  countdown.innerText = `${days} giorni, ${hours} ore, ${minutes} minuti`;
}
updateCountdown();
setInterval(updateCountdown, 60000);
