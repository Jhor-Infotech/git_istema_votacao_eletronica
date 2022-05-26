// Vinvulando elementos HTML para manipulação no JS
const voteChapa01 = document.getElementById("vote-chapa01");
// const voteChapa01 = document.getElementById("div-chapa01");
const spanChapa01 = document.getElementById("span-chapa01");
const voteNulo = document.getElementById("vote-nulo");
// const voteNulo = document.getElementById("div-chapaNulo");
const spanNulo = document.getElementById("span-nulo");
const voteChapa02 = document.getElementById("vote-chapa02");
// const voteChapa02 = document.getElementById("div-chapa02");
const spanChapa02 = document.getElementById("span-chapa02");
// console.log(spanChapa03.innerHTML);

const totalVotosChapa01 = document.getElementById("total-votos-chapa01");
// console.log(votosComputados.innerHTML);
const totalVotosNulos = document.getElementById("total-votos-nulos");
// console.log(votosComputados.innerHTML);
const totalVotosChapa02 = document.getElementById("total-votos-chapa02");
// console.log(votosComputados.innerHTML);
const votosComputados = document.getElementById("total-votos-computados");
// console.log(votosComputados.innerHTML);

const botaoRevelarResultado = document.getElementById("button-chapa-campea");
const chapaVencedora = document.getElementById("chapa-campea");
// chapaVencedora.innerHTML = "REVELAR";

voteChapa01.addEventListener("click", confirmarVoto1);
voteNulo.addEventListener("click", confirmarVotoNulo);
voteChapa02.addEventListener("click", confirmarVoto2);
botaoRevelarResultado.addEventListener("click", exibirVencedor);

let voto = 1;
let click01 = 1;
let clickNulo = 1;
let click02 = 1;
const som = new Audio("./assets/urna01.mp3");


function confirmarVoto1() {
    spanChapa01.innerHTML = click01++;
    // totalVotosChapa01.innerHTML = spanChapa01.innerHTML;
    votosComputados.innerHTML = voto++;
    som.play();
}

function confirmarVotoNulo() {
    spanNulo.innerHTML = clickNulo++;
    som.play();
    // console.log(spanNulo.innerHTML);
    // totalVotosNulos.innerHTML = spanNulo.innerHTML;
    // votosComputados.innerHTML =voto++;
}

function confirmarVoto2() {
    spanChapa02.innerHTML = click02++;
    // console.log(spanChapa02.innerHTML);
    // totalVotosChapa02.innerHTML = spanChapa02.innerHTML;
    votosComputados.innerHTML = voto++;
    som.play();
}

function exibirVencedor() {
    let senha = prompt("Informe a senha");
    if (senha == "59212331") {
        som.play();
        totalVotosChapa01.innerHTML = spanChapa01.innerHTML;
        totalVotosNulos.innerHTML = spanNulo.innerHTML;
        totalVotosChapa02.innerHTML = spanChapa02.innerHTML;

        // votosComputados.innerHTML = parseInt(totalVotosChapa01.innerHTML) + parseInt(totalVotosChapa02.innerHTML) + parseInt(totalVotosNulos.innerHTML);
        // console.log(votosComputados.innerHTML);

        if (spanChapa01.innerHTML > spanChapa02.innerHTML) {
            chapaVencedora.innerHTML = "Chapa Campeã: OS REVOLUCIONÁRIOS";
            // botaoChapaCampea.innerHTML = "A chapa campeã é..."

        } else if (spanChapa02.innerHTML > spanChapa01.innerHTML) {
            chapaVencedora.innerHTML = "Chapa Campeã: QUATRO ELEMENTOS";
            // console.log(chapaVencedora.innerHTML = "Chapa 03");
            // botaoChapaCampea.innerHTML = "A chapa campeã é..."
        } else {
            botaoRevelarResultado.innerHTML = "REVELAR RESULTADO"
            chapaVencedora.innerHTML = "Resultados da votação: EMPATE";
            // console.log(chapaVencedora.innerHTML = "empatados!!!");
        }
    } else {
        alert("Dica: contato escolar. Tente novamente");
    }
}