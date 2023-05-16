   
// Injeção de dados por importação de módulos:
import { adjetivos as listaDeAdjetivos, substantivos as listaDeSubstantivos } from "./GenWords.js";
import { SalvaNomeNoHistorico } from "./NameHistory.js";

const nameBox = document.querySelector("#btn_NameInput");

export function NomeTudoNovo() {

    // Pega as palavras que comporam o nome atual:
    let nome = nameBox.value;
    const adjAtual = nome.substring(0, nome.indexOf(' '));
    const subsAtual = nome.substring(nome.indexOf(' ') + 1);

    SalvaNomeNoHistorico();

    // escolhe novas palavras, não iguais às atuais:
    const primeiroNome = GeraPalavra(adjAtual,listaDeAdjetivos);
    const segundoNome = GeraPalavra(subsAtual,listaDeSubstantivos);

    // formata a string com o adjetivo e substantivo gerado:
    nome = `${primeiroNome} ${segundoNome}`;

    // Atualiza o nome atual com o novo nome gerado no document:
    SetNome(nome,nameBox);
}

export function NomeSubsNovo() {

    // Pega as palavras que comporam o nome atual:
    let nome = nameBox.value;
    // conserva-se o adjetivo (a primeira palavra) do nome conforme solicitado:
    const primeiroNome = nome.substring(0, nome.indexOf(' '));
    // pega o substantivo, que mudará de valor:
    const subsAtual = nome.substring(nome.indexOf(' ') + 1);

    SalvaNomeNoHistorico();

    // o substantivo mudará mas não deverá ser igual ao atual:
    const segundoNome = GeraPalavra(subsAtual,listaDeSubstantivos);

    // formata a string só com o substantivo gerado:
    nome = `${primeiroNome} ${segundoNome}`;

    // atribui a string formatada ao documento:
    SetNome(nome,nameBox);
}

export function NomeAdjsNovo() {

    // Pega as palavras que comporam o nome atual:
    let nome = nameBox.value;
    // conserva-se o substantivo (a segunda palavra) do nome conforme solicitado:
    const segundoNome = nome.substring(nome.indexOf(' ') + 1);
    // pega o adjetivo, que mudará de valor:
    const adjAtual = nome.substring(0, nome.indexOf(' '));

    SalvaNomeNoHistorico();

    // o adjetivo mudará mas não deverá ser igual ao atual:
    const primeiroNome = GeraPalavra(adjAtual,listaDeAdjetivos);

    // formatar a string com o valor aleatório e o substantivo conservado, respectivamente:
    nome = `${primeiroNome} ${segundoNome}`;

    // atribui a string formatada ao documento:
    SetNome(nome,nameBox);
}

// Funções MISCESLÂNEAS:
/* Essa função deve ser idêntica à qual faz um nome novo, mas
não considera conteúdo de palavras anteriores. É usado ao carregar
a página (Confira o javascript Index!) */
export function Primo_NomeTudoNovo() {
    // escolhe palavras, não considerando o que existe:
    const primeiroNome = GeraPalavra("",listaDeAdjetivos);
    const segundoNome = GeraPalavra("",listaDeSubstantivos);

    // Atualiza o document com o nome grrado:
    SetNome(`${primeiroNome} ${segundoNome}`,nameBox);
}

/* Gera uma palavra, tanto adjetivo quanto substantivo,
para formar um nome; com base em uma lista dessas palavras: */
function GeraPalavra(palavraBase,arrayDePalavrasIrmas) {

    // garante uma palavra base para comparação, se inexistente:
    const pB = palavraBase ? palavraBase : "";

    // Pega uma palavra na lista com base em uma posição aleatória:
    let palavraGerada = arrayDePalavrasIrmas[Math.floor(Math.random() * arrayDePalavrasIrmas.length)];

    // Verifica-se se a palavra sorteada é a mesma da palavra base:
    while (palavraGerada == pB) {
        // Se ela é, reescolhe uma palavra na lista para garantir aleatoriedade:
        palavraGerada = arrayDePalavrasIrmas[Math.floor(Math.random() * arrayDePalavrasIrmas.length)];
    }

    /* Finalmente, envia a palavra gerada para ser usada com a
    primeira letra em maiúsculo: */
    return(palavraGerada.charAt(0).toUpperCase() + palavraGerada.slice(1));
}

/* Atualiza o conteúdo do elemento com o nome gerado. Utiliza o
value invés do innerhtml para segurança na geração de novos nomes: */
function SetNome(fraseNome,elemento) {
    elemento.value = fraseNome;
    elemento.innerHTML = elemento.value;
}