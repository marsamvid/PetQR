import { app } from "./firebase-config.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const auth = getAuth(app);

const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)

        .then(() => {

            window.location.href = "panel.html";

            

        })

        .catch((error) => {

            alert("❌ " + error.message);

        });

});