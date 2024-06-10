const tarefa = document.querySelector("#tarefa")
const formulario = document.querySelector("#formulario")
const lista_tarefa = document.querySelector("#lista_tarefa")



document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var tarefaInput = document.getElementById('tarefa');
    var tarefaTexto = tarefaInput.value;

    if (tarefaTexto.trim() !== '') {
        
        var listaTarefas = document.getElementById('lista_tarefa');
        var novoItem = document.createElement('li');

        
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        novoItem.appendChild(checkbox);

        
        var textoTarefa = document.createTextNode(tarefaTexto);
        novoItem.appendChild(textoTarefa);

        
        var botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', function() {
            listaTarefas.removeChild(novoItem);
        });
        novoItem.appendChild(botaoExcluir);

        
        listaTarefas.appendChild(novoItem);

        
        tarefaInput.value = '';
    }
});