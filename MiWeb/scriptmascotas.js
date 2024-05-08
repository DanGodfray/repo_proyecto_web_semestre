var expr

$("#formulario_contacto").validate({

    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30
        },

        email: {
            required: true,
            email: true,
            minlength: 3,
        },

        mensaje: {
            required: true,
            minlength: 3,
            maxlength: 1000
        }

    },
    messages: {
        nombre: {
            required: "Por favor, ingrese su nombre",
            minlength: "El nombre debe tener al menos 3 caracteres",
            maxlength: "El nombre debe tener máximo 30 caracteres"
        },
        email: {
            required: "Por favor, ingrese su correo",
            email: "Por favor, ingrese un correo válido",
            minlength: "El correo debe tener al menos 3 caracteres"
        },
        mensaje: {
            required: "Por favor, ingrese su mensaje",
            minlength: "El mensaje debe tener al menos 3 caracteres",
            maxlength: "El mensaje debe tener máximo 1000 caracteres"
        }

}
);

