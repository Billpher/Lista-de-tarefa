$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        adicionarTarefa();

        $('li').click(function() {
            $('a').css({"text-decoration":'line-through'})
        })
    })

    function adicionarTarefa() {
        const tarefa = $('#tarefa').val();
        const novaTarefa = $(`<li></li>`);

        $(`
            <a id='tarefaNova'>${tarefa}</a>
        `).appendTo(novaTarefa);

        $(novaTarefa).appendTo(`ul`);

        $('#tarefa').val(' ');
    }
})