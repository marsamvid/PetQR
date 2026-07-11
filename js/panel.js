import { app, db } from "./firebase-config.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const referencia = doc(db, "usuarios", user.uid);
    const documento = await getDoc(referencia);

    if (documento.exists()) {
        document.getElementById("saludo").textContent =
            `Hola ${documento.data().nombre} 👋`;
    }

});