'use strict'

function avaliar (){
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')

    const validacao = validarNumero(tempo.value)

    if(validacao){
        removerClasses()
        if(tempo.value < 14){
            resultado.textContent = 'Apto'
            resultado.classList.add('apto')
        }else{
            resultado.textContent = 'inapto'
            resultado.classList.add('inapto')
        }
        
        tempo.value = ''
        tempo.focus()
    }
}

function removerClasses (){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('apto', 'inapto')
}

function validarVazio(item){
    const itemFormat = String(item)
    console.log(itemFormat)
    if(itemFormat.trim() === ""){
        alert('Tempo está vazio')
        return false
    }else{
        return true
    }
}

function validarNumero(n1){
    if(validarVazio(n1)){
        let n1Format = parseInt(n1)
        if(isNaN(n1Format)){
            alert('Tempo não é um número')
            return false
        }else{
            return true
        }
    }else{

        return false
    }
}