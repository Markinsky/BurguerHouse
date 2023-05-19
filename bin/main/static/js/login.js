let btnLogin = document.getElementById("btnLogin");
let txtEmail = document.getElementById("txtEmail");
let txtPass = document.getElementById("txtContra");
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

btnLogin.addEventListener("click", function(event) {
  event.preventDefault();

  let loginData = {
    email: txtEmail.value,
    pass: txtPass.value
  };

  console.log("LOGIN " + loginData.pass);

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
  .then(function(response) {
   let sesion = localStorage.getItem("Sesion");

if(sesion == "Activa"){
Swal.fire({
                icon: 'success',
                title: 'De volon pinpón',
                title: 'Sesion activa'
            });
}else if (response.ok) {
localStorage.setItem("Sesion" , "Activa");
           Swal.fire({
                icon: 'success',
                title: 'CHULADA',
                title: 'Iniciaste Sesión'
            })
        } else {
			Swal.fire({
        icon: 'error',
        title: 'ORAA...'
    });
           
        }
    
  })
  .catch(function(error) {
    console.error('Login error:', error);
    // Handle login error
  });
});