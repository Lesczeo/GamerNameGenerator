import * as GenButtons from "./JSmodules/GenButtons.js";

const nameBox = document.querySelector("#btn_NameInput");
const btnSegNovo = document.querySelector("#btn_FstNamSavNew");
const btnTudoNovo = document.querySelector("#btn_NotSavedNew");
const btnPriNovo = document.querySelector("#btn_SndNamSavNew");

/* Gera uma palavra, tanto adjetivo quanto substantivo,
para formar um nome; com base em uma lista dessas palavras:
function GeraPalavra(palavraBase,arrayDePalavrasIrmas) {

    // Pega uma palavra na lista com base em uma posição aleatória:
    let palavraGerada = arrayDePalavrasIrmas[Math.floor(Math.random() * arrayDePalavrasIrmas.length)];

    // Verifica-se se a palavra sorteada é a mesma da palavra base:
    while (palavraGerada == palavraBase) {
        // Se ela é, reescolhe uma palavra na lista para garantir aleatoriedade:
        palavraGerada = arrayDePalavrasIrmas[Math.floor(Math.random() * arrayDePalavrasIrmas.length)];
    }

    /* Finalmente, envia a palavra gerada para ser usada com a
    primeira letra em maiúsculo:
    return(palavraGerada.charAt(0).toUpperCase() + palavraGerada.slice(1));
}
function NomeTudoNovo() {
    let nome = nameBox.innerHTML;
    const adjAtual = nome.substring(0, nome.indexOf(' '));
    const subsAtual = nome.substring(nome.indexOf(' ') + 1);

    let adjGerado = listaDeAdjetivos[Math.floor(Math.random() * listaDeAdjetivos.length)];
    let subsGerado = listaDeSubstantivos[Math.floor(Math.random() * listaDeSubstantivos.length)];

    // pegar um adjetivo aleatório não igual ao atual:
    const primeiroNome = GeraPalavra(adjAtual,listaDeAdjetivos);

    // pegar um substantivo aleatório não igual ao atual:
    const segundoNome = GeraPalavra(subsAtual,listaDeSubstantivos);

    // formatar a string com os valores aleatórios: Adjetivo + Substantivo
    nome = `${primeiroNome} ${segundoNome}`;

    // Atualiza no documento/site o novo nome gerado:
    nameBox.innerHTML = nome;
}
function NomeSubsNovo() {
    let nome = nameBox.innerHTML;

    // conserva-se o adjetivo (a primeira palavra) do nome conforme solicitado:
    const primeiroNome = nome.substring(0, nome.indexOf(' '));

    // pega o substantivo, que mudará de valor:
    const subsAtual = nome.substring(nome.indexOf(' ') + 1);
    // o substantivo mudará mas não deverá ser igual ao atual:
    const segundoNome = GeraPalavra(subsAtual,listaDeSubstantivos);

    // formatar a string com o adjetivo conservado e o valor aleatório, respectivamente:
    nome = `${primeiroNome} ${segundoNome}`;

    // atribui a string formatada ao documento:
    nameBox.innerHTML = nome;
}
function NomeAdjsNovo() {
    let nome = nameBox.innerHTML;

    // conserva-se o substantivo (a segunda palavra) do nome conforme solicitado:
    const segundoNome = nome.substring(nome.indexOf(' ') + 1);

    // pega o adjetivo, que mudará de valor:
    const adjAtual = nome.substring(0, nome.indexOf(' '));
    // o adjetivo mudará mas não deverá ser igual ao atual:
    const primeiroNome = GeraPalavra(adjAtual,listaDeAdjetivos);

    // formatar a string com o valor aleatório e o substantivo conservado, respectivamente:
    nome = `${primeiroNome} ${segundoNome}`;

    // atribui a string formatada ao documento:
    nameBox.innerHTML = nome;
} */

/* Copia o nome gerado dentro do nameBox: */
function copyToClipboard() {

    // Copia o innerHTML do nome gerado para o clipboard pela API:
    navigator.clipboard.writeText(nameBox.innerHTML)

    // e então cria um alert indicando que o nome da caixa foi copiado:
    .then(() => {
        const success = "\u2728"; // <= emoji hexadecimal decorativo "sparkles"
        alert(`${success} Copied ${nameBox.innerHTML} to clipboard!`);
    });
}

/* Atauliza alguns focos de conteúdo da página: */
function updatePageContent() {
    // Garante que um nome seja gerado ao menos uma vez ao carregar a página:
    GenButtons.NomeTudoNovo();

    // Escreve o ano atual correspondente no fim da página:
    const contato = document.querySelector("#contact");
    const data = new Date();
    // Acrescenta o ano atual ao conteúdo do contato:
    contato.innerHTML = contato.innerHTML+` - ${data.getFullYear()}`;
    
    // Atualiza o título da página com o nome real do projeto:
    document.title = "Gamer Name Generator";
}

// Associando eventos aos elementos HTML:
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