//JAVA CRIANDO UMA LISTA 1
//JAVA CRIANDO UMA TAREFA 2
//''    ''  apredendo a marca 3
//CRIANDO UM BANCO DE DADOS LOCAL 4
//CRIANDO UMA FUNÇÃO DE ATUALIZAÇÃO 5
//CRIANDO FUNÇÃO DE LIMPAR TELA QUANDO ATUALIZAR A TELA, 6
// SEMPRE VAI LIMPAR A ULTIMA TAREFA INSERIDA

//4
let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'netflix', 'status' : 'checked'},
    {'tarefa': 'Jogar Honor Of Kings','status': 'checked'}
]
//1,2,3
const criarItem = (tarefa,status = '') => {

    const item = document.createElement('label');
    item.classList.add ('todo__item');
    item.innerHTML = `
        <input type = "checkbox" ${status}>
        <div>${tarefa}<div>
        <input type = "button" value = "X">
    `
    document.getElementById('todoList').appendChild(item);

}

//6
const limparTarfas = () =>{
    const todoList =document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}
//5
const atualizarTela = () => {
    limparTarfas(); //6 CHAMNDO A FUNÇÃO 
    banco.forEach (item => criarItem(item.tarefa, item.status));
}

atualizarTela();
atualizarTela();