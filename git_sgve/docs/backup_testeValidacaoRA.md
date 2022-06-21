// Exibindo no console avariável com array de objetos (dadosAlunos)
// console.log(JSON.stringify(dadosAlunos));

// Exibindo numa variável apenas o elemento "RA"(RAs) do objeto aluno
const listaRaAlunos = dadosAlunos.map(({ RA }) => RA);
// Exibindo no console avariável ccom array contendo apenas os RAs de cada objeto aluno (dadosAlunos)
console.log(listaRaAlunos);
// console.log(listaRaAlunos[20]);

// Inicializando array vazio de dcumento validado
let eleitorValidado = [];
// persistindo os documentos validados
eleitorValidado = JSON.parse(localStorage.getItem("listaDeConferidos"));
console.log(eleitorValidado);
console.log(localStorage.listaDeConferidos);

let entradaDeRa = document.getElementById("numero-candidato");
entradaDeRa.focus();

entradaDeRa.addEventListener("keyup", validaRa);

function validaRa(event) {

    if (event.key === "Enter") {
        // Se nenhum valor for digitado, dispara um ALERT de orientação
        if (entradaDeRa.value === "") {
            alert("DIGITE UM NÚMERO VÁLIDO DE DOCUMENTO!");
            entradaDeRa.value = "";
            // Senão, se algum valor for digitado, verifica se esse valor existe na lista de documentos
        } else if (entradaDeRa.value != "") {

            let itemListaRaAlunos = listaRaAlunos.find(function(itemListaRaAlunos) {
                return itemListaRaAlunos == entradaDeRa.value;
            });
            if (eleitorValidado == null) {
                eleitorValidado = [];
            }
            let conferidos = eleitorValidado.find(function(conferidos) {
                return conferidos == entradaDeRa.value;
            });

            // Se o valor digitado existir na lista, esse valor vai para lista conferidos e não poderá ser usado novamente
            if (itemListaRaAlunos == entradaDeRa.value && conferidos != entradaDeRa.value) {
                alert("RA ENCONTRADO");

                eleitorValidado.push(itemListaRaAlunos);
                console.log(eleitorValidado);
                localStorage.listaDeConferidos = JSON.stringify(eleitorValidado);

                console.log(localStorage.listaDeConferidos);
                entradaDeRa.value = "";
            } else if (entradaDeRa.value == conferidos) {
                alert("Este documento já foi utilizado!");
                entradaDeRa.value = "";
            } else {
                alert("RA não encontrado");
                location.reload();
            }

        }

    }
}