
// ********************************************************************************************************
// ********************************** CODIGO PARA COLOCAR EM HIDDEMENU.JS**********************************
// ********************************************************************************************************

const menu_opcoes = document.getElementById('menuopcoes');

menu_opcoes.addEventListener('click', function () {
    const menu_b = document.getElementById('menu-bottom');

    if(menu_b.style.display === 'none') {
        menu_b.style.display = 'block flex';
    } else{
        menu_b.style.display = 'none';
    }
}
)
// ********************************************************************************************************
// ********************************** FIM CODIGO  HIDDEMENU.JS**********************************
// ******************************************************************************************************** 

// ********************************************************************************************************
// ********************************** iNICIO FILTER TASK*************************************************
// ******************************************************************************************************** 
const INPUT_BUSCA = document.getElementById('input-busca');
const TABELA_DADOS = document.getElementById('tabela-dados');
const SELECT_MODALIDADE = document.getElementById('select-modalidade');
const SELECT_UNIDADE = document.getElementById('select-unidade');
const START_DATE = document.getElementById('startDate');
const END_DATE = document.getElementById('endDate');
const NUM_LINHAS = document.getElementById('linhas');
const RADIO_LETIVOS = document.getElementById('flexRadioDefault1');
const RADIO_URGENTES = document.getElementById('flexRadioDefault2');

function aplicarFiltros() {
    const expressao = INPUT_BUSCA.value.toLowerCase();
    const modalidadeSelecionada = SELECT_MODALIDADE.value.toLowerCase();
    const unidadeSelecionada = SELECT_UNIDADE.value.toLowerCase();
    
    const startDate = START_DATE.value ? new Date(converterDataBrasileira(START_DATE.value)) : null;
    const endDate = END_DATE.value ? new Date(converterDataBrasileira(END_DATE.value)) : null;
    
    const laudosLetivosSelecionados = RADIO_LETIVOS.checked;
    const laudosUrgentesSelecionados = RADIO_URGENTES.checked;

    let linhas = TABELA_DADOS.getElementsByTagName('tr');
    
    for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i];
        const conteudoLinha = linha.innerHTML.toLowerCase();
        const colunaModalidade = linha.cells[3].textContent.toLowerCase();
        const colunaUnidade = linha.cells[5].textContent.toLowerCase();
        const dataLinhaTexto = linha.cells[0].innerText;
        const dataLinha = converterDataBrasileira(dataLinhaTexto);

        const dataExame = new Date(dataLinha);
        const agora = new Date();
        const diferencaHoras = (agora - dataExame) / 1000 / 3600; 
        
        const exameLetivo = diferencaHoras <= 48; 
        const exameUrgente = diferencaHoras > 48;

        const atendeFiltroLaudos = (laudosLetivosSelecionados && exameLetivo) || (laudosUrgentesSelecionados && exameUrgente);

        const atendeFiltroSelect = 
            (modalidadeSelecionada === "" || colunaModalidade.includes(modalidadeSelecionada)) &&
            (unidadeSelecionada === "" || colunaUnidade.includes(unidadeSelecionada));

        const atendeFiltroBusca = expressao === "" || conteudoLinha.includes(expressao);

        const atendeFiltroData = (startDate === null || startDate <= dataLinha) && 
                                 (endDate === null || endDate >= dataLinha);

        if (atendeFiltroLaudos && atendeFiltroSelect && atendeFiltroBusca && atendeFiltroData) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    }

    mostrarLinhas();
}

function converterDataBrasileira(dataString) {
    const [data, horario] = dataString.split(' '); 
    const [dia, mes, ano] = data.split('/'); 
    const [hora = '00', minuto = '00'] = horario ? horario.split(':') : []; 
    return new Date(`${ano}-${mes}-${dia}T${hora}:${minuto}:00`); 
}

function mostrarLinhas() {
    const numLinhas = parseInt(NUM_LINHAS.value);
    const linhas = TABELA_DADOS.getElementsByTagName('tr');
    
    let contador = 0;
    for (let i = 0; i < linhas.length; i++) {
        if (linhas[i].style.display !== 'none') {
            contador++;
        }
    }
    
    let linhasExibidas = 0;
    for (let i = 0; i < linhas.length; i++) {
        if (linhas[i].style.display !== 'none') {
            if (linhasExibidas < numLinhas || !numLinhas || numLinhas <= 0) {
                linhas[i].style.display = '';
                linhasExibidas++;
            } else {
                linhas[i].style.display = 'none';
            }
        }
    }
}

// Adicionando os eventos de filtro
INPUT_BUSCA.addEventListener('keyup', aplicarFiltros);
SELECT_MODALIDADE.addEventListener('change', aplicarFiltros);
SELECT_UNIDADE.addEventListener('change', aplicarFiltros);
START_DATE.addEventListener('change', aplicarFiltros);
END_DATE.addEventListener('change', aplicarFiltros);
NUM_LINHAS.addEventListener('input', aplicarFiltros);
RADIO_LETIVOS.addEventListener('change', aplicarFiltros);
RADIO_URGENTES.addEventListener('change', aplicarFiltros);


// ********************************************************************************************************
// **********************************FIM  filter task ********************************************************
// ******************************************************************************************************** 

const select = document.getElementById('select-unidade');
select.addEventListener('click', () => {
  select.classList.toggle('rotate-arrow');
});

const selectb = document.getElementById('select-modalidade');
selectb.addEventListener('click', () => {
  selectb.classList.toggle('rotate-arrow');
});

// ********************************************************************************************************
// **********************************inicio limpar filtros********************************************************
// ******************************************************************************************************** 



function limparFiltros() {
  
  document.getElementById('input-busca').value = '';
  document.getElementById('select-modalidade').value = '';
  document.getElementById('select-unidade').value = '';
  document.getElementById('linhas').value = '';
  document.getElementById('startDate').value = '';
  document.getElementById('endDate').value = '';
  document.getElementById('flexRadioDefault1');
  document.getElementById('flexRadioDefault2');

  const linhas = document.getElementById('tabela-dados').getElementsByTagName('tr');
  for (let i = 0; i < linhas.length; i++) {
      linhas[i].style.display = '';
  }
}
// ********************************************************************************************************
// **********************************fim limpar fitlros********************************************************
// ******************************************************************************************************** 

function converterDataBrasileira(dataString) {
  const [dia, mes, ano] = dataString.split('/');
  return new Date(`${ano}-${mes}-${dia}`);
}

function mostrarDadosDeHoje() {
  const today = new Date();
  const todayString = today.toLocaleDateString('pt-BR');
  
  const rows = document.querySelectorAll("#tabela-dados tr");
  rows.forEach(row => {
    const examDateText = row.cells[0].innerText;
    row.style.display = (examDateText === todayString) ? "" : "none";
  });
}

function mostrarDadosDeOntem() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toLocaleDateString('pt-BR');
  
  const rows = document.querySelectorAll("#tabela-dados tr");
  rows.forEach(row => {
    const examDateText = row.cells[0].innerText;
    row.style.display = (examDateText === yesterdayString) ? "" : "none";
  });
}

function mostrarDadosDeTresDiasAtras() {
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const threeDaysAgoString = threeDaysAgo.toLocaleDateString('pt-BR');
  
  const rows = document.querySelectorAll("#tabela-dados tr");
  rows.forEach(row => {
    const examDateText = row.cells[0].innerText;
    row.style.display = (examDateText === threeDaysAgoString) ? "" : "none";
  });
}




