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
let totalVotosCandidato01 = 0;
let totalVotosCandidato02 = 0;
let totalVotosNulos = 0;
let totalVotosComputados = 0;
let totalVotosValidos = 0;

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
/* Essas contabilizações deverão se manter armazenadas em localStorage - A SER IMPLEMENTADA -
   para não se apagar com atualizações acidentais da página mãe
   Além disso, ao final da votação deverá aparecer o número de votos válidos e o de votos nulos
*/
// .........................................................................................................

// Função para somar e acumular o voto após a confirmação "ENTER" nas janelas filhas "popupCandidatos" e armazenar no localStorage
function computarTotalVotos() {
    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver a chave "votosComputados" no Storage, seu valor será incrementado a cada chamada da função "computarTotalVotos"...
        if (localStorage.votosComputados) {
            localStorage.votosComputados = Number(localStorage.votosComputados) + 1;
            console.log(localStorage.votosComputados);
            // Exibindo os votos computados no painel da página mãe
            votosComputados.innerHTML = "Votos computados <br> " + (localStorage.votosComputados);
            console.log(votosComputados.innerHTML);
            // ... Senão houver a chave "votosComputados" no Storage, a função "computarTotalVotos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosComputados = 1;
            console.log(localStorage.votosComputados);
            // Exibindo os votos computados no painel da página mãe
            votosComputados.innerHTML = "Votos computados <br> " + (localStorage.votosComputados);
            console.log(votosComputados.innerHTML);
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
            console.log(votosCandidato01.innerHTML);
            // ... Senão houver a chave "votosComputados" no Storage, a função "computarTotalVotos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosCandidato01 = 1;
            console.log(localStorage.votosCandidato01);
            // Exibindo os votos computados no painel da página mãe
            votosCandidato01.innerHTML = "João Grilo: <br> " + (localStorage.votosCandidato01);
            console.log(votosCandidato01.innerHTML);
        }
    }

}

function ComputarVotosCandidato02() {
    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver a chave "votosComputados" no Storage, seu valor será incrementado a cada chamada da função "computarTotalVotos"...
        if (localStorage.votosCandidato02) {
            localStorage.votosCandidato02 = Number(localStorage.votosCandidato02) + 1;
            console.log(localStorage.votosCandidato02);
            // Exibindo os votos computados no painel da página mãe
            votosCandidato02.innerHTML = "João Grilo: <br> " + (localStorage.votosCandidato02);
            console.log(votosCandidato02.innerHTML);
            // ... Senão houver a chave "votosComputados" no Storage, a função "computarTotalVotos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosCandidato02 = 1;
            console.log(localStorage.votosCandidatos02);
            // Exibindo os votos computados no painel da página mãe
            votosCandidato02.innerHTML = "João Grilo: <br> " + (localStorage.votosCandidatos02);
            console.log(votosCandidato02.innerHTML);
        }
    }
}

function ComputarVotosNulos() {
    totalVotosNulos++;
    votosNulos.innerHTML = "VOTOS NULOS: <br> " + (totalVotosNulos) + " votos";
    // console.log(votosNulos.innerHTML);
}



function computarTotalVotosvalidos() {
    votosValidos.innerHTML = "VOTOS VÁLIDOS: <BR>" + ((totalVotosCandidato01) + (totalVotosCandidato02)) + " votos ";
    // console.log(votosValidos.innerHTML);
}