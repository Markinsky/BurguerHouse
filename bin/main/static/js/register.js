let btnRegistro = document.getElementById("btnRegistro");
let txtNombre = document.getElementById("txtNombre");
let txtNumero = document.getElementById("txtNumero");
let txtEmail = document.getElementById("txtEmail");
let txtContraA = document.getElementById("txtContraA");
let txtContraB = document.getElementById("txtContraB");
let alerta = document.getElementById("alertValidaciones");
let txtAlerta = document.getElementById("alertValidacionesTexto");
let msgError = "";

txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value.trim();

    txtEmail.addEventListener("blur", function (event) {
        event.preventDefault();
        txtEmail.value = txtEmail.value.trim();
    });

    txtNumero.addEventListener("blur", function (event) {
        event.preventDefault();
        txtNumero.value = txtNumero.value.trim();
    });

    txtContraA.addEventListener("blur", function (event) {
        event.preventDefault();
        txtContraA.value = txtContraA.value.trim();
    });

    txtContraB.addEventListener("blur", function (event) {
        event.preventDefault();
        txtContraB.value = txtContraB.value.trim();
    });
});
//Se definen las constantes con expresiones regulares para poner parámetros de utilización sobre los campos a rellenar del formulario
const regexName = (/^[A-Za-záéíóúÁÉÍÓÚÑñ\s]{3,}$/);
const regexEmail = (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
const regexTelefono = (/^[1-9\s]{1}[1-9\s]{1}[0-9\s]{8}$/);

btnRegistro.addEventListener("click", function(event){
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

    if (validarTelefono(txtNumero.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarContraA(txtContraA.value)) {

    } else {
        console.log(msgError);
        cont += 1;
    }

    if (validarContraB(txtContraB.value, txtContraA.value)) {

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
    }else{
        Swal.fire({
            icon: 'success',
            title: 'ORAA...',
            title: 'Tú usuario ha sido guardado'
        });
        let usuario = {
            nombre: txtNombre.value,
            numero: txtNumero.value,
            email: txtEmail.value,
            contraseña: txtContraA.value
        }

        localStorage.setItem("usuario", JSON.stringify(usuario));
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
function validarContraA(contraA) {
    if (contraA.length >= 8) {
        return true;

    } else {
        msgError += " <li>  Contraseña No Válida, necesitas al menos 8 caracteres </li>";
        return false;
    }
}
function validarContraB(contraA, contraB) {
    if (contraA == contraB) {
        return true;
    } else {
        msgError += "<li> Contraseña no coincide </li>";
        return false;
    }
}
