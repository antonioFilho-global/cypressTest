// <reference types="cypress" />

describe('curso', () => {

  it('Criar conta', () => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(':nth-child(2) > .nav-link').click()
    
    //Campo de Nome
    cy.get('.form-group:nth-child(1) > .form-control').type('teste criar conta')
    //Campo de Email
    /*gerando email aloatorio */
    let email = 'emailTeste'
    email = email.concat(Math.random(), '@test.com')

    cy.get('.form-control:nth-child(2)').type(email)
    //Campo de senha
    cy.get('.form-group:nth-child(3) > .form-control').type('novasenha')
    //Botão registrar
    cy.get('.btn').click()

    //Validação da criação de conta
    cy.get('.toast').should('be.visible')
    .and('contain', 'Usuário adicionado com sucesso')
  })

  it('login', () => {
    cy.visit('https://barrigareact.wcaquino.me/')

    cy.get('[data-test="email"]').type('antonioteste@gmail.com')
    cy.get('[data-test="passwd"]').type('novasenha')
    cy.get('.btn').click()

    //Validação do login com sucesso
    cy.get('.toast').should('be.visible')
    .and('contain', 'Bem vindo')
  })

  it('Inserir conta', () => {
    cy.visit('https://barrigareact.wcaquino.me/')

    cy.get('[data-test="email"]').type('antonioteste@gmail.com')
    cy.get('[data-test="passwd"]').type('novasenha')
    cy.get('.btn').click()

    //Validação do login com sucesso
    cy.get('.toast').should('be.visible')
    .and('contain', 'Bem vindo')

    //Entrar no menu contas
    cy.get('[data-test=menu-settings]').click()
    cy.get('[href="/contas"]').click()

    //Inserir conta
    /*gerando conta aloatorio*/
    let conta = 'Conta '
    conta = conta.concat(Math.random(), ' de Teste')
    cy.get('[data-test="nome"]').type(conta)

    //clicar no botão de salvar
    cy.get('.btn').click()
    
    //Validação de menssagem de sucesso
    //verifica se a menssagem está visiviel e se contem a menssagem esperada
    cy.get('.toast-success > .toast-message').should('be.visible')
    .and('contain', 'Conta inserida com sucesso!')
  })
  
})