class Welcome {
  get title() {
    return cy.get('#title-welcome-back', {timeout: 6000});
  }

  signOut() {
    cy.get('#sign-out').click();
  }
}

export default Welcome;
