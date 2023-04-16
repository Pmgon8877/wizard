function agregarPersona() {
    let hayErrores = validarCampos();
    if (hayErrores === false) {
        let email = document.getElementById('#email').value;
        let nombre = document.getElementById('#name').value;
        let telefono = document.getElementById('telefono-usuario').value;
        let mensaje = document.getElementById('telefono-usuario').value;

        let tabla = document.getElementById("tabla");

    }



    }


function validarCampos() {
    let hayErrores = false;
    
    if ($('#email').val() === '') {
        $('#validarEmail').show();
        hayErrores = true;
    } else {
        $('#validarEmail').hide();
    
    if ($('#name').val() === '') {
        $('#validarName').show();
        hayErrores = true;
    } else {
        $('#validarName').hide();
    }

    
    }

    if ($('#phone').val() === '') {
        $('#validadPhone').show();
        hayErrores = true;
    } else {
        $('#validarPhone').hide();
    }

    return hayErrores;
}