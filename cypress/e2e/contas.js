// <reference types="cypress" />

describe('Contas', () => {

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