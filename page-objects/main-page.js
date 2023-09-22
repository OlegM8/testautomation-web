const path = require('path');

export class MainPage {

  constructor(page) {
    this.page = page
    this.emailField = page.locator('#email')
    this.passwordField = page.locator('#password')
    this.loginButton = page.locator('input#login')
    this.mainPageText = page.locator('#login h1')
  }

  async openMainPage () {
    const filePath = path.resolve(__dirname, '../index.html');
    await this.page.goto(`file://${filePath}`);
  }

  async login (email, password) {
    await this.emailField.fill(email)
    await this.passwordField.fill(password)
    await this.loginButton.click()
  }
}
