const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener('click', () => {
    nomeSaida.textContent = nomeEntrada.value;
});

btnTroca.addEventListener('mouseenter', function () {
    nomeSaida.style.color = "#e7a8e8";
});

btnTroca.addEventListener('mouseout', () => {
    nomeSaida.style.color = "#000000";
});

// Trocando a cor da caixa

const btnRoxo = document.getElementById("btn_roxo");
const btnRoxo_clarinho = document.getElementById("btn_roxo_clarinho");
const btnRoxinho = document.getElementById("btn_roxinho");
const caixa = document.getElementById("caixa");

btnRoxo.addEventListener('click', () => {
    caixa.style.backgroundColor = "rgb(179, 92, 181)";
});

btnRoxinho.addEventListener('click', () => {
    caixa.style.backgroundColor = "rgb(253, 172, 252)";
});

btnRoxo_clarinho.addEventListener('click', () => {
    caixa.style.backgroundColor = "rgb(150, 107, 190)";
});

// Simulando adição e subtração de valor

const valorReal = document.getElementById("valor_real");
let contador = 0;

document.getElementById("btn_menos").addEventListener('click', () => {
    contador--;
    valorReal.textContent = contador;
})

document.getElementById("btn_mais").addEventListener('click', () => {
    contador++;
    valorReal.textContent = contador;
})

//Adicionado livros

const nomeLivro =document.getElementById("nome_livro");
const listaLivros =document.getElementById("lista_livros")

document.getElementById("adiciona_livro").addEventListener('click', ()=>{

    const novolivro = document.createElement("li");
    novolivro.textContent = nomeLivro.value;
    listaLivros.appendChild(novolivro);

    nomeLivro.value = "";

});
