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
            votosCandidato02.innerHTML = "Chicó: <br> " + (localStorage.votosCandidato02);
            console.log(votosCandidato02.innerHTML);
            // ... Senão houver a chave "votosComputados" no Storage, a função "computarTotalVotos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosCandidato02 = 1;
            console.log(localStorage.votosCandidato02);
            // Exibindo os votos computados no painel da página mãe
            votosCandidato02.innerHTML = "Chicó: <br> " + (localStorage.votosCandidato02);
            console.log(votosCandidato02.innerHTML);
        }
    }
}

function ComputarVotosNulos() {
    // totalVotosNulos++;
    // votosNulos.innerHTML = "VOTOS NULOS: <br> " + (totalVotosNulos) + " votos";
    // // console.log(votosNulos.innerHTML);

    // ...........................................................................

    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver a chave "votosComputados" no Storage, seu valor será incrementado a cada chamada da função "computarTotalVotos"...
        if (localStorage.votosNulos) {
            localStorage.votosNulos = Number(localStorage.votosNulos) + 1;
            console.log(localStorage.votosNulos);
            // Exibindo os votos computados no painel da página mãe
            votosNulos.innerHTML = "Votos Nulos: <br> " + (localStorage.votosNulos);
            console.log(votosNulos.innerHTML);
            // ... Senão houver a chave "votosComputados" no Storage, a função "computarTotalVotos" criará a chave com valor 1 
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosNulos = 1;
            console.log(localStorage.votosNulos);
            // Exibindo os votos computados no painel da página mãe
            votosNulos.innerHTML = "Votos Nulos: <br> " + (localStorage.votosNulos);
            console.log(votosNulos.innerHTML);
        }
    }
}

function computarTotalVotosValidos() {
    // votosValidos.innerHTML = "VOTOS VÁLIDOS: <BR>" + ((totalVotosCandidato01) + (totalVotosCandidato02)) + " votos ";
    // console.log(votosValidos.innerHTML);

    // ...........................................................................

    // Se o browser suportar webStorage (local Storage e Session Storage), execute os comandos seguintes
    if (typeof(Storage) != "undefined") {
        // Se houver as chaves "votosValidos" e "VotosNulos" no Storage, seus valores serão incrementados a cada chamada da função "computarTotalVotosValidos"...
        if (localStorage.votosValidos && localStorage.votosNulos) {
            // localStorage.votosValidos = Number(localStorage.votosValidos) + 1;
            localStorage.votosValidos = (Number(localStorage.votosComputados) - Number(localStorage.votosNulos));
            console.log(localStorage.votosValidos);
            // Exibindo os votos computados no painel da página mãe
            votosValidos.innerHTML = "Total votos válidos: <br> " + (localStorage.votosValidos);
            console.log(votosValidos.innerHTML);
            // ... houver as chaves "votosValidos" e "VotosNulos" no Storage, a função "computarTotalVotosValidos" 
            // criará as chaves "VotosNulos" com valor = 0 e "votosValidos" com valor "(Number(localStorage.votosComputados) - Number(localStorage.votosNulos));"
            // a ser incrementado a cada chamada da função "computarTotalVotos"
        } else {
            localStorage.votosNulos = 0;
            localStorage.votosValidos = (Number(localStorage.votosComputados) - Number(localStorage.votosNulos));
            // localStorage.votosValidos = (Number(localStorage.votosComputados) - Number(localStorage.votosNulos));
            // localStorage.votosValidos = Number(localStorage.votosComputados);            
            console.log(Number(localStorage.votosValidos));
            // Exibindo os votos computados no painel da página mãe
            votosValidos.innerHTML = "Total votos válidos: <br> " + (Number(localStorage.votosValidos));
            console.log(votosValidos.innerHTML);
        }
    }
}