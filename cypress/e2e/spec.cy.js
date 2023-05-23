// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('TodoMVC', () => {
  it('loads', () => {
    cy.visit('/')
    cy.get('main')
    cy.get('#app')
      .should('have.prop', '__vue_app__')
      .its('_instance.data.todos')
      .then((todos) => (todos.length = 0))
    cy.get('.todos li').should('have.length', 0)
    cy.get('[data-cy=add]').type('new todo{enter}')
    cy.get('.todos li').should('have.length', 1)
    cy.contains('.todos li', 'new todo')
  })
})
