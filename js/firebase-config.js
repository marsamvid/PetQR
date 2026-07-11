// Importar Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { 
    getFirestore 
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics.js";


// Configuración PetQR

const firebaseConfig = {

  apiKey: "AIzaSyCPQ2l9GjxgAWDCv2dnyTJWza7j0SjM4Mc",

  authDomain: "petqr-6e58d.firebaseapp.com",

  projectId: "petqr-6e58d",

  storageBucket: "petqr-6e58d.firebasestorage.app",

  messagingSenderId: "515927133631",

  appId: "1:515927133631:web:0a399de999fe7d7c24250a",

  measurementId: "G-L5NT114XZG"

};


// Inicializar Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);


export { app, db };