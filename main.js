const botaoFormulario = document.querySelector('#botao-form')
const emailFormulario = document.querySelector('#email')

botaoFormulario.addEventListener('click', (evento) => {
    evento.preventDefault()

    alert(`E-mail '${emailFormulario.value}' cadastrado com sucesso!`)

    emailFormulario.value = ""
})