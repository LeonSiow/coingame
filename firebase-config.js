/* ================= APMA BRAND RUSH — ONE-TIME SETUP =================
   STEP 1: Go to https://console.firebase.google.com (sign in with Google)
           → "Add project" → any name (e.g. apma-game) → Analytics OFF → Create.
   STEP 2: In the project: Build → Firestore Database → Create database
           → Start in TEST MODE → location asia-southeast1 → Enable.
   STEP 3: Project overview → gear icon → Project settings → scroll to
           "Your apps" → click the </> (Web) icon → register app (any name)
           → copy the values from the firebaseConfig block it shows
           into the matching lines below → commit this file on GitHub.
   ==================================================================== */
window.APMA_FIREBASE_CONFIG={
  apiKey:            "PASTE_API_KEY_HERE",
  authDomain:        "PASTE_PROJECT_ID.firebaseapp.com",
  projectId:         "PASTE_PROJECT_ID",
  storageBucket:     "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "0",
  appId:             "PASTE_APP_ID"
};

/* Your host key — type it once on the #host view to unlock host controls.
   Change it to anything you like before the event. */
window.APMA_HOST_KEY="apma2026";
