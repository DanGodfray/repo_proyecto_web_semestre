$(document).ready(function() {
    $('#contact-form').submit(function(event) {

        //event.preventDefault();

        var name = $('#nombre').val();
        var celular = $('#celular').val();
        var email = $('#email').val();
        var direccion = $('#direccion').val();
        //var ciudad = $('#ciudad').val();
        var carta = $('#carta').val();
        var error = '';

        $('.error-message').remove();
        if(name.trim() == '') {
            error += $('#nombre').after('<div class="error-message">Por favor ingresa tu nombre.</div>');
        }

        if(celular.trim() == '') {
            error += $('#celular').after('<div class="error-message">Por favor ingresa tu telefono.</div>');
        }

        if(email.trim() == '') {
            error += $('#email').after('<div class="error-message">Por favor ingresa tu email.</div>');        }

        if(direccion.trim() == '') {
            error += $('#direccion').after('<div class="error-message">Por favor ingresa tu direccion.</div>');        }

        /*if(ciudad.trim() == '') {
            error += $('#ciudad').after('<div class="error-message">Por favor ingresa la ciudad.</div>');        }*/

        if(carta.trim() == '') {
            error += $('#carta').after('<div class="error-message">Por favor ingresa el texto.</div>');        }

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
    