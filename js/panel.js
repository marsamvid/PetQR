import { app, db } from "./firebase-config.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

import {
    collection,
    getDocs,
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
    const lista = document.getElementById("listaMascotas");

lista.innerHTML = "";

const mascotasRef = collection(db, "usuarios", user.uid, "mascotas");

const mascotas = await getDocs(mascotasRef);

if (mascotas.empty) {

    lista.innerHTML = "<p>Aún no agregaste ninguna mascota.</p>";

} else {

    mascotas.forEach((mascota) => {

        const datos = mascota.data();

        lista.innerHTML += `
            <div class="tarjeta-mascota">

                <h3>🐾 ${datos.nombre}</h3>

                <p><strong>Especie:</strong> ${datos.especie}</p>

                <p><strong>Raza:</strong> ${datos.raza}</p>

                <p><strong>Edad:</strong> ${datos.edad}</p>

            </div>
        `;

    });

}

});
document
    .getElementById("agregarMascota")
    .addEventListener("click", () => {

        window.location.href = "agregar-mascota.html";

    });