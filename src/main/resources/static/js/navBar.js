// Cargar el archivo HTML con la barra de navegación
fetch("navBar.html")
  .then((response) => response.text("Se encontro el Nav"))
  .then((html) => {
    // Crear un elemento temporal para contener el HTML cargado
    var temporal = document.createElement("div");
    temporal.innerHTML = html;

    // Obtener el elemento <nav> del HTML cargado
    var nav = temporal.querySelector("nav");

    // Agregar <nav> al documento
    var contenedor = document.getElementById("contenedor");
    contenedor.insertBefore(nav, contenedor.firstChild);
  });
