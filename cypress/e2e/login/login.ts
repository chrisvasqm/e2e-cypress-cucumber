import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
import Login from '../../pages/Login';
import Welcome from '../../pages/Welcome';

const login = new Login();
const welcome = new Welcome();

Given('I visit the website', () => {
  login.visit();
});

When('I enter valid credentials', () => {
  login.signIn('admin', 'admin');
});

Then('I should be logged in', () => {
  welcome.title.should('exist').and('have.text', 'Welcome back');
});

Then('can signout', () => {
  welcome.signOut();
  login.title.should('exist').and('have.text', 'Login');
})