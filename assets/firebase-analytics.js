import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import { getAnalytics, logEvent } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js';
import { initializeAppCheck, ReCaptchaV3Provider } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app-check.js';

const firebaseConfig = {
  apiKey: "AIzaSyAOk_MHqUbKP_6SjPMkuMrnDs7NiL-r6s0",
  authDomain: "photography-guide-24129.firebaseapp.com",
  projectId: "photography-guide-24129",
  storageBucket: "photography-guide-24129.firebasestorage.app",
  messagingSenderId: "211186450396",
  appId: "1:211186450396:web:c9e6cb5fd5c7c95d545919",
  measurementId: "G-58JKDXX7ZX"
};

const app = initializeApp(firebaseConfig);
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeG1YEsAAAAADnk9dbD94kdiFd3n4NyOskGnq9S'),
  isTokenAutoRefreshEnabled: true
});
export const analytics = getAnalytics(app);
export { logEvent };
