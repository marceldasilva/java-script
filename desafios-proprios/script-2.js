/*
function validaCadastro(nomeCliente, idade, salario, sexo, estadoCivil) {
    
}
*/

function validaNome(nomeCliente) {
    for (const letra of nomeCliente) {
        if (nomeCliente.length > 3) {
            return nomeCliente;
        } else {
            return 'Cadastro invalido.';
        }
    }
}

function validaIdade(idadeCliente) {
    if (idadeCliente < 0 && idadeCliente > 150) {
        return 'Cadastro invalido.'
    } else {
        return idadeCliente;
    }
}

console.log(validaNome('Marcel'));
console.log(validaIdade(19));