

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


