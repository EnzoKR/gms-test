/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach (() => {
    cy.visit('/')
  })

  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email = `fabio${Date.now()}@gmail.com`
    cy.preencherCadastro('Fabio', 'Araujo', email, '11123456789', 'Teste@123')
    cy.get('#signup-response').should('contain', "Cadastro realizado com sucesso!")
  })

  it('Não deve permitir cadastro sem preencher o nome', () => {
    cy.preencherCadastro('Fabio20', 'Araujo', 'teste3@email.com', '11123456789', 'Teste@123')
    cy.get('#signup-response').should('contain', "Nome deve conter apenas caracteres alfabéticos, acentuados e espaços")

  })

  it('Não deve permitir cadastro sem preencher o sobrenome', () => {
    cy.get('#signup-firstname').type('Lucas')
    cy.get('#signup-email').type('lucas@email.com')
    cy.get('#signup-password').type('Senha@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', "Sobrenome não pode estar vazio")
  })
  
})