function contar() {
    var início = document.querySelector('#fini')
    var fim = document.querySelector('#ffim')
    var passo = document.querySelector('#fpas')
    var res = document.querySelector('.res')

    if (início.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        while (início.value <= fim.value) {
            res.innerHTML = início
            início++
        }
        res.innerHTML = início
    }
}