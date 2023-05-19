
//Se definen las variables totales a utilizar en este JavaScript
let nombreFormulario = document.getElementById("nombreFormulario");
let imgFormulario = document.getElementById("imgFormulario");
let precioFormulario = document.getElementById("precioFormulario");
let descripcionFormulario = document.getElementById("descripcionFormulario");
let categoriaFormulario = document.getElementById("categoriaFormulario");
let btnProducto = document.getElementById("btnProducto");
let alerta = document.getElementById("alertValidaciones");
let txtAlerta = document.getElementById("alertValidacionesTexto");
let msgError = "";

// Recupera el archivo JSON almacenado en Local Storage
let menu = JSON.parse(localStorage.getItem('menu'));
console.log(menu);

//Listener acerca de los diferentes campos a rellenar en el formulario de contacto
nombreFormulario.addEventListener("blur", function (event) {
    event.preventDefault();
    nombreFormulario.value.trim();

    precioFormulario.addEventListener("blur", function (event) {
        event.preventDefault();
        precioFormulario.value = precioFormulario.value.trim();
    });

    descripcionFormulario.addEventListener("blur", function (event) {
        event.preventDefault();
        descripcionFormulario.value = descripcionFormulario.value.trim();
    });
});

//Se definen las constantes con expresiones regulares para poner parámetros de utilización sobre los campos a rellenar del formulario
const regexNombreFormulario = (/^(?=[A-Za-záéíóúÁÉÍÓÚÑñ])[A-Za-záéíóúÁÉÍÓÚÑñ0-9\s]{3,}$/);
const regexPrecioFormulario = (/^\d{1,3}(\.\d{1,2})?$/);
const regexDescripcionFormulario = (/^[\s\S]{5,150}$/);

// función para validar los diferentes errores que existen en los campos del formulario y agregarlos a la variable msgError
btnProducto.addEventListener("click", function (event) {
    event.preventDefault();
    let cont = 0;

    if (validarNombreFormulario(nombreFormulario.value)) {
    } else {
        console.log(msgError);
        cont += 1;
    }
    if (validarPrecioFormulario(precioFormulario.value)) {
    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarDescripcionFormulario(descripcionFormulario.value)) {
    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarCategoriaFormulario(categoriaFormulario.value)) {
    } else {
        console.log(msgError);
        cont += 1;
    }

    //Alert insertado mediante la página sweet alert2
    if (cont > 0) {
        let htmlAlert = `<ul class = listaDeErrores> Tienes errores en los siguientes campos: ${msgError}</ul>`;
        Swal.fire({
            icon: 'error',
            title: 'ORAA...',
            html: htmlAlert,
        });

        //Funcionalidad para qe se reinicie el contador cada vez que se muestre un error en el envío del formulario de contacto
        cont = 0;
        htmlAlert = "";
        msgError = "";

        //else que muestra los datos del error mediante las sugerencias
    } else {
        let nuevoProducto = {
            "nombre": nombreFormulario.value,
            "img": imgFormulario.value,
            "descripción": descripcionFormulario.value,
            "precio": precioFormulario.value,
            "categoría": categoriaFormulario.value
        }
        //let jsonNuevoProducto = JSON.stringify(nuevoProducto);
        //console.log(jsonNuevoProducto);
        let getMenu = [];
        // Obtenemos los datos del Local Storage
        let productosGuardados = localStorage.getItem("jsonNuevoProducto");

        // Convertimos los datos a un array
        let menuArray = JSON.parse(productosGuardados);
        getMenu = menuArray;
        getMenu.push(nuevoProducto);
        Swal.fire("Producto Creado Correctamente");
        console.log(JSON.stringify(getMenu));
        localStorage.setItem("jsonNuevoProducto", JSON.stringify(getMenu));
        console.log(getMenu);
        console.log(getMenu[23]);
        

        function agregarProducto(nuevoProducto) {
            getMenu.push(nuevoProducto)
            localStorage.setItem('jsonNuevoProducto', JSON.stringify(getMenu));
            console.log(agregarProducto);
            cargarNuevoProducto();
        }

        function cargarNuevoProducto() {
            const itemsContainer = document.getElementById("menuContenido");
            let contador = 1;
            itemsContainer.innerHTML = "";

            agregarProducto(burguer => {
                let newBurger = `<div class="card" style="width: 18rem;">
                    <img src="${burguer.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title"><strong>${burguer.nombre}</strong></h5>
                      <p class="card-description">${burguer.descripción}</p>
                      <p class="card-precio"><strong>$ ${burguer.precio}</strong></p>
                      <a href="#" class="btn btn-primary">Agregar</a>
                    </div>
                  </div>`;
            });
            let getMenu = [];
            console.log(newBurger);
            getMenu.push(newBurger);
        }
    }
});

//Función para validar los datos del formulario con los mensajes que muestran los errores en formato de lista desordenada
function validarNombreFormulario(nombreFormulario) {
    if (regexNombreFormulario.test(nombreFormulario)) {
        return true;
    } else {
        msgError += "<li> Nombre Del Producto No Válido </li>";
        return false;
    }
}

function validarPrecioFormulario(precioFormulario) {
    if (regexPrecioFormulario.test(precioFormulario)) {
        return true;
    } else {
        msgError += '<li> Precio No Válido </li>';
        return false;
    }
}

function validarDescripcionFormulario(descripcionFormulario) {
    if (regexDescripcionFormulario.test(descripcionFormulario)) {
        return true;
    } else {
        msgError += " <li> La Descripción No Es Válida </li>";
        return false;
    }
}

function validarCategoriaFormulario(categoriaFormulario) {
    if (categoriaFormulario != "value0") {
        return true;
    } else {
        msgError += "<li> Selecciona Una Categoría Válida </li>";
        return false;
    }
}