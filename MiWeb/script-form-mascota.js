
$(document).ready(function() {
    //#id del formulario
    $('#').submit(function(event) {

        //event.preventDefault();

        //id de los campos del formulario
        var name = $('#nombre').val();
        var celular = $('#celular').val();
        var email = $('#email').val();
        var pais = $('#pais').val();
        var ciudad = $('#ciudad').val();
        var carta = $('#carta').val();
        var error = '';

        //elimina error antes de mostrar el error si se cumple la condicion
        $('.error-message').remove();
        if(name.trim() == '') {
            error += $('.separador #nombre').after('<div class="error-message">Por favor ingresa tu nombre.</div>');
        }

        if(celular.trim() == '') {
            error += $('#celular').after('<div class="error-message">Por favor ingresa tu telefono.</div>');
        }

        if(email.trim() == '') {
            error += $('#email').after('<div class="error-message">Por favor ingresa tu email.</div>');        }

        if(pais.trim() == '') {
            error += $('#pais').after('<div class="error-message">Por favor ingresa el pais.</div>');        }

        if(ciudad.trim() == '') {
            error += $('#ciudad').after('<div class="error-message">Por favor ingresa la ciudad.</div>');        }

        if(carta.trim() == '') {
            error += $('#carta').after('<div class="error-message">Por favor ingresa el texto.</div>');        }

        //si el error no esta vacio gatilla el event.preventDefault()
        if(error != '') {
            $('#mensaje-error').html(error);

            // Evita que el formulario se envíe automáticamente
            event.preventDefault();

        } else {
            
            // Aquí puedes enviar el formulario o realizar otras acciones
            $('#mensaje-error').html('');
            alert('Formulario enviado correctamente.');
            
        }
    });
});