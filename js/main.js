$(document).ready(function () {
    console.log("ready");

    // Função para determinar o formato da máscara do campo telefone
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 0 0000-0000' : '(00) 0000-00009';
    };

    // Opções para aplicar a máscara no campo telefone
    var spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };

    // Aplica a máscara no campo telefone
    $('#telefone').mask(SPMaskBehavior, spOptions);

    // Aplica a máscara no campo CPF
    $('#cpf').mask('000.000.000-00');

    // Aplica a máscara no campo CEP
    $('#cep').mask('00000-000');

    // Adiciona o método de validação personalizado para o nome completo
    $.validator.addMethod("nomeCompleto", function (value, element) {
        return this.optional(element) || /^[^\s]+(\s+[^\s]+)+$/.test(value);
    }, "Por favor, informe o nome completo.");

    // Função para capitalizar iniciais, excluindo preposições e artigos
    function capitalizeName(name) {
        var prepositionsAndArticles = ['e', 'da', 'de', 'do', 'das', 'dos', 'a', 'an', 'and', 'the'];
        return name.toLowerCase().replace(/\b\w+/g, function (word, index, fullString) {
            if (prepositionsAndArticles.includes(word) && index !== 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
    }

    // Adiciona o método de validação personalizado para o email
    $.validator.addMethod("emailStrict", function (value, element) {
        return this.optional(element) || /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
    }, "Por favor, informe um endereço de email válido.");

    // Adiciona o método de validação personalizado para o CPF
    $.validator.addMethod("cpf", function (value, element) {
        value = value.replace(/[^\d]+/g, '');
        if (value === '') return false;
        if (value.length !== 11) return false;
        // Elimina CPFs invalidos conhecidos
        if (value === "00000000000" ||
            value === "11111111111" ||
            value === "22222222222" ||
            value === "33333333333" ||
            value === "44444444444" ||
            value === "55555555555" ||
            value === "66666666666" ||
            value === "77777777777" ||
            value === "88888888888" ||
            value === "99999999999") {
            return false;
        }
        // Valida 1o digito
        let add = 0;
        for (let i = 0; i < 9; i++) {
            add += parseInt(value.charAt(i)) * (10 - i);
        }
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
        if (rev !== parseInt(value.charAt(9))) {
            return false;
        }

        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i++) {
            add += parseInt(value.charAt(i)) * (11 - i);
        }
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
        if (rev !== parseInt(value.charAt(10))) {
            return false;
        }

        return true;
    }, "Por favor, informe um CPF válido.");

    // Adiciona o método de validação personalizado para o CEP
    $.validator.addMethod("cep", function (value, element) {
        return this.optional(element) || /^\d{5}-\d{3}$/.test(value);
    }, "Por favor, informe um CEP válido.");

    // Adiciona evento 'blur' para o campo nome
    $('#nome').on('blur', function () {
        var capitalized = capitalizeName($(this).val());
        $(this).val(capitalized);
    });

    // Adiciona evento 'blur' para o campo CPF
    $('#cpf').on('blur', function () {
        $('#meuFormulario').validate().element('#cpf');
    });

    // Função para buscar endereço a partir do CEP
    function buscarEndereco(cep) {
        if (cep.length !== 9) return;

        $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function (data) {
            if (data && !("erro" in data)) {
                let endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                $("#endereco").val(endereco);
            } else {
                $("#endereco").val("");
            }
        });
    }

    // Adiciona evento 'blur' para o campo CEP
    $('#cep').on('blur', function () {
        $('#meuFormulario').validate().element('#cep');
        buscarEndereco($(this).val());
    });

    // Configura a validação do formulário
    $('#meuFormulario').validate({
        // Define as regras de validação para cada campo
        rules: {
            nome: {
                required: true,
                nomeCompleto: true
            },
            email: {
                required: true,
                emailStrict: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            cpf: {
                required: true,
                cpf: true // Adicionado método de validação personalizado para o CPF
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                cep: true // Adicionado método de validação personalizado para o CEP
            },
        },
        // Define as mensagens personalizadas para cada campo
        messages: {
            telefone: 'Por favor, informe o número de telefone ou celular.',
            endereco: 'Por favor, informe o endereço completo.'
        },
    });


});
