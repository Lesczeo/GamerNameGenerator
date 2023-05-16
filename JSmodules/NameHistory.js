
const nameBox = document.querySelector("#btn_NameInput");
const historico = document.querySelector("#nameHistory");



/* Traz palavras supostamente descartadas a uma lista histórico,
que permite ao usuário volte atrás com um nome caso mude de ideia: */
export function SalvaNomeNoHistorico(){
    if (historico.hasChildNodes()) {
        let listaNomes = [...historico.children];
        const camposVazio = listaNomes.find((nome) => nome.value === "...");
        /* Se existem campos vazios na lista: */
        camposVazio? SalvaEmCampoLivre(camposVazio) : SalvaEmCampoEscrito(listaNomes);
    } else {
        console.log("histórico de nomes não tinha campos ao gerar um nome!")
    }
}

// Funções MISCESLÂNEAS:

/* function SalvaNomeNameBox(){
    Não se pode comparar da forma habitual, pois pode-se gerar um
    nome e resurgir outro em qualquer momento para o usuário. 
    if([...historico.children].find((nome) => nome.value === "...")){

    } else {}
} */ 

function SalvaEmCampoLivre(camposEscolhido){
    camposEscolhido.value = nameBox.value;
    camposEscolhido.innerHTML = camposEscolhido.value;
    camposEscolhido.addEventListener("click", () => {
        /* Rechamar a função garante que algums nomes gerados sejam logados
        no histórico, não perdendo-os; por exemplo ao gerar um nome e resurgir
        outro. Salva-se também o valor original do campo para que o campo ao
        clicar não tenha seu conteúdo alterado pela mesma função: */
        const valorCampo = camposEscolhido.value;
        SalvaNomeNoHistorico();

        // Atualiza-se definitivamente a caixa de nome gerado com os valores:
        nameBox.value = valorCampo;
        nameBox.innerHTML = nameBox.value;
    });
}

/* Essa função aciona se todos os campos do histórico estiverem escritos.
Nesse caso é necessário ter a lista dos nomes, remover o nome mais antigo
e puxar os mais novos para o lugar dos mais antigos. */ 
function SalvaEmCampoEscrito(allNomes){
    for (let i = 0; i < allNomes.length; i++) {
        // traz primeiro os nomes mais novos para as posições mais antigas:
        if (i != (allNomes.length-1)){
            allNomes[i].value = allNomes[i].nextSibling.value;
            allNomes[i].innerHTML = allNomes[i].value;
        }
        // depois traz o nome atual para a posição mais nova:
        else {
            allNomes[i].value = nameBox.value;
            allNomes[i].innerHTML = allNomes[i].value;
        }
    }
}