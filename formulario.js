var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('mensaje');
var enviar = document.getElementById('enviar')
var error = document.getElementById('error')

function eviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }
    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu email');
    }
    if(asunto.value === null || asunto.value === ''){
        mensajesError.push('Ingresa el asunto');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Ingresa el mensaje');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;

}



const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method:this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    }) 
    if (response.ok)  {
       this.reset()
       alert('Gracias por contactarme, te escribiré pronto.')

    }
}