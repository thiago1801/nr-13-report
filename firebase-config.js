// ============================================================
//  CONFIGURAÇÃO FIREBASE — NR-13 REPORT (ALC Compressores)
// ============================================================
const firebaseConfig = {
  apiKey:            "AIzaSyDpnGIJPgawKb4xRQ3SzOmQmI_Heq3OhUI",
  authDomain:        "nr-13-report-f0362.firebaseapp.com",
  projectId:         "nr-13-report-f0362",
  storageBucket:     "nr-13-report-f0362.firebasestorage.app",
  messagingSenderId: "531309061340",
  appId:             "1:531309061340:web:f3a05f2e1a05979c2b0019"
};

// Inicializa Firebase (evita duplicação se carregado em múltiplas páginas)
if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
