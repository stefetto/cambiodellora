/***************************************************
 * MENU MOBILE
 ***************************************************/
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      toggle.classList.toggle('open');
    });
  }
});


/***************************************************
 * SIMULAZIONE DATA 🔥
 ***************************************************/
const offsetGiorniTest = 0;

function getNow() {
  const now = new Date();
  now.setDate(now.getDate() + offsetGiorniTest);
  return now;
}


/***************************************************
 * DATE
 ***************************************************/
const dataCambioLegale = new Date("2026-03-29T03:00:00");
const giorniDopo = 60;
const dataCambioSolare = new Date("2026-10-25T03:00:00");


/***************************************************
 * LOGICA PRINCIPALE
 ***************************************************/
function updateSystem() {

  const now = getNow();

  const titolo = document.getElementById("titoloSezione");
  const countdown = document.getElementById("countdown");
  const box = document.getElementById("infoBox");
  const clock = document.getElementById("clockContainer");

  if (!titolo) return;

  const fine = new Date(dataCambioLegale);
  fine.setDate(fine.getDate() + giorniDopo);

  // PRIMA
  if (now < dataCambioLegale) {

    titolo.textContent = "🕒 Prossimo cambio dell’ora tra :";

    countdown.style.display = "block";
    box.style.display = "flex";
    clock.style.display = "none";

    mostraCountdown(dataCambioLegale, now);
  }

  // DOPO CAMBIO
  else if (now >= dataCambioLegale && now < fine) {

  //  titolo.textContent = "ORA LEGALE IN CORSO - Controllate i vostri orologi";

    countdown.style.display = "none";
    box.style.display = "none";
    clock.style.display = "block";

    aggiornaOrologio(now);
  }

  // DOPO 60 GIORNI
  else {

    titolo.textContent = "ORA LEGALE IN VIGORE PER ALTRI :";

    countdown.style.display = "block";
    box.style.display = "none";
    clock.style.display = "none";

    mostraCountdown(dataCambioSolare, now);
  }
}


/***************************************************
 * COUNTDOWN
 ***************************************************/
function mostraCountdown(target, now) {

  const el = document.getElementById("countdown");

  const diff = target - now;

  if (diff <= 0) {
    el.textContent = "⏰ Evento raggiunto!";
    return;
  }

  const g = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  el.textContent = `${g}g ${h}h ${m}m ${s}s`;
}


/***************************************************
 * OROLOGIO
 ***************************************************/
function aggiornaOrologio(now) {

  const el = document.getElementById("digitalClock");

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  const data = now.toLocaleDateString("it-IT");

  el.textContent = `${data} ${h}:${m}:${s}`;
}


/***************************************************
 * LOOP
 ***************************************************/
setInterval(updateSystem, 1000);


/***************************************************
 * CITAZIONI
 ***************************************************/
document.addEventListener("DOMContentLoaded", function () {

  const citazioni = [
    "Il tempo vola… soprattutto quando perdi un’ora.",
    "Cambio dell’ora = caos totale.",
    "Un’ora avanti, una indietro.",
    "Dormire è un lusso.",
    "Il tempo gioca con noi."
  ];

  const el = document.getElementById("citazione");

  if (el) {
    el.textContent = citazioni[Math.floor(Math.random() * citazioni.length)];
  }
});
