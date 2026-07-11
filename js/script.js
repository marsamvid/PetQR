function enviarUbicacion(){

    if(!navigator.geolocation){

        alert("Tu navegador no permite obtener ubicación.");
        return;

    }


    navigator.geolocation.getCurrentPosition(

        function(posicion){

            let lat = posicion.coords.latitude;
            let lon = posicion.coords.longitude;


            let mapa = `https://maps.google.com/?q=${lat},${lon}`;


            let mensaje = 
            `Hola, encontré a Gorda 🐾%0A%0AEstoy en esta ubicación:%0A${mapa}`;


            let whatsapp = 
            `https://wa.me/542946508445?text=${mensaje}`;


            window.open(whatsapp, "_blank");


        },


        function(){

            alert("Necesitamos permiso de ubicación para enviarla.");

        }

    );

}