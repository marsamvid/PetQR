import { app, db } from "./firebase-config.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const auth = getAuth(app);

const formulario = document.getElementById("mascotaForm");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const usuario = auth.currentUser;

    if (!usuario) {
        alert("Debés iniciar sesión.");
        return;
    }

    const mascota = {

        nombre: document.getElementById("nombreMascota").value,

        especie: document.getElementById("especie").value,

        raza: document.getElementById("raza").value,

        edad: document.getElementById("edad").value,

        fechaCreacion: new Date()

    };

    try {

        await addDoc(
            collection(db, "usuarios", usuario.uid, "mascotas"),
            mascota
        );

        alert("🐾 Mascota registrada correctamente");

        window.location.href = "panel.html";

    } catch (error) {

        console.error(error);

        alert("Ocurrió un error al guardar la mascota.");

    }

});