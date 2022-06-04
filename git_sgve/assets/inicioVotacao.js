// Variável vinculando o elemento HTML "input" ao JS para manipulação
let inputNumeroCandidato = document.getElementById("numero-candidato");
inputNumeroCandidato.focus();

// Variável vinculando o elemento HTML "span-votos-computados" ao JS para manipulação
let votosComputados = document.getElementById("span-votos-computados");
let votosValidos = document.getElementById("span-votos-validos");
let votosCandidato01 = document.getElementById("span-votos-candidato01");
let votosCandidato02 = document.getElementById("span-votos-candidato02");
let votosNulos = document.getElementById("span-votos-nulos");

// Variávei auxiliares para contagem de votos
// let totalVotosCandidato01 = 0;
// let totalVotosCandidato02 = 0;
// let totalVotosNulos = 0;
// let totalVotosComputados = 0;
// let totalVotosValidos = 0;

//.......................................................................................

// Capturando evento de teclado para manipular o input
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
            // return;
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
        } else {
            alert("Digite um número válido no formato 0123");
            inputNumeroCandidato.value = "";
            // return;
        }
    }
}
// .........................................................................................................

// Funções para contabilizar os votos, após a confirmação "ENTER" nas janelas filhas "popupCandidatos", e persisti-los no localStorage
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
            // Exibindo os votos computados no painel da página mãe
            votosComputados.innerHTML = "Votos computados <br> " + (localStorage.votosComputados);
            // console.log(votosComputados.innerHTML);
        }
    }
}

//.....................................................
function ComputarVotosCandidato01() {
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
    }
    if (localStorage.totalVotosValidos) {
        localStorage.totalVotosValidos = (Number(localStorage.totalVotosValidos) + 1);
        console.log(localStorage.totalVotosValidos);
        votosValidos.innerHTML = "Total votos válidos: <br> " + (localStorage.totalVotosValidos);
        console.log(votosValidos.innerHTML);
    } else {
        localStorage.totalVotosValidos = 1;
        // Exibindo os votos computados no painel da página mãe
        votosValidos.innerHTML = "Total votos válidos: <br> " + (localStorage.totalVotosValidos);
        console.log(votosValidos.innerHTML);
    }
}

function ComputarVotosCandidato02() {
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
    }
    if (localStorage.totalVotosValidos) {
        localStorage.totalVotosValidos = (Number(localStorage.totalVotosValidos) + 1);
        console.log(localStorage.totalVotosValidos);
        votosValidos.innerHTML = "Total votos válidos: <br> " + (localStorage.totalVotosValidos);
        console.log(votosValidos.innerHTML);
    } else {
        localStorage.totalVotosValidos = 1;
        // Exibindo os votos computados no painel da página mãe
        votosValidos.innerHTML = "Total votos válidos: <br> " + (localStorage.totalVotosValidos);
        console.log(votosValidos.innerHTML);
    }
}

function ComputarVotosNulos() {
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
            // Exibindo os votos computados no painel da página mãe
            votosNulos.innerHTML = "Votos Nulos: <br> " + (localStorage.votosNulos);
        }
    }
}
/*
//................................... Esta função é desnecessária...............
function computarTotalVotosValidos() {
    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver as chaves "votosValidos" e "VotosNulos" no Storage, seus valores serão incrementados a cada chamada da função "computarTotalVotosValidos"...
        if (localStorage.totalVotosValidos) {
            // localStorage.votosValidos = Number(localStorage.votosValidos) + 1;
            localStorage.totalVotosValidos = Number(localStorage.votosCandidato01) + Number(localStorage.votosCandidato02);
            console.log(localStorage.votosValidos);
            // Exibindo os votos computados no painel da página mãe
            votosValidos.innerHTML = "Total votos válidos: <br> " + (localStorage.totalVotosValidos);
            console.log(votosValidos.innerHTML);
            // ... houver as chaves "votosValidos" e "VotosNulos" no Storage, a função "computarTotalVotosValidos" 
            // criará as chaves "VotosNulos" com valor = 0 e "votosValidos" com valor Number(localStorage.votosCandidato01) + Number(localStorage.votosCandidato02)
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.totalVotosValidos = (Number(localStorage.votosCandidato01) + Number(localStorage.votosCandidato02));
            console.log(localStorage.totalVotosValidos);
            // Exibindo os votos computados no painel da página mãe
            votosValidos.innerHTML = "Total votos válidos: <br> " + (localStorage.totalVotosValidos);
            console.log(votosValidos.innerHTML);
        }
    }
}
*/