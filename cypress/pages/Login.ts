class Login {
  get title() {
    return cy.get('#title-login');
  }

  visit() {
    cy.visit('https://automaty-gd3cb.ondigitalocean.app/');
  }

  signIn(username: string, password: string) {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#sign-in').click();
  }
}

export default Login;