//Se definen las variables totales a utilizar en este JavaScript
let txtNombre = document.getElementById("nombre");
let txtEmail = document.getElementById("email");
let txtTelefono = document.getElementById("telefono");
let txtSucursales = document.getElementById("sucursales");
let txtMensaje = document.getElementById("mensaje");
let btnContacto = document.getElementById("btnContacto");
let alerta = document.getElementById("alertValidaciones");
let txtAlerta = document.getElementById("alertValidacionesTexto");
let msgError = "";

//Listener acerca de los diferentes campos a rellenar en el formulario de contacto
txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value.trim();

    txtEmail.addEventListener("blur", function (event) {
        event.preventDefault();
        txtEmail.value = txtEmail.value.trim();
    });

    txtTelefono.addEventListener("blur", function (event) {
        event.preventDefault();
        txtTelefono.value = txtTelefono.value.trim();
    });

    txtMensaje.addEventListener("blur", function (event) {
        event.preventDefault();
        txtMensaje.value = txtMensaje.value.trim();
    });
});

//Se definen las constantes con expresiones regulares para poner parámetros de utilización sobre los campos a rellenar del formulario
const regexName = (/^[A-Za-záéíóúÁÉÍÓÚÑñ\s]{3,}$/);
const regexEmail = (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
const regexTelefono = (/^[1-9\s]{1}[1-9\s]{1}[0-9\s]{8}$/);
const regexMensaje = (/^[\s\S]{5,150}$/);

// función para validar los diferentes errores que existen en los campos del formulario y agregarlos a la variable msgError
btnContacto.addEventListener("click", function (event) {
    event.preventDefault();
    let cont = 0;

    if (validarNombre(txtNombre.value)) {


    } else {
        console.log(msgError);
        cont += 1;
    }
    if (validarEmail(txtEmail.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarTelefono(txtTelefono.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarMensaje(txtMensaje.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarSucursal(txtSucursales.value)) {

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
        let sugerencias = "Nombre: " + txtNombre.value + "\nE-mail: " + txtEmail.value + "\nTeléfono: " + txtTelefono.value + "\nSucursales: " + txtSucursales.value + "\nMensaje: " + txtMensaje.value;

        // Es donde se envía el correo mediante SMTPJS
        Email.send({
            SecureToken: "598073ae-0fff-4b3a-bc8d-3de1756015b4",
            To: 'burgershouse2023@gmail.com',
            From: "burgershouse2023@gmail.com",
            Subject: "Buzón de Quejas y Sugerencias BurgersHouse",
            Body: sugerencias,
        }).then(
            message => Swal.fire("Sugerencia enviada")
        )
    }

});
//Función para validar los datos del formulario con los mensajes que muestran los errores en formato de lista desordenada
function validarNombre(nombre) {
    if (regexName.test(nombre)) {
        return true;

    } else {
        msgError += "<li> Nombre No Válido</li>";
        return false;
    }
}

function validarEmail(email) {
    if (regexEmail.test(email)) {
        return true;


    } else {
        msgError += "<li>Email No Válido</li>";
        return false;
    }
}
function validarTelefono(telefono) {
    if (regexTelefono.test(telefono)) {
        return true;


    } else {
        msgError += '<li> Teléfono No Válido </li>';
        return false;
    }
}
function validarMensaje(mensaje) {
    if (regexMensaje.test(mensaje)) {
        return true;


    } else {
        msgError += " <li> Mensaje No Válido </li>";
        return false;
    }
}
function validarSucursal(sucursal) {
    if (sucursal != "value0") {
        return true;


    } else {
        msgError += "<li> Selecciona Una Sucursal Válida </li>";
        return false;
    }
}
