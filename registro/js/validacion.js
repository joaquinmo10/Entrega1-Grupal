function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validacion(){
    if((document.getElementById('nombre').value != ''&& document.getElementById('apellido').value != '' && document.getElementById('email').value != '' && document.getElementById('password1').value != '' && document.getElementById('password2').value != '' && document.getElementById('password1').value.length >=6 && document.getElementById('password1').value === document.getElementById('password2').value && document.getElementById('terminos').checked === true)){
        showAlertSuccess()
    } else {showAlertError()}
};

