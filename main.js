const botaoFormulario = document.querySelector('#botao-form')
const emailFormulario = document.querySelector('#email')

botaoFormulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    if (emailFormulario.value == "") {
        const elementWarningText = document.querySelector('.warning-text')
        elementWarningText.innerText = "Preencha este campo com um e-mail válido."

    } else {
        alert(`E-mail '${emailFormulario.value}' cadastrado com sucesso!`)

        const elementWarningText = document.querySelector('.warning-text')
        elementWarningText.innerText = ""
    }

    emailFormulario.value = ""
})