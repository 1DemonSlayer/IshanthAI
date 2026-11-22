// Paste your Firebase web-app config here (Firebase Console > Project settings > Your apps > Web app).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAppXD5GTBPjfdDPojjf_JKJXmOLESRMm0",
  authDomain: "app-signup-1c80a.firebaseapp.com",
  projectId: "app-signup-1c80a",
appId: "1:191320619349:web:be7019ea5f40448b7817dc",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
