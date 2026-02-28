// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


// Custom command for login
Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('https://www.saucedemo.com');
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});
