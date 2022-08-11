function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validacion(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var terminos = document.getElementById('terminos').value;
    
    if(nombre !== '' && apellido !== '' && email!== '' && password1 !== '' && password2 !== '' && password1 === password2 && terminos.checked ){
         showAlertSuccess()
    } else {
        showAlertError()
    }
    };
