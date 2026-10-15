# 🌸 SakhiCare AI — Women's Health Companion

**Your health. Your voice.**

SakhiCare AI is a women's health education prototype designed to help women better understand common symptoms, learn about PCOS (Polycystic Ovary Syndrome), and track their menstrual cycles.

The platform aims to provide a supportive, accessible experience with multilingual content in English, Kannada, and Hindi.

## 🎯 Problem Statement

Many women face difficulties accessing understandable health information, identifying when symptoms need medical attention, and discussing menstrual health concerns.

SakhiCare AI aims to make basic women's health education more approachable through a simple, user-friendly web application.

## ✨ Key Features

- **Multilingual Interface:** English, Kannada, and Hindi language options.
- **Symptom Guidance:** A rule-based checker uses phrase boundaries and common negation handling to offer limited educational guidance. Its PCOS symptom mapping separates irregular/missed periods and selected androgen-related signs from heavy flow, pelvic discomfort, and metabolic indicators. It explains that metabolic indicators and pelvic discomfort are not Rotterdam diagnostic criteria, and that ovarian morphology requires clinical assessment; the checker cannot diagnose or rule out PCOS.
- **PCOS Awareness:** Information about common PCOS symptoms and the importance of professional evaluation.
- **Menstrual Cycle Tracker:** Records the last period start date and estimates the next period date based on the entered cycle length.
- **Care Guidance:** Highlights selected warning signs and encourages appropriate medical care.
- **Symptom Journal and Calendar:** Logs flow, mood, selected symptoms, and notes in this browser; entries can be selected and printed as a healthcare-visit summary.
- **Health Library:** Source-linked educational guides on endometriosis, anaemia, and contraception, available in English, Kannada, and Hindi.
- **Opt-in Reminders:** Offers an estimated period-date reminder. In-page checks only run while the app is open; browser notifications require permission and a supported secure connection.
- **Nearby Hospital Search:** Optionally prepares a Google Maps hospital search from browser location or a manually entered area. Location is not saved by SakhiCare and is shared with Maps only when the user opens the link.
- **Emergency Call Link:** Provides a user-initiated `tel:112` link labeled for India and reminds users elsewhere to call their local emergency number. SakhiCare cannot place calls on a user's behalf.
- **Women’s Health Tips:** A rotating, multilingual set of general educational tips.
- **Privacy Controls:** Export or delete the cycle, journal, and reminder data saved by SakhiCare in this browser.
- **Optional SQLite Accounts:** Create an account or sign in, then explicitly upload or download the cycle, journal, and reminder records. Records are not synchronized automatically.
- **Personal Profile and Dashboard:** Signed-in users can save a display name to their account; the personal dashboard summarizes journal entries, cycle estimates, and reminder status from this device. The profile does not ask for age or medical details.
- **Responsive Design:** Designed to work on desktop and mobile screens.
- **Separate Feature Pages:** The home page links to focused pages for each feature, with a feature menu available throughout the app. Feature pages use URLs such as `/?page=journal`, `/?page=dashboard`, and `/?page=profile`; existing browser records and SQLite account data remain available.
- **Privacy-Conscious Prototype:** Cycle, journal, and reminder details are saved locally in the browser using localStorage. Typed symptom text is not saved by SakhiCare; browser speech recognition may use an online browser service.

## 🛠️ Technologies Used

- HTML5 — webpage structure
- CSS3 — styling and responsive design
- JavaScript — interactive features and keyword-based symptom guidance
- Browser localStorage — local cycle, journal, and reminder storage
- Node.js and Express — same-origin API and static-file server
- SQLite — account, health-record, and session storage in a local database file; no separate database service is required

## 🚀 Run the App and Backend

1. Download or clone the project.
2. Open the `SakhiCareAI` folder in Visual Studio Code.
3. Install Node.js 22.13 or newer. SQLite is built into Node.js; you do not need a native SQLite package, MongoDB, or a separate database server.
4. In a terminal in the project folder, run `npm install`.
5. Copy `.env.example` to `.env` and set `SESSION_SECRET` to a random secret of at least 32 characters. In PowerShell, generate one with `$secret = node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` and paste `$secret` into `.env`. `SQLITE_PATH` defaults to `backend/data/sakhicare.sqlite`; keep `.env` private and never commit it.
6. Run `npm start` and open `http://localhost:3000`. Do not use Live Server for account features; the Express server serves both the app and API.
7. Run `npm test` to check backend validation, SQLite storage, and session persistence.

