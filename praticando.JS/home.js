
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

function lancar(){
    nomeSaida.style.color = "#000000";

}
