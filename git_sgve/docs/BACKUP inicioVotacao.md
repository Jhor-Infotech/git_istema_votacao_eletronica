## BACKUP inicioVotacao.js

 

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

let totalVotosComputados = 1;

let totalVotosValidos = 1;

let totalVotosCandidato01 = 1;

let totalVotosCandidato02 = 1;

let totalVotosNulos = 1;

 

//.......................................................................................

 

// Capturando evento de teclado para manipular o input

inputNumeroCandidato.addEventListener("keyup", votar);

// Função de processamento, computaçãodo e registro do voto em localStorage

function votar(event) {

  if (event.key === "Enter") {

​    // Exibindo no console o valor digitado no inputNumeroCandidato

​    // console.log(inputNumeroCandidato.value);

​    // Verificando a entrada inputNumeroCandidato

​    if (inputNumeroCandidato.value === "") {

​      // Este ALERT pode ser substituido por um popup também

​      alert("Digite um número válido!");

​      inputNumeroCandidato.value = "";

​      return;

​    } else if (inputNumeroCandidato.value == parseInt(01)) {

​      popupCandidatos(01);

​      inputNumeroCandidato.value = "";

​      return;

​    } else if (inputNumeroCandidato.value == parseInt(02)) {

​      popupCandidatos(02);

​      inputNumeroCandidato.value = "";

​      return;

​    } else if (inputNumeroCandidato.value == parseInt(00)) {

​      popupCandidatos(00);

​      inputNumeroCandidato.value = "";

​      return;

​    } else {

​      alert("Digite um número válido no formato 0123");

​      inputNumeroCandidato.value = "";

​      return;

​    }

  }

}

 

function popupCandidatos(numCandidato) {

  if (numCandidato == 01) {

​    candidato01 = window.open('./candidato01.html', 'popup', "width=700, height=700, top=100, left=600, scrollbars=no");

  } else if (numCandidato == 02) {

​    candidato02 = window.open('./candidato02.html', 'popup', "width=700, height=700, top=100, left=600, scrollbars=no");

  } else if (numCandidato == 00) {

​    votosNulos = window.open('./votoNulo.html', 'popup', "width=700, height=700, top=100, left=600, scrollbars=no");

  }

}

 

// Função para somar e acumular o voto após a confirmação "ENTER" na janela filha "popupCandidatos"

function computarVotos(teste) {

  /* Essa contabilização deverá se manter armazenada em localStorage - A SER IMPLEMENTADA - 

​    para não se apagar com atualizções acidentais da página mãe

​    Além disso, ao final da votação deverá aparecer o número de votos válidos e o de votos nulos

  */

  votosComputados.innerHTML = (totalVotosComputados++) + "<br> votos computados";

  console.log(votosComputados.innerHTML);

 

  // votosValidos.innerHTML = (totalVotosCandidato01 + totalVotosCandidato02) + "<br> votos válidos";

  // console.log(votosValidos.innerHTML)

  // votosCandidato01.innerHTML = (totalVotosComputados++) + "<br> votos computados";

  // console.log(votosCandidato01.innerHTML)

  // votosCandidato02.innerHTML = (totalVotosComputados++) + "<br> votos computados";

  // console.log(votosCandidato02.innerHTML)

  // votosNulos.innerHTML = (totalVotosComputados++) + "<br> votos computados";

  // console.log(votosNulos.innerHTML)

  // console.log(votosComputados.innerHTML);

}

 