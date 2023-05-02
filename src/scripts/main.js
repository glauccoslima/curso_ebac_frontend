// Adiciona um ouvinte de evento ao carregar todo o conteúdo do documento
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de evento ao formulário com id 'form-sorteador' quando ele é submetido
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        // Previne o comportamento padrão do evento de submit, que é recarregar a página
        evento.preventDefault();

        // Obtém o valor do campo de entrada com id 'numero-maximo'
        let numeroMaximo = document.getElementById('numero-maximo').value;

        // Converte o valor obtido para um número inteiro
        numeroMaximo = parseInt(numeroMaximo);

        // Gera um número aleatório entre 0 e 'numeroMaximo'
        let numeroAleatorio = Math.random() * numeroMaximo;

        // Arredonda o número para baixo (caso seja um número decimal) e soma 1 (para que o valor mínimo seja 1 e não 0)
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        // Exibe o número aleatório no elemento com id 'resultado-valor'
        document.getElementById('resultado-valor').innerText = numeroAleatorio;

        // Torna visível o elemento com a classe 'resultado'
        document.querySelector('.resultado').style.display = 'block';
    })
})
