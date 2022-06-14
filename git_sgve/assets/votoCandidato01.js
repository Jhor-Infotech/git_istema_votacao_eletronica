window.addEventListener("keypress", votar);
const som = new Audio("./assets/urna01.mp3");

function votar(event) {
    if (event.key === "Enter") {

        /* Função para aguardar 2000 milissegundos (2 segundos) para computar o voto, executar o auto fechamento do popupCandidatos 
        e dar a vez para a próxima votação
        */
        setTimeout(() => {
            // Invocando as funções "computarVotosNulos() etc" da página mãe (inicioVotacao.html) para somar e acumular o voto após a confirmação "ENTER"

            opener.computarVotosCandidato01();
            opener.computarTotalVotos();
            opener.recarregarPaginaMae();
            window.close();
            // opener.recarregarPaginaMae();
            window.close();
        }, 2000);
        som.play();
    } else if (event.which == 48) {
        // Função para aguardar 500 milissegundos (1/2 segundo) para o auto fechamento do popup e o eleitor reiniciar a votação
        setTimeout(() => {
            window.close();
        }, 500);
    }

}