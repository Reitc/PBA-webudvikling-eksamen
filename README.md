# README

**Cella Test Webshop (Vue 3 + Pinia + Firebase/Firestore)**  
(https://github.com/kartal5/cella-test-webshop/)

Velkommen til vores e-handelsprojekt, som benytter Vue 3, Pinia og Firebase/Firestore i frontend og en Node.js + Express-baseret backend til håndtering af betalinger via Stripe. Projektet er fortsat under udvikling, men nedenfor finder du vejledning til opsætning og test af de eksisterende funktioner.

---

## Overblik

- **Frontend**:  
[Vue 3](https://vuejs.org/) med [Pinia](https://pinia.vuejs.org/) til state management, Tailwind CSS til styling og Vue Router til navigering.  

- **Backend**:  
[Node.js](https://nodejs.org/) med [Express](https://expressjs.com/) til at håndtere server-side logik, herunder Stripe-integration. (betaling med testkort)

- **Database & Hosting**:  
[Firebase/Firestore](https://firebase.google.com/) til at gemme produktdata, brugerkonti m.m. Firebase Hosting bruges til at gøre applikationen tilgængelig online.

- **Betaling**:  
[Stripe](https://stripe.com/) til at håndtere og simulere online kortbetalinger. (testtilstand)

---

## Funktioner

1. **Brugerhåndtering med Firebase**  
   - Registrering af nye brugere (med e-mail bekræftelse).  
   - Login og logout.  
   - Roller: Almindelige brugere vs. administratorer.  
   - Adgangsbegrænsning via route guards (f.eks. kun admin kan tilgå Admin Panel).

2. **Admin Panel**  
   - Opret, rediger og slet produkter i Firestore.  
   - Tildel roller til brugere (fx opgradere brugere til “elite”-rolle for at få 10% rabat på ordrer).  
   - Send beskeder til alle admins eller enkeltsamtaler mellem administratorer.

3. **Produkter & Kategorier**  
   - Dynamisk kategoristruktur (Mennesker, Heste, Hunde, Katte osv.).  
   - Underkategorier (f.eks. Fordøjelse, Vitaminer & Mineraler).  
   - Søgning i produkter.  
   - “Kontakt for pris”-produkter eller mulige prisvalg (for produkter med flere produktvarianter).

4. **Kurv & Checkout**  
   - Læg produkter i kurv + opdater antal.  
   - Oversigt og totalberegning.  
   - Stripe-checkout med testkort.  
   - Ordrebekræftelse ved gennemført betaling.

5. **Blog-sektion (eksempel, og ikke på Firestore endnu men på frontned lige pt.)**  
   - Viser eksempler på blogopslag.  
   - Dynamiske sider for hvert blogindlæg.

---

## Kom hurtigt i gang

Disse trin er kun tiltænkt **demo/undervisningsformål**.

### Forudsætninger

1. **Node.js**  
2. **NPM** (installeres sammen med Node.js).  
3. **Firebase-projekt** (inkl. Firestore) samt Stripe-konto (test-API-nøgler).

> **Bemærk**: Projektet inkluderer eksempelnøgler til Stripe og Firebase (kun testbrug!).

### Installation

1. **Klon** eller download dette repository fra GitHub. (https://github.com/kartal5/cella-test-webshop/)
2. Åbn en terminal i hovedmappen.

## Kørsel af projektet

For at demonstrere appens primære funktioner kan du følge disse trin:

---

### 1. Kør backend (foregår lokalt!)

   cd server
   node server.js

Serveren vil starte på `http://localhost:3000`. Den håndterer nu Stripe-betalingerne.

---

### 2. Kør frontend
Åbn en ny terminal i projektets hovedmappe og kør:

   npm install
   npm run dev

Nu vil Vue-appen køre lokalt på `http://localhost:xxxx` (et portnummer som Vite vælger).

---

### 3. Deployment og hosting
For at gøre applikationen tilgængelig online benytter vi Firebase Hosting. Her er trinnene for deployment:

1. **Byg projektet til produktion**:  
   ```
   npm run build
   ```
   Dette genererer en `dist/` mappe med alle nødvendige filer til deployment.

2. **Deploy til Firebase Hosting**:  
   Sørg for, at Firebase CLI er installeret og opsat korrekt. Kør derefter:
   ```
   firebase deploy
   ```
   Dette uploader alle filer fra `dist/` mappen og gør projektet tilgængeligt via Firebase Hosting.

   - **Hosting URL**: https://cella-test-bachelor-webshop.web.app
   - **Project Console**: [Firebase Console](https://console.firebase.google.com/project/cella-test-bachelor-webshop/overview)

---

### 4. Registrering & Login

1. **Registrering**  
   - Gå til `http://localhost:5173/register` (eller det portnummer Vite bruger).  
   - Indtast en gyldig e-mail og en adgangskode (minimum 6 tegn).  
   - Efter vellykket registrering sender Firebase en bekræftelsesmail. Du skal klikke på bekræftelseslinket, før du kan logge ind.

2. **Login**  
   - Gå til `http://localhost:5173/login`.  
   - Indtast den e-mail og adgangskode, du brugte ved registrering.  
   - Hvis du ikke har bekræftet din mail endnu, vil systemet bede dig om at gøre det først.  
   - Ved succesfuldt login vil du blive omdirigeret til forsiden eller den side, du forsøgte at tilgå.

---

### 5. Test af betaling
1. Navigér til “Din kurv” og fortsæt til “Til Betaling”.  
2. Indtast gyldige leverings- og kortoplysninger.  
3. **Stripe Test Card**: `4242 4242 4242 4242` med vilkårlig fremtidig udløbsdato og CVC.  
4. Ved gennemført betaling nulstilles kurven, og du får en takkeside.

---

## Fil- og mappestruktur (udpluk)

- **server/**
  - `server.js` – Node/Express server med Stripe-integration.
- **src/**
  - **assets/** – Billeder, CSS.
  - **components/** – Genanvendelige Vue-komponenter (fx Navbar, Footer, ProductCard).
  - **firebase/** – Firebase-konfiguration (`init.js`).
  - **router/** – Vue Router-filer (alle routes).
  - **stores/** – Pinia-stores (fx `cartStore.js`, `authStore.js`).
  - **views/** – Sider (Login, Register, Payment, Home, Blog osv.).
  - `main.js` – Appens hovedfil (initializer Pinia, router, Toast m.m.).
  - `App.vue` – Hovedkomponenten.

---

## Bemærkninger

- Dette projekt er **udelukkende** til undervisningsbrug og for at vise mulighederne med Vue 3, Pinia, Firebase og Stripe.  
- Appen bruger e-mailbekræftelse i Firebase. Sørg for at aktivere det i Firebase-konsollen, hvis du tester på egen konto.

---

**God fornøjelse med gennemgangen!**
