/* ==================================
   FUNCIÓN: MENSAJE DE BIENVENIDA
================================== */

function mostrarMensaje() {

    alert("¡Bienvenido a la página de NotiPelis!");

}


/* ==================================
   FUNCIÓN: SERVICIOS
================================== */

function mostrarServicio(servicio) {

    alert(
        "Seleccionaste: " + servicio
    );

}

/* ==================================
   GALERÍA
================================== */

function ampliarImagen(imagen) {
    document.querySelectorAll(".galeria img").forEach(function(otraImagen) {
        otraImagen.classList.remove("seleccionada");
    });
    imagen.classList.add("seleccionada");
}
document.querySelectorAll(".galeria img").forEach(function(imagen) {
    imagen.addEventListener("click", function() {
        ampliarImagen(imagen);
    });
});



/* =========================================
   FORMULARIO CON VALIDACIONES
========================================= */

const formulario = document.getElementById("formularioContacto");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        limpiarErrores();

        let formularioValido = true;

        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const email = document.getElementById("email");
        const telefono = document.getElementById("telefono");
        const asunto = document.getElementById("asunto");
        const mensaje = document.getElementById("mensaje");

        // VALIDAR NOMBRE
        if (nombre.value.trim() === "") {
            mostrarError(nombre, "El nombre es obligatorio.");
            formularioValido = false;
        } else if (nombre.value.trim().length < 3) {
            mostrarError(nombre, "El nombre debe tener mínimo 3 caracteres.");
            formularioValido = false;
        } else if (nombre.value.trim().length > 30) {
            mostrarError(nombre, "El nombre no puede superar 30 caracteres.");
            formularioValido = false;
        } else {
            marcarCorrecto(nombre);
        }

        // VALIDAR APELLIDO
        if (apellido.value.trim() === "") {
            mostrarError(apellido, "El apellido es obligatorio.");
            formularioValido = false;
        } else if (apellido.value.trim().length < 3) {
            mostrarError(apellido, "El apellido debe tener mínimo 3 caracteres.");
            formularioValido = false;
        } else if (apellido.value.trim().length > 30) {
            mostrarError(apellido, "El apellido no puede superar 30 caracteres.");
            formularioValido = false;
        } else {
            marcarCorrecto(apellido);
        }

        // VALIDAR EMAIL
        const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.value.trim() === "") {
            mostrarError(email, "El correo electrónico es obligatorio.");
            formularioValido = false;
        } else if (!patronEmail.test(email.value.trim())) {
            mostrarError(email, "Ingresa un correo electrónico válido.");
            formularioValido = false;
        } else {
            marcarCorrecto(email);
        }

        // VALIDAR TELEFONO
        const patronTelefono = /^[0-9]+$/;

        if (telefono.value.trim() === "") {
            mostrarError(telefono, "El número de teléfono es obligatorio.");
            formularioValido = false;
        } else if (!patronTelefono.test(telefono.value.trim())) {
            mostrarError(telefono, "El teléfono solo debe contener números.");
            formularioValido = false;
        } else if (telefono.value.trim().length < 7) {
            mostrarError(telefono, "El teléfono debe tener mínimo 7 números.");
            formularioValido = false;
        } else if (telefono.value.trim().length > 10) {
            mostrarError(telefono, "El teléfono no puede superar 10 números.");
            formularioValido = false;
        } else {
            marcarCorrecto(telefono);
        }

        // VALIDAR ASUNTO
        if (asunto.value.trim() === "") {
            mostrarError(asunto, "El asunto es obligatorio.");
            formularioValido = false;
        } else if (asunto.value.trim().length < 5) {
            mostrarError(asunto, "El asunto debe tener mínimo 5 caracteres.");
            formularioValido = false;
        } else if (asunto.value.trim().length > 80) {
            mostrarError(asunto, "El asunto no puede superar 80 caracteres.");
            formularioValido = false;
        } else {
            marcarCorrecto(asunto);
        }

        // VALIDAR MENSAJE
        if (mensaje.value.trim() === "") {
            mostrarError(mensaje, "El mensaje es obligatorio.");
            formularioValido = false;
        } else if (mensaje.value.trim().length < 10) {
            mostrarError(mensaje, "El mensaje debe tener mínimo 10 caracteres.");
            formularioValido = false;
        } else if (mensaje.value.trim().length > 500) {
            mostrarError(mensaje, "El mensaje no puede superar 500 caracteres.");
            formularioValido = false;
        } else {
            marcarCorrecto(mensaje);
        }

        // RESULTADO FINAL
        if (formularioValido) {
            document.getElementById("mensajeExito").textContent =
                "✓ Formulario validado correctamente. (Este formulario es una demostración y no envía el mensaje a un servidor.)";
            formulario.reset();
        } else {
            document.getElementById("mensajeExito").textContent =
                "Por favor, corrige los campos indicados.";
        }
    });
}

/* MOSTRAR ERROR */
function mostrarError(campo, mensaje) {
    campo.classList.add("error");
    campo.classList.remove("correcto");

    const mensajeError = document.getElementById(
        "error" + capitalizar(campo.id)
    );

    if (mensajeError) mensajeError.textContent = mensaje;
}

/* MARCAR CAMPO CORRECTO */
function marcarCorrecto(campo) {
    campo.classList.add("correcto");
    campo.classList.remove("error");

    const mensajeError = document.getElementById(
        "error" + capitalizar(campo.id)
    );

    if (mensajeError) mensajeError.textContent = "";
}

/* LIMPIAR ERRORES */
function limpiarErrores() {
    const campos = document.querySelectorAll(
        "#formularioContacto input, #formularioContacto textarea"
    );

    campos.forEach(function(campo) {
        campo.classList.remove("error", "correcto");
    });

    document.querySelectorAll(".mensaje-error").forEach(function(mensaje) {
        mensaje.textContent = "";
    });
}

/* CAPITALIZAR */
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
const botonTema = document.getElementById("temaBtn");

botonTema.addEventListener("click", function() {
    const modoOscuro = document.body.classList.toggle("modo-oscuro");

    botonTema.setAttribute("aria-pressed", modoOscuro);
    botonTema.setAttribute(
        "aria-label",
        modoOscuro ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
    );

    botonTema.querySelector(".tema-toggle__texto").textContent =
        modoOscuro ? "Modo claro" : "Modo oscuro";

    botonTema.querySelector(".tema-toggle__icono").textContent =
        modoOscuro ? "☾" : "☀";
});