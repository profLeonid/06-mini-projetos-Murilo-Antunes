'use strict'

function numeroMaximo(n1, n2, n){
    if(validarNumero){
        if(n >= n1 && n <= n2){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}


function validarVazio(item){
    if(String(item).trim === ""){
        return false
    }else{
        return true
    }
}

function validarNumero(n){
    if(validarVazio(n)){
        let nFormat = parseFloat(n)
        if(NaN(nFormat)){
            return false
        }else{
            return true
        }
    }else{
        return false
    }
}
