import { test } from "@playwright/test"
import { LoginPage } from "../pages/loginPage.ts"

test("login test", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillCredentials("student", "Password123")
  await loginPage.submit()
  await page.waitForTimeout(5000)
})


