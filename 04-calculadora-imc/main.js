'use strict'
const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const nome = document.getElementById('nome')
const resultado = document.getElementById('resultado')


function calcularIMC(){
    const validacaoNumero = validarNumero(peso.value, altura.value)
    const validacaoNome = validarVazio(nome.value)
    console.log(validacaoNome)

    if (!validacaoNome)
        alert('Nome está vazio')

    if(validacaoNumero && validacaoNome){
        let conta = Number(peso.value) / (Number(altura.value) ** 2)
        console.log(conta)
        
        removerClasse()
        if(conta < 18.5){
            resultado.textContent = 'Abaixo do peso'
            resultado.classList.add('abaixo')
        }else if(conta >= 18.5 && conta < 25){
            resultado.textContent = 'Peso normal'
            resultado.classList.add('normal')
        }else if(conta >= 25 && conta < 30){
            resultado.textContent = 'Sobrepeso'
            resultado.classList.add('sobrepeso')
        }else if(conta >= 30 && conta < 35){
            resultado.textContent = 'Obesidade grau I'
            resultado.classList.add('grau1')
        }else if(conta >= 35 && conta < 40){
            resultado.textContent = 'Obesidade grau II'
            resultado.classList.add('grau2')
        }else{
            resultado.textContent = 'Obesidade grau III'
            resultado.classList.add('grau3')
        }
    
        nome.focus()
    }
    
}

function removerClasse(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo', 'normal', 'sobrepeso', 'grau1', 'grau2', 'grau3')
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

function validarNumero(n1, n2){
    if(validarVazio(n1) && validarVazio(n2)){
        let n1Format = parseInt(n1)
        let n2Format = parseInt(n2)
        if(isNaN(n1Format) || isNaN(n2Format)){
            alert('Peso ou Altura não é um número')
            return false
        }else{
            return true
        }
    }else{
        alert('Peso ou altura está vazio')
        return false
    }
}
