const button1 = document.getElementById('verificar_correo1');
const button2 = document.getElementById('verificar_correo2');


function verificarCorreo(correo, error){
    const re = /\S+@\S+\.\S+/;
    const email1 = document.getElementById(correo).value;
    const spanError = document.getElementById(error);
    if(!re.test(email1)){
        spanError.style.display = 'block';
        spanError.innerHTML = 'Correo no válido';
        spanError.style.color = 'red';
    }
    else{
        spanError.style.display = 'none';
    }

}


button1.addEventListener('click', () => {
    verificarCorreo('ingreso_correo1', 'mensaje_error1');
});

button2.addEventListener('click', () => {
    verificarCorreo('ingreso_correo2', 'mensaje_error2');
});