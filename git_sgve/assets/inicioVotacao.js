// Variável vinculando o elemento HTML "input" ao JS para manipulação
let inputNumeroCandidato = document.getElementById("numero-candidato");
inputNumeroCandidato.focus();

// Variável vinculando o elemento HTML "span-votos-computados" ao JS para manipulação
let votosComputados = document.getElementById("span-votos-computados");
let votosValidos = document.getElementById("span-votos-validos");
let votosCandidato01 = document.getElementById("span-votos-candidato01");
let votosCandidato02 = document.getElementById("span-votos-candidato02");
let votosNulos = document.getElementById("span-votos-nulos");
let spanResultados = document.getElementById("span-resultado");
let tituloOrientacao = document.getElementById("titulo-orientacao");

const audioUrna = new Audio("./assets/urna01.mp3");
const audioErroUrna = new Audio("./assets/Erro.mp3");
const audioErroWindows = new Audio("./assets/ErroWindows.mp3");

relogio();

function relogio() {
    var data = new Date();
    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    if (hor < 10) {
        hor = "0" + hor;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (seg < 10) {
        seg = "0" + seg;
    }
    var horas = hor + ":" + min + ":" + seg;


    let relogioNaTela = document.getElementById("span-relogio").value = horas;

    if (horas === 16 + ":" + 40 + ":" + 40) {
        tituloOrientacao.textContent = "VOTAÇÃO ENCERRADA!";
        setTimeout(() => {
            encerraVotacao();
            inputNumeroCandidato.style.display = "none";
        }, 500);
    }
}
let timer = setInterval(relogio, 1000);

// // Capturando evento de teclado para manipular o input
inputNumeroCandidato.addEventListener("keyup", votar);

// Função de processamento, computaçãodo e registro do voto em localStorage
function votar(event) {

    if (event.key === "Enter") {
        // Exibindo no console o valor digitado no inputNumeroCandidato
        // console.log(inputNumeroCandidato.value);
        // Verificando a entrada inputNumeroCandidato
        if (inputNumeroCandidato.value === "") {
            // Este ALERT pode ser substituido por um popup também
            alert("Digite um número válido!");
            inputNumeroCandidato.value = "";
            // return;

        } else if (inputNumeroCandidato.value == parseInt(01)) {
            // else if (inputNumeroCandidato.value === "0001")
            window.open('./candidato01.html', 'popup', "width=700, height=700, top=100, left=600, scrollbars=no");
            inputNumeroCandidato.value = "";
        } else if (inputNumeroCandidato.value == parseInt(02)) {
            // popupCandidatos(02);
            window.open('./candidato02.html', 'popup', "width=700, height=700, top=100, left=600, scrollbars=no");
            inputNumeroCandidato.value = "";
            // return;

        } else if (inputNumeroCandidato.value == parseInt(0000)) {
            // popupCandidatos(00);
            window.open('./votoNulo.html', 'popup', "width=700, height=700, top=100, left=600, scrollbars=no");
            inputNumeroCandidato.value = "";
            // return;

        } else if (inputNumeroCandidato.value == parseInt(1010)) {
            encerraVotacao();
            inputNumeroCandidato.style.display = "none";
        } else {
            alert("Digite um número válido no formato 0123");
            inputNumeroCandidato.value = "";
            // return;
        }
    }
}
// Funções para contabilizar os votos, após a confirmação "ENTER" nas janelas filhas "popupCandidatos", e persisti-los no localStorage

function computarVotosCandidato01() {
    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver a chave "votosComputados" no Storage, seu valor será incrementado a cada chamada da função "computarTotalVotos"...
        if (localStorage.votosCandidato01) {
            localStorage.votosCandidato01 = Number(localStorage.votosCandidato01) + 1;
            console.log(localStorage.votosCandidato01);
            // Exibindo os votos computados no painel da página mãe
            votosCandidato01.innerHTML = "João Grilo: <br> " + (localStorage.votosCandidato01);
            // ... Senão houver a chave "votosComputados" no Storage, a função "computarTotalVotos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosCandidato01 = 1;
            console.log(localStorage.votosCandidato01);
            // Exibindo os votos computados no painel da página mãe
            votosCandidato01.innerHTML = "João Grilo: <br> " + (localStorage.votosCandidato01);
        }
        // // Invocando a função para computar total de votos válidos
        totalVotosValidos();
    }
}

function computarVotosCandidato02() {
    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver a chave "votosComputados" no Storage, seu valor será incrementado a cada chamada da função "computarTotalVotos"...
        if (localStorage.votosCandidato02) {
            localStorage.votosCandidato02 = Number(localStorage.votosCandidato02) + 1;
            console.log(localStorage.votosCandidato02);
            // localStorage.totalVotosValidos = localStorage.votosCandidato02;
            // Exibindo os votos computados no painel da página mãe
            votosCandidato02.innerHTML = "Chicó: <br> " + (localStorage.votosCandidato02);
            // ... Senão houver a chave "votosComputados" no Storage, a função "computarTotalVotos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosCandidato02 = 1;
            console.log(localStorage.votosCandidato02);
            // Exibindo os votos computados no painel da página mãe
            votosCandidato02.innerHTML = "Chicó: <br> " + (localStorage.votosCandidato02);
        }
        // // Invocando a função para computar total de votos válidos
        totalVotosValidos();
    }
}

