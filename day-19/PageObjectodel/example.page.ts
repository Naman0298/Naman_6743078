import { Locator, Page } from "@playwright/test";

class Example {
    usernameTF: Locator
    passwordTF: Locator
    submitBtn: Locator
    constructor(page: Page) {
        this.usernameTF = page.locator("input#username")
        this.passwordTF = page.locator("input#password")
        this.submitBtn = page.locator("button#submit")
    }
}

export default Example