The optional account form supports registration and sign-in. After signing in, choose whether to upload this browser's records or download the account's records. Each transfer replaces the destination records after confirmation. Browser-only use continues to work without an account.

### Backend API

- `GET /api/health` — service and database readiness.
- `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`, `POST /api/auth/logout` — account session management.
- `GET /api/profile`, `PUT /api/profile` — read or update the signed-in user's display name.
- `GET /api/data`, `PUT /api/data`, `DELETE /api/data` — read, replace, or delete the signed-in account's cycle, journal, and reminder records.

The app uses same-origin, HTTP-only, `SameSite=Strict` session cookies stored in SQLite. Mutating API requests require the configured `APP_ORIGIN`. Set it to the exact public HTTPS origin when deploying. Passwords are hashed with bcrypt; passwords must contain at least 12 characters and fit within bcrypt's 72-byte input limit. Authentication attempts are rate-limited.

## 📁 Project Structure

```text
SakhiCareAI/
├── index.html
├── style.css
├── script.js
├── features.js
├── navigation.js
├── symptom-checker.js
├── backend/
│   ├── lib/validation.js
│   ├── database.js
│   ├── server.js
│   └── test/
│       ├── database.test.js
│       └── validation.test.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
```

## 🔒 Privacy

The prototype uses browser localStorage to retain cycle details, journal entries, and reminder preferences in the same browser. Journal notes may contain sensitive health information; avoid entering identifying information or using this app on shared devices. Use **Export my data** or **Delete my data** in the privacy controls. Clearing browser data also removes saved information. Private browsing may not retain it. Typed symptom text is handled in the page and not saved by SakhiCare, but browser speech-recognition implementations may send audio to an online provider; check your browser's privacy settings before using voice input.

Account use is optional. Health records are copied to the local SQLite database only after signing in and choosing **Upload this device's data**. **Download account data** replaces the local copy after confirmation. **Delete my data** removes cycle/journal/reminder records from both the browser and the signed-in account; it does not delete the account email, profile display name, or password hash. The optional profile stores only a display name. Password reset, email verification, multi-factor authentication, and account deletion are not implemented in this prototype.

The backend stores account information and health records in the SQLite file selected by `SQLITE_PATH`; this file and its SQLite journal files contain sensitive information and must be kept private, backed up carefully, and excluded from source control. This prototype does not add application-level encryption to the database file. For any real deployment, use HTTPS, restrict access to the host and database file, protect backups, manage secrets securely, monitor the service, and obtain an independent security/privacy review. Do not use this hackathon prototype for clinical records or claim regulatory compliance.

Reminders are estimates, not medical advice. The app checks for due reminders while its page is open. It does not provide background delivery when the page is closed. Optional browser notifications depend on browser support, permission, and a secure connection.

Nearby hospital search asks for browser location only after the user presses its location button. SakhiCare does not store location; the user must open the generated Google Maps link to share coordinates with Google Maps. Location access may require HTTPS or localhost. Users can search by entering an area instead.

The emergency phone link calls 112 in India only when the user activates it; emergency numbers vary by location. SakhiCare cannot place calls or guarantee the availability of emergency services.

The health library links to NHS and WHO reference pages. Its summaries and tips are educational and are not a substitute for a qualified healthcare professional.

## ⚠️ Medical Disclaimer

SakhiCare AI is an educational hackathon prototype, not a medical device or diagnostic system. Its symptom checker uses basic keyword rules and may misunderstand or miss symptoms. It cannot diagnose PCOS or other medical conditions, and it cannot reliably determine whether a symptom is safe.

Users should consult qualified healthcare professionals for medical advice. Severe or potentially life-threatening symptoms require urgent medical attention.

## 🔮 Future Enhancements

- Clinical review and continued improvement of health-library summaries and translations
- Accessibility improvements and user testing across devices and assistive technologies
- More regional languages and broader browser support for voice input
- Optional, privacy-reviewed background reminders where platform support allows

## 👩‍💻 Project Purpose

Built as a student hackathon prototype to encourage women's health awareness, accessible education, and informed conversations with healthcare professionals.