function computarVotosNulos() {
    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver a chave "votosNulos" no Storage, seu valor será incrementado a cada chamada da função "computarVotosNulos"...
        if (localStorage.votosNulos) {
            localStorage.votosNulos = Number(localStorage.votosNulos) + 1;
            console.log(localStorage.votosNulos);
            // Exibindo os votos computados no painel da página mãe
            votosNulos.innerHTML = "Votos Nulos: <br> " + (localStorage.votosNulos);
            // ... Senão houver a chave "votosNulos" no Storage, a função "computarVotosNulos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarVotosNulos"
        } else {
            localStorage.votosNulos = 1;
            console.log(localStorage.votosNulos);
        }

    }
}

// Função para computar total de votos válidos
function totalVotosValidos() {
    if (localStorage.totalVotosValidos) {
        localStorage.totalVotosValidos = (Number(localStorage.totalVotosValidos) + 1);
        console.log(localStorage.totalVotosValidos);
        votosValidos.innerHTML = "Total votos válidos: <br> " + (localStorage.totalVotosValidos);
        console.log(votosValidos.innerHTML);
    } else {
        localStorage.totalVotosValidos = 1;
    }
}
// ..........................................................................................
function computarTotalVotos() {
    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver a chave "votosComputados" no Storage, seu valor será incrementado a cada chamada da função "computarTotalVotos"...
        if (localStorage.votosComputados) {
            localStorage.votosComputados = Number(localStorage.votosComputados) + 1;
            console.log(localStorage.votosComputados);
            // Exibindo os votos computados no painel da página mãe
            votosComputados.innerHTML = "Votos computados <br> " + (localStorage.votosComputados);
            // console.log(votosComputados.innerHTML);
            // ... Senão houver a chave "votosComputados" no Storage, a função "computarTotalVotos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosComputados = 1;
            console.log(localStorage.votosComputados);
            // // Exibindo os votos computados no painel da página mãe
            // votosComputados.innerHTML = "Votos computados <br> " + (localStorage.votosComputados);
            // // console.log(votosComputados.innerHTML);
        }
    }
}
// ..........................................................................................

function encerraVotacao() {

    // Exibindo os votos computados no painel da página mãe
    if (localStorage.votosComputados == null) {
        votosComputados.innerHTML = "Votos computados <br> " + Number(0);
        console.log(votosComputados.innerHTML);
    } else {
        votosComputados.innerHTML = "Votos computados <br> " + (localStorage.votosComputados);
        console.log(votosComputados.innerHTML);
    }
    //.......................................................................................
    // Exibindo os votos computados no painel da página mãe
    if (localStorage.totalVotosValidos == null) {
        votosValidos.innerHTML = "Total votos válidos: <br> " + Number(0);
        console.log(votosValidos.innerHTML);
    } else {
        votosValidos.innerHTML = "Total votos válidos: <br> " + localStorage.totalVotosValidos;
        console.log(votosValidos.innerHTML);
    }
    //.......................................................................................
    if (localStorage.votosNulos == null) {
        votosNulos.innerHTML = "Votos Nulos: <br> " + Number(0);
        console.log(votosNulos.innerHTML);
    } else {
        votosNulos.innerHTML = "Votos Nulos: <br> " + (localStorage.votosNulos);
        console.log(votosNulos.innerHTML);
    }
    //........................................................................................
    if (localStorage.votosCandidato01 == null) {
        localStorage.votosCandidato01 = Number(0);
        votosCandidato01.innerHTML = "João Grilo: <br> " + localStorage.votosCandidato01;
        console.log(votosCandidato01.innerHTML);
    } else {
        votosCandidato01.innerHTML = "João Grilo: <br> " + localStorage.votosCandidato01;
        console.log(votosCandidato01.innerHTML);
    }
    //.........................................................................................
    if (localStorage.votosCandidato02 == null) {
        localStorage.votosCandidato02 = Number(0);
        votosCandidato02.innerHTML = "Chicó: <br> " + Number(localStorage.votosCandidato02);
        console.log(votosCandidato01.innerHTML);
    } else {
        votosCandidato02.innerHTML = "Chicó: <br> " + Number(localStorage.votosCandidato02);
        console.log(votosCandidato02.innerHTML);
    }
    //Exibindo o candidato vencedor
    if (localStorage.votosCandidato01 == localStorage.votosCandidato02) {
        if (localStorage.totalVotosValidos == null) {
            localStorage.totalVotosValidos = Number(0);
            console.log(localStorage.totalVotosValidos);
        }
        spanResultados.innerHTML = "CANDIDATOS EMPATADOS COM " + Number(localStorage.totalVotosValidos / 2) + " votos para cada candidato.";
    } else if (localStorage.votosCandidato01 > localStorage.votosCandidato02) {
        spanResultados.innerHTML = "CANDIDATO VENCEDOR: <br>" + (votosCandidato01.innerHTML) + " <br> VOTOS";
        console.log(spanResultados.innerHTML);
    } else {
        spanResultados.innerHTML = "CANDIDATO VENCEDOR: <br>" + (votosCandidato02.innerHTML) + " <br> VOTOS";
        console.log(spanResultados.innerHTML);
    }

}

function recarregarPaginaMae() {
    location.reload();
}