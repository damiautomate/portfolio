/* ============================================================
   FIREBASE CONFIG
   This file is loaded by both admin.html and index-data-driven.html.
   Note: These credentials are SAFE to be public. Security comes
   from the Firestore Rules (read = anyone, write = authenticated admin only).
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyCzC72qRN_Xs2o0DzKyjtkpPWSzxb4Iedw",
  authDomain: "dami-portfolio.firebaseapp.com",
  projectId: "dami-portfolio",
  storageBucket: "dami-portfolio.firebasestorage.app",
  messagingSenderId: "756457863981",
  appId: "1:756457863981:web:f897684fbc4fde058631a4"
};

// Firestore doc path for your site content
const SITE_DOC_PATH = { collection: "site", doc: "content" };
