
const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener( "click", () => { 
    nomeSaida.textContent = nomeEntrada.value;
} );


btnTroca.addEventListener( "mouseenter", () => { 
    nomeSaida.style.color = " #8c9ced ";
} );


btnTroca.addEventListener( "mouseout", () => { 
    nomeSaida.color = " #000000";
} );

// Trocando a cor da caixa 

const btnVerde = document.getAnimations("btn-verde");
const btnAmarelo = document.getAnimations("btn-amarelo");
const btnAzul = document.getAnimations("btn-azul");
const caixa = document.getAnimations("caixa");

btnVerde.addEventListener("click, function()")
