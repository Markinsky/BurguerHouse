let btnLogin = document.getElementById("btnLogin");
let txtEmail = document.getElementById("txtEmail");
let txtContra = document.getElementById("txtContra");
let alerta = document.getElementById("alertValidaciones");
let txtAlerta = document.getElementById("alertValidacionesTexto");
let msgError = "";


txtEmail.addEventListener("blur", function (event) {
    event.preventDefault();
    txtEmail.value.trim();

    txtContra.addEventListener("blur", function (event) {
        event.preventDefault();
        txtContra.value = txtContra.value.trim();
    });//txtContraA event

});//txtEmail event
//Se definen las constantes con expresiones regulares para poner parámetros de utilización sobre los campos a rellenar del formulario
const regexEmail = (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);

btnLogin.addEventListener("click", function(event){
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("usuario"));

    if (user == null) {
        Swal.fire({
            icon: 'error',
            title: 'ORAA...',
            text: 'No hay un usuario registrado en el sistema',
        });
    }
    else if (validarEmail(txtEmail.value, user.email) == true && validarContra(txtContra.value, user.contraseña) == true ) {
            Swal.fire({
                icon: 'success',
                title: 'CHULADA',
                title: 'Iniciaste Sesión'
            });//if
            setTimeout(function() {
                window.location.replace("index.html");
            }, 3000); // Espera 3 segundos antes de redirigir a la página de index.html
            
    }    else { let htmlAlert = `<ul class = listaDeErrores> Tienes errores en los siguientes campos: ${msgError}</ul>`;
         Swal.fire({
        icon: 'error',
        title: 'ORAA...',
        html: htmlAlert,
    });
    };//else
    //Funcionalidad para qe se reinicie el contador cada vez que se muestre un error en el envío del formulario de contacto
    cont = 0;
        htmlAlert = "";
        msgError = "";
});//btnRegistro evento
  

function validarEmail(email, localEmail) {
    if (email == localEmail) {
        return true;

    } else {
        msgError += "<li>Email No Registrado</li>";
        return false;
    }
}

function validarContra(contra, localContra) {
    if (contra == localContra) {
        return true;

    } else {
        msgError += " <li>  Contraseña incorrecta </li>";
        return false;
    }
}