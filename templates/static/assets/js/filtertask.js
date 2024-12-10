
function filtrarTabela() {
    const modalidade = document.getElementById("select-modalidade").value;
    const unidade = document.getElementById("select-unidade").value;
    const linhasExibir = parseInt(document.getElementById("linhas").value) || 0;
    const linhasTabela = document.querySelectorAll("#tabela-dados tr");


    linhasTabela.forEach((linha, index) => {
        const modalidadeLinha = linha.cells[3]?.innerText; // Modalidade do exame
        const unidadeLinha = linha.cells[8]?.innerText; // Instituição

        const exibirPorFiltro = (!modalidade || modalidade === modalidadeLinha) &&
                                (!unidade || unidade === unidadeLinha);

        const exibirPorQuantidade = linhasExibir === 0 || index < linhasExibir;

        linha.style.display = exibirPorFiltro && exibirPorQuantidade ? "" : "none";
    });
}

// Função para limpar os filtros e exibir todos os registros
function limparFiltros() {
    document.getElementById("select-modalidade").selectedIndex = 0;
    document.getElementById("select-unidade").selectedIndex = 0;
    document.getElementById("linhas").value = "";

    const linhasTabela = document.querySelectorAll("#tabela-dados tr");
    linhasTabela.forEach((linha) => {
        linha.style.display = "";
    });
}

// Adicionar evento ao botão "Pesquisar"
document.addEventListener("DOMContentLoaded", () => {
    const botaoPesquisar = document.querySelector("btn-pesquisar");
    const botaoLimpar = document.querySelectorAll("btn-limpar")[1];

    botaoPesquisar.addEventListener("click", (e) => {
        e.preventDefault(); 
        filtrarTabela();
    });


    botaoLimpar.addEventListener("click", (e) => {
        e.preventDefault(); 
        limparFiltros(); 
    });
});
