/// <reference types="cypress" />

// Descreve o conjunto de testes para a página principal
describe('Testes para home', () => {

    // Testa se a página renderiza todos os contatos ou nenhum contato
    it('Deve renderizar todos os contatos existentes ou nenhum', () => {

        // Acessa a página da aplicação
        cy.visit('https://agenda-contatos-react.vercel.app/')
        // Aguarda 5 segundos para garantir que a página carregou completamente
        cy.wait(5000)

        // Verifica se existem contatos na página ou não
        cy.get('body').then(($body) => {
            if ($body.find('.contato').length > 0) {
                // Caso existam contatos, verifica se o número de contatos é maior que 0
                cy.get('.contato').should('have.length.greaterThan', 0);
            } else {
                // Caso não existam contatos, confirma que eles realmente não existem na página
                cy.get('.contato').should('not.exist');
            }
        });
    })

    // Testa o preenchimento dos campos com dados aleatórios e submissão do formulário
    it('Deve digitar valores aleatórios nos campos e submeter o formulário', () => {

        // Acessa a página da aplicação
        cy.visit('https://agenda-contatos-react.vercel.app/')

        // Função que gera dados aleatórios para preenchimento do formulário
        const generateRandomData = () => {
            const firstNames = ['Lucas', 'Mariana', 'João', 'Isabela', 'Gustavo', 'Fernanda'];
            const lastNames = ['Silva', 'Oliveira', 'Costa', 'Pereira', 'Rodrigues', 'Lima'];

            const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            const randomName = `${randomFirstName} ${randomLastName}`;
            const randomEmail = `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@gmail.com`;
            const randomPhone = Math.floor(10000000000 + Math.random() * 90000000000).toString();

            // Retorna os dados gerados
            return {
                name: randomName,
                email: randomEmail,
                phone: randomPhone
            };
        }

        // Gera os dados aleatórios
        const randomUserData = generateRandomData();

        // Preenche os campos com os dados gerados
        cy.get('input[placeholder="Nome"]').click().type(randomUserData.name)
        cy.get('input[placeholder="E-mail"]').click().type(randomUserData.email)
        cy.wait(2000) // Aguarda 2 segundos após digitar o email
        cy.get('input[placeholder="Telefone"]').click().type(randomUserData.phone)

        // Clica no botão para adicionar o contato
        cy.get('button.adicionar').click()
        cy.wait(8000)

        // Clica no botão "Editar" do último contato adicionado
        cy.get('.contato:last').find('button.edit').click()

        // Gera novos dados aleatórios para a edição
        const randomEditData = generateRandomData();

        // Edita os campos com os novos dados gerados
        cy.get('input[placeholder="Nome"]').clear().type(randomEditData.name)
        cy.get('input[placeholder="E-mail"]').clear().type(randomEditData.email)
        cy.get('input[placeholder="Telefone"]').clear().type(randomEditData.phone)

        // Clica no botão "alterar" para salvar as edições
        cy.get('button.alterar').click()
        cy.wait(10000)

        // Clica no botão "Deletar" do último contato editado
        cy.get('.contato:last').find('button.delete').click()
    })
})
