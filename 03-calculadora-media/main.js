'use strict'
const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const n3 = document.getElementById('n3')
const resultado = document.getElementById('resultado')


function calcularMedia(){
    const validacaoNumero = validarNumero(n1.value, n2.value, n3.value)
    const validacaoMaximo = numeroMaximo(0, 10, n1.value, n2.value, n3.value)

    if(validacaoNumero && validacaoMaximo){
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
}

function removerClasse(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'reprovado', 'recuperacao')
}

function validarVazio(item){
    const itemFormat = String(item)
    console.log(itemFormat)
    if(itemFormat.trim() === ""){
        
        return false
    }else{
        return true
    }
}

function validarNumero(n1, n2, n3){
    if(validarVazio(n1) && validarVazio(n2) && validarVazio(n3)){
        let n1Format = parseInt(n1)
        let n2Format = parseInt(n2)
        let n3Format = parseInt(n3)
        if(isNaN(n1Format) || isNaN(n2Format) || isNaN(n3Format)){
            alert('Alguma nota não é um número')
            return false
        }else{
            return true
        }
    }else{
        alert('Alguma nota está vazia')
        return false
    }
}

function numeroMaximo(n1, n2, x, y, z){
    if(validarNumero(n1, n2, x)){
        if(x >= n1 && x <= n2 && y >= n1 && y <= n2 && z >= n1 && z <= n2){
            return true
        }else{
            alert('Alguma nota não está entre os números permitidos')
            return false
        }
    }else{
        return false
    }
}