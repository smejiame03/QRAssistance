// ------------LOGIN
const formulario = document.getElementById('login');
const inputs = document.querySelectorAll('#login input')// constante para almacenar todos los input del formulario. #--> porque es un id

const expresiones = {
    password: /^.{4,16}$/, // 4 a 12 digitos.
    correo: /^[a-zA-ZÀ-ÿ\s0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    contraseña: false,
    Correo: false
}

const validarFormulario = (e) => {
    //e.target.name toma el valor introducido en cada input
    switch (e.target.name) {
        case "Correo":
            validarCampo(expresiones.correo, e.target, 'Correo');
            break;
        case "Contraseña":
            validarCampo(expresiones.password, e.target, 'contraseña');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}
//validar cuando el usuario escriba y de un click afuera:
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); //cuando suelta la tecla se ejecutara el codigo
    input.addEventListener('blur', validarFormulario); //cuando se de un click afuera se ejecutara el codigo

});

//validar los campos cuando el usuario presione el boton de ingresar
// parametro e --> evento

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (campos.Correo && campos.contraseña) {
//         let data2 = new FormData(formulario);

//         fetch('DB/ingreso.php', {
//             method: 'POST',
//             body: data2
//         })

        // var usuario = "";
        // usuario = document.getElementById("respuesta").value;
        // if (usuario == "Docente") {
        //     window.location.href = "../Pages/Docente.html";
        // }
        // else {
        //     if (usuario == "Estudiante") {
        //         window.location.href = "../Pages/Estudiante.html"
        //     } else {
        //         document.querySelector(`#mensaje_no_autenticado .formulario__mensaje`).classList.add('formulario__mensaje-activo');
        //         setTimeout(() => {
        //             document.querySelector(`#mensaje_no_autenticado .formulario__mensaje`).classList.remove('formulario__mensaje-activo');
        //         }, 5000);
        //     }
        // }       
//         formulario.reset();
//         document.querySelectorAll('.grupo-correcto').forEach((icono) => {
//             icono.classList.remove('grupo-correcto');
//         });
//     } else {
//         document.querySelector(`#formulario__mensaje_login .formulario__mensaje`).classList.add('formulario__mensaje-activo');
//         setTimeout(() => {
//             document.querySelector(`#formulario__mensaje_login .formulario__mensaje`).classList.remove('formulario__mensaje-activo');
//         }, 5000);
//     }

// });

//------------REGISTRO ESTUDIANTE

const formulario1 = document.getElementById('RegistroEstudiante');
const inputs1 = document.querySelectorAll('#RegistroEstudiante input')// constante para almacenar todos los input del formulario. #--> porque es un id

const expresiones1 = {
    primernombre: /^[a-zA-ZÀ-ÿ\s]{3,12}$/,
    segundonombre: /^[a-zA-ZÀ-ÿ\s]+|(^$){3,12}$/, // Letras y espacios, pueden llevar acentos. acepta en blanco
    primerapellido: /^[a-zA-ZÀ-ÿ\s]{3,12}$/,
    segundoapellido: /^[a-zA-ZÀ-ÿ\s]{3,12}$/,
    id: /^\d{5,10}$/, // 5 a 10 numeros.
    programa: /^[a-zA-ZÀ-ÿ\s]{6,25}$/,
    correo: /^[a-zA-ZÀ-ÿ\s0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,16}$/ // 4 a 12 digitos.
}

const campos1 = {
    PrimerNombre_Estudiante: false,
    SegundoNombre_Estudiante: false,
    PrimerApellido_Estudiante: false,
    SegundoApellido_Estudiante: false,
    ID_Estudiante: false,
    Programa_Estudiante: false,
    Contraseña_Estudiante: false,
    Contraseña1_Estudiante: false,
    Correo_Estudiante: false
}

const validarFormulario1 = (e) => {
    //e.target.name toma el valor introducido en cada input
    switch (e.target.name) {
        case "PrimerNombre_Estudiante":
            validarCampo1(expresiones1.primernombre, e.target, 'PrimerNombre_Estudiante');
            break;
        case "SegundoNombre_Estudiante":
            validarCampo1(expresiones1.segundonombre, e.target, 'SegundoNombre_Estudiante');
            break;
        case "PrimerApellido_Estudiante":
            validarCampo1(expresiones1.primerapellido, e.target, 'PrimerApellido_Estudiante');
            break;
        case "SegundoApellido_Estudiante":
            validarCampo1(expresiones1.segundoapellido, e.target, 'SegundoApellido_Estudiante');
            break;
        case "ID_Estudiante":
            validarCampo1(expresiones1.id, e.target, 'ID_Estudiante');
            break;
        case "Programa_Estudiante":
            validarCampo1(expresiones1.programa, e.target, 'Programa_Estudiante');
            break;
        case "Correo_Estudiante":
            validarCampo1(expresiones1.correo, e.target, 'Correo_Estudiante');
            break;
        case "Contraseña_Estudiante":
            validarCampo1(expresiones1.password, e.target, 'Contraseña_Estudiante');
            Validarcontraseña1();
            break;
        case "Contraseña1_Estudiante":
            validarCampo1(expresiones1.password, e.target, 'Contraseña1_Estudiante');
            Validarcontraseña1();
            break;
    }
}

const validarCampo1 = (expresion1, input, campo) => {
    if (expresion1.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos1[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos1[campo] = false;
    }
}

const Validarcontraseña1 = () => {
    const inputPassword1 = document.getElementById('Contraseña_Estudiante');
    const inputPassword2 = document.getElementById('Contraseña1_Estudiante');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo_Contraseña1_Estudiante`).classList.add('grupo-incorrecto');
        document.getElementById(`grupo_Contraseña1_Estudiante`).classList.remove('grupo-correcto');
        document.querySelector(`#grupo_Contraseña1_Estudiante i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_Contraseña1_Estudiante i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_Contraseña1_Estudiante .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos1['Contraseña1_Estudiante'] = false;
    } else {
        document.getElementById(`grupo_Contraseña1_Estudiante`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo_Contraseña1_Estudiante`).classList.add('grupo-correcto');
        document.querySelector(`#grupo_Contraseña1_Estudiante i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_Contraseña1_Estudiante i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_Contraseña1_Estudiante .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos1['Contraseña1_Estudiante'] = true;
    }
}
//validar cuando el usuario escriba y de un click afuera:
inputs1.forEach((input) => {
    input.addEventListener('keyup', validarFormulario1); //cuando suelta la tecla se ejecutara el codigo
    input.addEventListener('blur', validarFormulario1); //cuando se de un click afuera se ejecutara el codigo

});

//validar los campos cuando el usuario presione el boton de ingresar
//parametro e --> evento
    formulario1.addEventListener('submit', (e) => {
        e.preventDefault();
        if (campos1.PrimerNombre_Estudiante && campos1.SegundoNombre_Estudiante && campos1.PrimerApellido_Estudiante && campos1.SegundoApellido_Estudiante && campos1.ID_Estudiante && campos1.Programa_Estudiante && campos1.Contraseña_Estudiante && campos1.Contraseña1_Estudiante && campos1.Correo_Estudiante) {
            let data = new FormData(formulario1);

            fetch('DB/dbEstudiante.php', {
                method: 'POST',
                body: data
            })
            formulario1.reset();
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            // eliminar el mensaje después de 5 seg
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);

            document.querySelectorAll('.grupo-correcto').forEach((icono) => {
                icono.classList.remove('grupo-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            }, 5000);
        }
    });

//------------REGISTRO DOCENTE

const formulario2 = document.getElementById('RegistroDocente');
const inputs2 = document.querySelectorAll('#RegistroDocente input')// constante para almacenar todos los input del formulario. #--> porque es un id

const expresiones2 = {
    primernombre: /^[a-zA-ZÀ-ÿ\s]{3,12}$/,
    segundonombre: /^[a-zA-ZÀ-ÿ\s]+|(^$){3,12}$/, // Letras y espacios, pueden llevar acentos.
    primerapellido: /^[a-zA-ZÀ-ÿ\s]{3,12}$/,
    segundoapellido: /^[a-zA-ZÀ-ÿ\s]{3,12}$/,
    id: /^\d{5,10}$/, // 5 a 10 numeros.
    asignaturas: /^[a-zA-ZÀ-ÿ\s]{6,25}$/,
    correo: /^[a-zA-ZÀ-ÿ\s0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,16}$/ // 4 a 12 digitos.
}

const campos2 = {
    PrimerNombre_Docente: false,
    SegundoNombre_Docente: false,
    PrimerApellido_Docente: false,
    SegundoApellido_Docente: false,
    ID_Docente: false,
    Asignaturas_Docente: false,
    Correo_Docente: false,
    Contraseña_Docente: false,
    Contraseña1_Docente: false
}

const validarFormulario2 = (e) => {
    //e.target.name toma el valor introducido en cada input
    switch (e.target.name) {
        case "PrimerNombre_Docente":
            validarCampo2(expresiones2.primernombre, e.target, 'PrimerNombre_Docente');
            break;
        case "SegundoNombre_Docente":
            validarCampo2(expresiones2.segundonombre, e.target, 'SegundoNombre_Docente');
            break;
        case "PrimerApellido_Docente":
            validarCampo2(expresiones2.primerapellido, e.target, 'PrimerApellido_Docente');
            break;
        case "SegundoApellido_Docente":
            validarCampo2(expresiones2.segundoapellido, e.target, 'SegundoApellido_Docente');
            break;
        case "ID_Docente":
            validarCampo2(expresiones2.id, e.target, 'ID_Docente');
            break;
        case "Asignaturas_Docente":
            validarCampo2(expresiones2.asignaturas, e.target, 'Asignaturas_Docente');
            break;
        case "Correo_Docente":
            validarCampo2(expresiones2.correo, e.target, 'Correo_Docente');
            break;
        case "Contraseña_Docente":
            validarCampo2(expresiones2.password, e.target, 'Contraseña_Docente');
            Validarcontraseña2();
            break;
        case "Contraseña1_Docente":
            validarCampo2(expresiones2.password, e.target, 'Contraseña1_Docente');
            Validarcontraseña2();
            break;
    }
}

const validarCampo2 = (expresion2, input, campo) => {
    if (expresion2.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos2[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos2[campo] = false;
    }
}

const Validarcontraseña2 = () => {
    const inputPassword1 = document.getElementById('Contraseña_Docente');
    const inputPassword2 = document.getElementById('Contraseña1_Docente');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo_Contraseña1_Docente`).classList.add('grupo-incorrecto');
        document.getElementById(`grupo_Contraseña1_Docente`).classList.remove('grupo-correcto');
        document.querySelector(`#grupo_Contraseña1_Docente i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_Contraseña1_Docente i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_Contraseña1_Docente .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos2['Contraseña1_Docente'] = false;
    } else {
        document.getElementById(`grupo_Contraseña1_Docente`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo_Contraseña1_Docente`).classList.add('grupo-correcto');
        document.querySelector(`#grupo_Contraseña1_Docente i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_Contraseña1_Docente i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_Contraseña1_Docente .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos2['Contraseña1_Docente'] = true;
    }
}
//validar cuando el usuario escriba y de un click afuera:
inputs2.forEach((input) => {
    input.addEventListener('keyup', validarFormulario2); //cuando suelta la tecla se ejecutara el codigo
    input.addEventListener('blur', validarFormulario2); //cuando se de un click afuera se ejecutara el codigo

});

//validar los campos cuando el usuario presione el boton de ingresar
//parametro e --> evento
formulario2.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos2.PrimerNombre_Docente && campos2.SegundoNombre_Docente && campos2.PrimerApellido_Docente && campos2.SegundoApellido_Docente && campos2.ID_Docente && campos2.Asignaturas_Docente && campos2.Contraseña_Docente && campos2.Contraseña1_Docente && campos2.Correo_Docente) {
        let data1 = new FormData(formulario2);

        fetch('DB/dbDocente.php', {
            method: 'POST',
            body: data1
        })
        formulario2.reset();
        document.querySelector(`#formulario__mensaje-exito_Doc .formulario__mensaje-exito`).classList.add('formulario__mensaje-exito-activo');
        // eliminar el mensaje después de 5 seg
        setTimeout(() => {
            document.querySelector(`#formulario__mensaje-exito_Doc .formulario__mensaje-exito`).classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.grupo-correcto').forEach((icono) => {
            icono.classList.remove('grupo-correcto');
        });
    } else {
        document.querySelector(`#formulario__mensaje_Doc .formulario__mensaje`).classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.querySelector(`#formulario__mensaje_Doc .formulario__mensaje`).classList.remove('formulario__mensaje-activo');
        }, 5000);
    }
});
