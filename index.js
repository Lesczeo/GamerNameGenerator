import * as GenButtons from "./JSmodules/GenButtons.js";
import { SalvaNomeNoHistorico } from "./JSmodules/NameHistory.js";

const nameBox = document.querySelector("#btn_NameInput");
const historico = document.querySelector("#nameHistory");
const btnSegNovo = document.querySelector("#btn_FstNamSavNew");
const btnTudoNovo = document.querySelector("#btn_NotSavedNew");
const btnPriNovo = document.querySelector("#btn_SndNamSavNew");

/* Copia o nome gerado dentro do nameBox: */
function copyToClipboard() {

    // Copia o innerHTML do nome gerado para o clipboard pela API:
    navigator.clipboard.writeText(nameBox.value)

    // e então cria um alert indicando que o nome da caixa foi copiado:
    .then(() => {
        const success = "\u2728"; // <= emoji hexadecimal decorativo "sparkles"
        alert(`${success} Copied ${nameBox.value} to clipboard!`);
    });
}

// Gera campos, para que nomes gerados anteriormente possam ser reacessados:
function geraCamposNomesAntigos(minimo, maximo) {
    // Adiciona-se os campos com base em restrições:
    for(var inicio = minimo; inicio < maximo ; inicio++){
        // cria-se os campos no documento:
        const novoCampo = document.createElement("button");
        novoCampo.setAttribute("class", "buttons");
        novoCampo.classList.add("loggedName");
        /* Observe que não é possível adicionar um eventListener neste
        momento por causa do valor "..." padrão. Um evento deve ser
        adicionado somente quando o campo deixar de ter o valor padrão, ou
        seja, ser escrito com um nome significativo: */
        novoCampo.value = "...";
        novoCampo.innerHTML = novoCampo.value;

        // adiciona ao histórico como um elemento filho:
        historico.appendChild(novoCampo);
    }
}

/* Atauliza alguns focos de conteúdo da página: */
function updatePageContent() {
    /* Gera os 5 "chances" para reescolher nomes antigos no histórico.
    Os campos serão gerados inicialmente em branco: */
    geraCamposNomesAntigos(0,5);

    // Garante que um nome seja gerado ao menos uma vez ao carregar a página:
    GenButtons.Primo_NomeTudoNovo();

    // Escreve o ano atual correspondente no fim da página:
    const contato = document.querySelector("#contact");
    const data = new Date();
    // Acrescenta o ano atual ao conteúdo do contato:
    contato.innerHTML += ` - ${data.getFullYear()}`;
    
    // Atualiza o título da página com o nome real do projeto:
    document.title = "Gamer Name Generator";
}

// Associando eventos aos elementos HTML:
nameBox.addEventListener("click", copyToClipboard);
nameBox.addEventListener("click", copyToClipboard);
btnSegNovo.addEventListener("click", GenButtons.NomeSubsNovo);
btnTudoNovo.addEventListener("click", GenButtons.NomeTudoNovo);
btnPriNovo.addEventListener("click", GenButtons.NomeAdjsNovo);
// Garante que conteúdos da página sejam mais significativos ao carregar:
window.addEventListener('load', updatePageContent);

// Referências Web para mais informações:
/* 

copyToClipboard():
    1 - "https://stackoverflow.com/questions/56306153/domexception-on-calling-navigator-clipboard-readtext"

*/