$(document).ready(function () {

    $("ul").on("click", "li", function () {
        $(this).toggleClass("riscado");
    });

    $("form").on("submit", function (e) {
        e.preventDefault();

        const listaDeTarefa = $("#lista-de-tarefa").val();

        $(`<li>${listaDeTarefa}</li>`).appendTo("ul");

        $("#lista-de-tarefa").val("");
    });
});
