let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (isVazio(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado.`
        lista.appendChild(opt)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function isVazio(n) {
    if (Number(n.length) == 0 || Number(n) <= 1) {
        return false
    } else {
        return true
    }
}

function inLista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function analisar() {
    let res = document.querySelector('.res')
    
    if (isPrimo(num.value)) {
        res.innerHTML = `O valor ${numero} é um número primo.`
    } else {
        res.innerHTML = 'O valor digitado não é um número primo.'
    }
}

function isPrimo(n) {
    for (let numero = 2; numero <= Number(n); numero++) {
        res.innerHTML = ''
        return true
    }

    for (let divisor = 2; divisor < numero; divisor++) {
        if (divisor % numero === 0) {
            res.innerHTML = ''
            return false
        }
    }
}