$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        adicionarTarefa();
    })

    function adicionarTarefa() {
        const tarefa = $('#tarefa').val();
        const novaTarefa = $(`<li></li>`);

        $(`
            <a id='tarefaNova'>${tarefa}</a>
        `).appendTo(novaTarefa);

        $(novaTarefa).appendTo(`ul`);

        $('#tarefa').val(' ');

        $('li').click(function() {
            $('a').css({"text-decoration":'line-through'})
        })
        
    }
})