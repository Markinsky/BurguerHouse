  // Cargar el archivo HTML con la barra de navegación
  fetch('footer.html')
  .then(response => response.text("Se encontro el Footer"))
  .then(html => {
    // Crear un elemento temporal para contener el HTML cargado
    var temporal = document.createElement('footer');
    temporal.innerHTML = html;

    // Obtener el elemento <nav> del HTML cargado
    var nav = temporal.querySelector('footer');

    // Agregar <nav> al documento
    var contenedor = document.getElementById('contenedorF');
    contenedor.insertBefore(nav, contenedor.firstChild);
  });