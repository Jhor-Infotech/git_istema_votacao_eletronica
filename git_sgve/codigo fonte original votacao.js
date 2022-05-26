document.addEventListener("keypress", votar);

 

const som = new Audio("./assets/urna01.mp3");

 

// Buscando elemento HTML (span-votos-computados) da página mãe (inicioVotacao.html) para manipulação no votacao.js

 

function votar(event) {

  if (event.key === "Enter") {

​    /* Função para aguardar 2000 milissegundos (2 segundos) para computar o voto (função a ser desenvolvida), o auto fechamento do popup 

​    e dar a vez para a próxima votação

​    */

​    setTimeout(() => {

​      // alert("VOTAÇÃO CONSLUIDA:  OBRIGADO");

​      votacaoWindow = window.close('./votacao.html', 'popup', "width=700, height=700, top=100, left=600, scrollbars=no");

​    }, 2000);

​    som.play();

 

​    // Essa contabilização está ocorrendo na página mãe, mas deve ocorrer aqui após o ENTER confirmando o voto

​    // Posteriormente, essa contabilização deverá se manter armazenada em localStorage

​    // votosComputados.innerHTML = numeroDeVotos++;

​    // console.log(votosComputados.innerHTML);

​    // som.play();

  } else if (event.which == 48) {

​    // Função para aguardar 500 milissegundos (1/2 segundo) para o auto fechamento do popup e o eleitor reiniciar a votação

​    setTimeout(() => {

​      // alert("VOTAÇÃO CONSLUIDA:  OBRIGADO");

​      votacaoWindow = window.close('./votacao.html', 'popup', "width=700, height=700, top=100, left=600, scrollbars=no");

​    }, 500);

​    // som.play();

  }

}

 