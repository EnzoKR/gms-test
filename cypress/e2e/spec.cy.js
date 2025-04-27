/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach (() => {
    cy.visit('http://127.0.0.1:8080/')
  })

  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araujo')
    cy.get('#signup-email').type('teste2@email.com')
    cy.get('#signup-password').type('Senha@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', "Cadastro realizado com sucesso!")
  })

  it('Não deve permitir cadastro sem preencher o nome', () => {
    cy.get('#signup-lastname').type('Lima')
    cy.get('#signup-email').type('teste3@email.com')
    cy.get('#signup-password').type('Senha@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', "Nome é obrigatório")
  })

  it('Não deve permitir cadastro sem preencher o sobrenome', () => {
    cy.get('#signup-firstname').type('Lucas')
    cy.get('#signup-email').type('lucas@email.com')
    cy.get('#signup-password').type('Senha@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', "Sobrenome é obrigatório")
  })
  
})