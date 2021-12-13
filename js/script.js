const btnLançamento = document.querySelector('#lancamentos');
const btnEstoque = document.querySelector('#estoque');
const paginaPrincipal = document.querySelector('#menu');
const lancarItens = document.querySelector('#inserirItens');
const estoque = document.querySelector('#verEstoque');

const removePaginaPrincipal = () => {
    paginaPrincipal.classList.remove('pagina-principal');
    paginaPrincipal.classList.add('nao-mostrar-pagina-principal')
}

const addLancamentos = () => {
    lancarItens.classList.remove('lancar-itens');
    lancarItens.classList.add('aparecer-lancar-itens');
}

const addEstoque = () => {
    estoque.classList.remove('conferir-estoque');
    estoque.classList.add('aparecer-conferir-estoque');
}

function dinamicLançar() {
    removePaginaPrincipal();
    addLancamentos();
}

function dinamicEstoque() {
    removePaginaPrincipal();
    addEstoque();
}

btnLançamento.addEventListener('click', dinamicLançar);
btnEstoque.addEventListener('click', dinamicEstoque);