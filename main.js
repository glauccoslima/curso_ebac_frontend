const form = document.getElementById('form-ab');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    if (numeroB.value > numeroA.value) {
        alert("Número Válido.");

        numeroA.value = '';
        numeroB.value = '';

    } else {
        alert("Número Inválido. Informe o número maior que A");
    }
})

console.log(form);

