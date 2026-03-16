import { Page } from "@playwright/test"

export class LoginPage {
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto("https://practicetestautomation.com/practice-test-login/")
  }

  async fillCredentials(username: string, password: string) {
    await this.page.fill("#username", username)
    await this.page.fill("#password", password)
  }

  async submit() {
    await this.page.click("#submit")
  }
}