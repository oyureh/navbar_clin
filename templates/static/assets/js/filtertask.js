const INPUT_BUSCA = document.getElementById('input-busca');
const TABELA_DADOS = document.getElementById('tabela-dados');

INPUT_BUSCA.addEventListener('keyup', () => {
    let expressao = INPUT_BUSCA.value.toLowerCase();

    // if (expressao.length <= 2) {
    //     // Se for, exibe todas as linhas e retorna
    //     for (let linha of TABELA_DADOS.getElementsByTagName('tr')) {
    //         linha.style.display = ''; // Mostra todas as linhas
    //     }
    //     return; // Sai da função
    // }

    // pesquisa o valor digitado dentro do id tabela dados nas linhas que estão envolvidas com <tr>
    let linhas = TABELA_DADOS.getElementsByTagName('tr');

    console.log(linhas);
    for(let posicao in linhas){
        // verificar se é um numero ou nao 
        if (true === isNaN(posicao)){
            continue;
        }

        let conteudodalinha = linhas[posicao].innerHTML.toLowerCase();

         // mostra as linhas que tem o conteudo do usuario
        if(true === conteudodalinha.includes(expressao)) { 
            linhas[posicao].style.display = '';           
        } 
         // oculta as outras linhas que não tem o que o usuario digitou
        else{
            linhas[posicao].style.display = 'none';
        }
    }
});