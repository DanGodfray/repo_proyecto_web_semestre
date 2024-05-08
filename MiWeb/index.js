$(document).ready(function(){
    $('#btnEnviar').click(function(){
        var nombre = $('#txtNombre').val();
        var email = $('#txtEmail').val();
        var mensaje = $('#txtMensaje').val();
        alert('Nombre: ' + nombre + '\nEmail: ' + email + '\nMensaje: ' + mensaje);
    });

});