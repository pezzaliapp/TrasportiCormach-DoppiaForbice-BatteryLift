# TrasportiItaliaPWA

**TrasportiItaliaPWA** è una Progressive Web App (PWA) che consente di calcolare i costi di trasporto per modelli specifici in base alla regione italiana, senza bisogno di connessione o caricamento manuale di file.

## 🚀 Funzionalità
- Seleziona una **regione**
- Scegli il **modello del prodotto** (es. L_3100, L_3300_EVO, ecc.)
- Visualizza il **costo di trasporto** corrispondente
- Funziona **offline** grazie al service worker
- **Responsive** e ottimizzata per mobile

## 🗂️ Dati integrati
I costi sono precaricati nella PWA (file `trasporti_data.js`) sulla base di un listino ufficiale.

## 📦 Installazione
1. Clona o scarica questa repository
2. Pubblica il contenuto su una piattaforma statica come **GitHub Pages**, **Netlify**, **Render**, ecc.
3. Apri `index.html` per iniziare a usare l'app

## 🔧 Struttura dei file
- `index.html` — interfaccia utente
- `style.css` — stile minimale e mobile-first
- `app.js` — logica di selezione e calcolo
- `trasporti_data.js` — costi precaricati
- `manifest.json` — file PWA per l'installazione su dispositivi
- `service-worker.js` — per la modalità offline

## 📱 Aggiungi alla schermata Home
Può essere installata su smartphone Android/iOS come app nativa.

## 📄 Licenza
Open source – puoi adattarla ai tuoi progetti, anche commerciali.

---

Realizzata da [Alessandro Pezzali](https://www.pezzaliapp.com) — Made for Makers 🇮🇹
