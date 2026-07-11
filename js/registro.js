console.log("Registro.js funcionando 🐾");
import { 
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";


import { app, db } from "./firebase-config.js";
import { 
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";


const auth = getAuth(app);



const formulario = document.querySelector("form");


formulario.addEventListener("submit", async (e)=>{

    e.preventDefault();


    const email = formulario.querySelector(
        'input[type="email"]'
    ).value;


    const password = formulario.querySelector(
        'input[type="password"]'
    ).value;
    if(password.length < 6){

    alert("⚠️ La contraseña debe tener al menos 6 caracteres");

    return;

}



    createUserWithEmailAndPassword(
        auth,
        email,
        password
    )

    .then((userCredential)=>{


    const usuario = userCredential.user;


    const nombre = document.getElementById("nombre").value;





alert("🎉 Cuenta creada correctamente en PetQR");
})

    .catch((error)=>{

        alert(error.message);

    });


});
