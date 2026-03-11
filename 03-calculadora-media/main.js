'use strict'
const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const n3 = document.getElementById('n3')
const resultado = document.getElementById('resultado')


function calcularMedia(){
    let conta = (Number(n1.value) + Number(n2.value) + Number(n3.value)) / 3

    removerClasse()
    if(conta >= 7){
        resultado.textContent = 'Aprovado'
        resultado.classList.add('aprovado')
    }else if(conta < 5){
        resultado.textContent = 'Reprovado'
        resultado.classList.add('reprovado')
    }else{
        resultado.textContent = 'Recuperação'
        resultado.classList.add('recuperacao')
    }

    n1.focus()
}

function removerClasse(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'reprovado', 'recuperacao')
}