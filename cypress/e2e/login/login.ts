import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the website', () => {
  cy.visit('https://automaty-gd3cb.ondigitalocean.app/');
});

When('I enter valid credentials', () => {
  cy.get('#username').type('admin');
  cy.get('#password').type('admin');
  cy.get('#sign-in').click();
});

Then('I should be logged in', () => {
  cy.get('#title-welcome-back', {timeout: 6000}).should('exist').and('have.text', 'Welcome back');
});
