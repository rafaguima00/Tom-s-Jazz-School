const botaoFormulario = document.querySelector('#botao-form')
const emailFormulario = document.querySelector('#email')
const elementWarningText = document.querySelector('.warning-text')

botaoFormulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    if (emailFormulario.value == "") {
        elementWarningText.innerText = "Preencha este campo com um e-mail válido."

    } else {
        alert(`E-mail '${emailFormulario.value}' cadastrado com sucesso!`)
        elementWarningText.innerText = ""
    }

    emailFormulario.value = ""
})