'use strict'

function calcularDesconto() {
    const n1 = document.getElementById('n1')
    const n2 = document.getElementById('n2')
    const resultado = document.getElementById('resultado')

    console.log(n1.value)
    console.log(n2.value)

    let conta = n1.value - ((n1.value / 100) * n2.value)

    removerClasse()
    if(n2.value < 5){
        resultado.classList.add('baixo')
    }else if(n2.value >= 5 && n2.value< 10 ){
        resultado.classList.add('medio')
    }else{
        resultado.classList.add('alto')
    }

    resultado.textContent = conta.toFixed(2)
    n1.focus()
    console.log(resultado.value)
}

function removerClasse(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('baixo', 'medio', 'alto')
}
