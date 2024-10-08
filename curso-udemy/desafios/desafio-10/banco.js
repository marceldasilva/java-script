import Cliente from "./cliente.js";

const nomeCliente = document.querySelector("#nomeCliente");
const sobrenomeCliente = document.querySelector("#sobrenomeCliente");
const idadeCliente = document.querySelector("#idadeCliente");
const valorEmprestimo = document.querySelector("#emprestimoCliente");
const anosEmprestimo = document.querySelector("#anosEmprestimo");
const avalistasCliente = document.querySelector("#avalistasDoCliente");
const botaoAddEmprestimo = document.querySelector("#botaoEmprestimo");
const botaoLimpar = document.querySelector("#botaoLimpar");
const botaoCalculaTaxa = document.querySelector("#botaoCalculaTaxa");

window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        geraCliente();
    }
})
botaoAddEmprestimo.addEventListener('click', () => geraCliente());
botaoLimpar.addEventListener('click', () => limpaDados());
botaoCalculaTaxa.addEventListener('click', () => calculaTaxaDeJuros());

function geraCliente() {
    let cliente = new Cliente(nomeCliente.value, sobrenomeCliente.value, Number(idadeCliente.value), Number(valorEmprestimo.value), Number(anosEmprestimo.value), avalistasCliente.value);
    return adicionaCliente(cliente);
    
}

function adicionaCliente(cliente) {
    exibeDados(cliente);
    calculaTaxaDeJuros(cliente);
}

function exibeDados(cliente) {
    console.log(cliente);
}

function limpaDados() {
    nomeCliente.value = "";
    sobrenomeCliente.value = "";
    idadeCliente.value = "";
    valorEmprestimo.value = "";
    anosEmprestimo.value = "";
    avalistasCliente.value = "";
}

function calculaTaxaDeJuros(cliente) {
    console.log(cliente.taxarCliente(Number(idadeCliente.value)));
}