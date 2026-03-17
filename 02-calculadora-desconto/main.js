'use strict'

function calcularDesconto() {
    const n1 = document.getElementById('n1')
    const n2 = document.getElementById('n2')
    const resultado = document.getElementById('resultado')

    const validacao = validarNumero(n1.value, n2.value)

    if(validacao){
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
}

function removerClasse(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('baixo', 'medio', 'alto')
}

function validarVazio(item){
    const itemFormat = String(item)
    console.log(itemFormat)
    if(itemFormat.trim() === ""){
        alert('Preço ou Desconto está vazio')
        return false
    }else{
        return true
    }
}

function validarNumero(n1, n2){
    if(validarVazio(n1) && validarVazio(n2)){
        let n1Format = parseInt(n1)
        let n2Format = parseInt(n2)
        if(isNaN(n1Format) || isNaN(n2Format)){
            alert('Preço ou Desconto não é um número')
            return false
        }else{
            return true
        }
    }else{

        return false
    }
}