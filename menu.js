// document.addEventListener("DOMContentLoaded", function () {

// });

// document.addEventListener("DOMContentLoaded", function () {
//     var secciones = document.querySelectorAll(".seccion");

//     secciones.forEach(function (seccion) {
//         seccion.style.display = "none"; // Oculta todas las secciones
//     });

//     var opcionesMenu = document.querySelectorAll(".dropdown-item");

//     opcionesMenu.forEach(function (opcion) {
//         opcion.addEventListener("click", function (event) {
//             event.preventDefault(); // Evita el comportamiento predeterminado del enlace

//             var target = opcion.getAttribute("href");

//             secciones.forEach(function (seccion) {
//                 seccion.style.display = "none"; // Oculta todas las secciones
//             });

//             document.querySelector(target).style.display = "block"; // Muestra la sección correspondiente
//         });
//     });
// });


function mostrarSeccion(seccionId) {
    // Oculta todas las secciones
    var secciones = document.getElementsByTagName('section');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    // Muestra la sección seleccionada
    var seccionSeleccionada = document.getElementById(seccionId);
    seccionSeleccionada.style.display = 'block';
}

