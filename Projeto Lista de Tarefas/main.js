$(document).ready(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        adicionar();
    })

    $('#tarefas').change(function adicionar() {
        let input = $(this).val();
        $('ul').append('<li>'+"* "+ input + '</li>');
        $(this).val('');
    })
    $("ul").on("click","li",function(){
        $(this).toggleClass("soblinhado");
    })
    $("ul").on("dblclick","li",function(){
        $(this).remove("li");
    })
})
