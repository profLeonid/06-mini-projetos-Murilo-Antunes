'use strict'
const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const resultado = document.getElementById('resultado')

function calcularIMC(){
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
}

function removerClasse(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo', 'normal', 'sobrepeso', 'grau1', 'grau2', 'grau3')
}