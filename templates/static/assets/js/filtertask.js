const INPUT_BUSCA = document.getElementById('input-busca');
const SELECT_MODALIDADE = document.getElementById('select-modalidade');
const SELECT_UNIDADE = document.getElementById('select-unidade');
const START_DATE = document.getElementById('data-inicio');
const END_DATE = document.getElementById('data-fim');
const NUM_LINHAS = document.getElementById('linhas');
const EXAME_SITUACAO = document.getElementById('exame-situacao');
const MEDICO = document.getElementById('medico');
const SITUACAO_LAUDO = document.getElementById('situacao-laudo');
const VIEW_LAUDOS = document.getElementById('view_laudos');
const TABELA_DADOS = document.getElementById('tabela-dados'); 

function aplicarFiltros() {
    const expressao = INPUT_BUSCA?.value.toLowerCase() || '';
    const modalidadeSelecionada = SELECT_MODALIDADE?.value.toLowerCase() || '';
    const unidadeSelecionada = SELECT_UNIDADE?.value.toLowerCase() || '';
    const situacaoExameSelecionada = EXAME_SITUACAO?.value.toLowerCase() || '';
    const medicoSelecionado = MEDICO?.value.toLowerCase() || '';
    const situacaoLaudoSelecionada = SITUACAO_LAUDO?.value.toLowerCase() || '';

    const startDate = START_DATE?.value ? new Date(START_DATE.value) : null;
    const endDate = END_DATE?.value ? new Date(END_DATE.value) : null;

    const linhas = TABELA_DADOS?.getElementsByTagName('tr') || [];

    for (const linha of linhas) {
        const conteudoLinha = linha.textContent.toLowerCase();
        const colunaModalidade = linha.cells[3]?.textContent.toLowerCase() || '';
        const colunaUnidade = linha.cells[8]?.textContent.toLowerCase() || '';
        const colunaSituacaoExame = linha.cells[4]?.textContent.toLowerCase() || '';
        const colunaMedico = linha.cells[5]?.textContent.toLowerCase() || '';
        const colunaSituacaoLaudo = linha.cells[6]?.textContent.toLowerCase() || '';
        const dataTexto = linha.cells[1]?.textContent.trim() || '';
        const dataLinha = dataTexto ? new Date(dataTexto.split('/').reverse().join('-')) : null;

        const atendeFiltroBusca = !expressao || conteudoLinha.includes(expressao);
        const atendeFiltroSelect =
            (!modalidadeSelecionada || colunaModalidade.includes(modalidadeSelecionada)) &&
            (!unidadeSelecionada || colunaUnidade.includes(unidadeSelecionada)) &&
            (!situacaoExameSelecionada || colunaSituacaoExame.includes(situacaoExameSelecionada)) &&
            (!medicoSelecionado || colunaMedico.includes(medicoSelecionado)) &&
            (!situacaoLaudoSelecionada || colunaSituacaoLaudo.includes(situacaoLaudoSelecionada));

        const atendeFiltroData = (!startDate || startDate <= dataLinha) &&
                                 (!endDate || endDate >= dataLinha);

        if (atendeFiltroBusca && atendeFiltroSelect && atendeFiltroData) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    }

    mostrarLinhas();
}

function mostrarLinhas() {
    const numLinhas = parseInt(NUM_LINHAS?.value) || Infinity;
    const linhas = TABELA_DADOS?.getElementsByTagName('tr') || [];

    let linhasExibidas = 0;
    for (const linha of linhas) {
        if (linha.style.display !== 'none') {
            if (linhasExibidas < numLinhas) {
                linha.style.display = '';
                linhasExibidas++;
            } else {
                linha.style.display = 'none';
            }
        }
    }
}

function inicializarFiltros() {
    if (INPUT_BUSCA) INPUT_BUSCA.addEventListener('keyup', aplicarFiltros);
    if (SELECT_MODALIDADE) SELECT_MODALIDADE.addEventListener('change', aplicarFiltros);
    if (SELECT_UNIDADE) SELECT_UNIDADE.addEventListener('change', aplicarFiltros);
    if (START_DATE) START_DATE.addEventListener('change', aplicarFiltros);
    if (END_DATE) END_DATE.addEventListener('change', aplicarFiltros);
    if (NUM_LINHAS) NUM_LINHAS.addEventListener('input', aplicarFiltros);
    if (EXAME_SITUACAO) EXAME_SITUACAO.addEventListener('change', aplicarFiltros);
    if (MEDICO) MEDICO.addEventListener('change', aplicarFiltros);
    if (SITUACAO_LAUDO) SITUACAO_LAUDO.addEventListener('change', aplicarFiltros);
    if (VIEW_LAUDOS) VIEW_LAUDOS.addEventListener('change', aplicarFiltros);
}


document.addEventListener('DOMContentLoaded', () => {
    inicializarFiltros();
});

function clear() {
    document.getElementById('input-busca').value = '';  
    document.getElementById('data-inicio').value = '';  
    document.getElementById('data-fim').value = '';  
    document.getElementById('linhas').value = ''; 
  
    document.getElementById('select-modalidade').selectedIndex = 0;
    document.getElementById('select-unidade').selectedIndex = 0;
    document.getElementById('exame-situacao').selectedIndex = 0;
    document.getElementById('medico').selectedIndex = 0;
    document.getElementById('situacao-laudo').selectedIndex = 0;
    document.getElementById('view_laudos').selectedIndex = 0;

    const linhas = document.getElementById('tabela-dados').getElementsByTagName('tr');
    for (let i = 0; i < linhas.length; i++) 
    {
        linhas[i].style.display = '';
    }
}
  