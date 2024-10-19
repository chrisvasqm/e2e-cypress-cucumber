describe('Automaty', () => {
  it('should be able to visit the site', () => {
    cy.visit('https://automaty-gd3cb.ondigitalocean.app/');

    cy.get('#title-login').should('have.text', 'Login');
  });
});
