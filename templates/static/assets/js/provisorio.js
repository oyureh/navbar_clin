
// ********************************************************************************************************
// ********************************** CODIGO PARA COLOCAR EM HIDDEMENU.JS**********************************
// ********************************************************************************************************

const menu_opcoes = document.getElementById('menuopcoes');
const menu_b = document.getElementById('menu-bottom');

menu_opcoes.addEventListener('click', function () {

    if(menu_b.style.display === 'block') {
        menu_b.style.display = 'none';
    } else{
        menu_b.style.display = 'block';
    }
}
)


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

