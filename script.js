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
function calcolaPunteggio() {
  let punteggio = 0;
  for (let i = 1; i <= 5; i++) {
    const risposta = document.querySelector(`input[name="q${i}"]:checked`);
    if (risposta && risposta.value === "1") {
      punteggio++;
    }
  }

  const risultato = document.getElementById("risultato");
  if (punteggio === 5) {
    risultato.innerHTML = `<h3>🎉 Complimenti! Sei un <span class="maestro">Maestro del Cambio dell’Ora</span>! (${punteggio}/5)</h3>`;
  } else {
    risultato.innerHTML = `<h3>Hai totalizzato ${punteggio}/5. Riprova per diventare Maestro!</h3>`;
  }
}

function resetQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("risultato").innerHTML = "";
}
document.addEventListener("DOMContentLoaded", function () {
  const citazioni = [
    "❝ Il tempo vola… soprattutto quando perdi un’ora di sonno.",
    "❝ Cambio dell’ora: quel momento magico in cui il tuo forno e il microonde non sono più d’accordo.",
    "❝ Un’ora avanti, un’ora indietro… ma il caffè resta sempre puntuale.",
    "❝ Dormire un’ora in più: il sogno proibito che si avvera solo una volta l’anno.",
    "❝ Il cambio dell’ora: quando anche gli orologi hanno bisogno di una pausa.",
    "❝ Non è magia, è solo il cambio dell’ora che ti fa arrivare tardi con stile.",
    "❝ Ora legale: il modo elegante per rubarti un’ora di sonno e chiamarlo progresso.",
    "❝ Cambio dell’ora: il momento in cui scopri quanti orologi hai davvero in casa.",
    "❝ Un piccolo passo per l’orologio, un grande salto per la confusione generale.",
    "❝ Cambio dell’ora: quel giorno in cui anche il tempo si prende gioco di te."
  ];

  const casuale = Math.floor(Math.random() * citazioni.length);
  const citazioneElement = document.getElementById("citazione");
  if (citazioneElement) {
    citazioneElement.textContent = citazioni[casuale];
    citazioneElement.style.fontStyle = "italic";
    citazioneElement.style.marginTop = "1em";
    citazioneElement.style.color = "#2a5d9f"; // Cambia colore qui se vuoi
    citazioneElement.style.textAlign = "center";
  }
});

