'use strict'

function calcularDesconto() {
    const n1 = document.getElementById('n1')
    const n2 = document.getElementById('n2')
    const resultado = document.getElementById('resultado')

    console.log(n1.value)
    console.log(n2.value)

    resultado.value = n1.value - ((n1.value * 100) / n2.value )

    console.log(resultado.value)
}