if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

const regioneSelect = document.getElementById("regione");
const modelloSelect = document.getElementById("modello");
const risultatoDiv = document.getElementById("risultato");

// Popola regione
const regioni = [...new Set(trasportiData.map(r => r.Regione))];
regioni.forEach(reg => {
  const opt = document.createElement("option");
  opt.value = reg;
  opt.textContent = reg;
  regioneSelect.appendChild(opt);
});

// Popola modelli
const modelli = Object.keys(trasportiData[0]).filter(k => k !== "Regione");
modelli.forEach(mod => {
  const opt = document.createElement("option");
  opt.value = mod;
  opt.textContent = mod.replaceAll("_", " ");
  modelloSelect.appendChild(opt);
});

function aggiornaRisultato() {
  const regione = regioneSelect.value;
  const modello = modelloSelect.value;
  const riga = trasportiData.find(r => r.Regione === regione);
  if (riga && modello) {
    risultatoDiv.textContent = `Costo: € ${riga[modello] || 'n.d.'}`;
  } else {
    risultatoDiv.textContent = "";
  }
}

regioneSelect.addEventListener("change", aggiornaRisultato);
modelloSelect.addEventListener("change", aggiornaRisultato);
